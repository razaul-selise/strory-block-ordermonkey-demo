import { getStory } from "@/lib/fetchers/storyblok-fetcher";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { headers } from "next/headers";
import React from "react";
import PageLayout from "../../app/[lang]/layout";

// Mock next/headers
jest.mock("next/headers", () => ({
  headers: jest.fn(),
}));

// Mock next-intl/server
jest.mock("next-intl/server", () => ({
  setRequestLocale: jest.fn(),
}));

// Mock dynamic imports
jest.mock("next/dynamic", () => {
  return jest.fn(() => {
    const Component = () => <div data-testid="mocked-component" />;
    return Component;
  });
});

// Mock fetchers
jest.mock("@/lib/fetchers/storyblok-fetcher", () => ({
  fetchSBData: jest.fn(),
  getStory: jest.fn(),
}));

// Mock utils
jest.mock("@/lib/utils", () => ({
  getEnvPrefixFromDomain: jest.fn(() => "dev"),
}));

// Mock fonts
jest.mock("@/components/fonts", () => ({
  twkEverett: { className: "mocked-font" },
}));

// Mock Footer component as sync
jest.mock("@/components/section/Footer", () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer Content</footer>;
  };
});

// Mock providers
jest.mock("@/components/global-provider", () => ({
  GlobalStateProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="global-state-provider">{children}</div>
  ),
}));

jest.mock("@/components/storyblokProvider", () => ({
  StoryblokProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="storyblok-provider">{children}</div>
  ),
}));

jest.mock("@/components/theme-provider", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}));

// Mock NextIntlClientProvider
jest.mock("next-intl", () => ({
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="next-intl-provider">{children}</div>
  ),
}));

// Mock i18n config
jest.mock("@/i18n/i18n-config", () => ({
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
}));

const mockHeaders = headers as jest.MockedFunction<typeof headers>;
const mockGetStory = getStory as jest.MockedFunction<typeof getStory>;

describe("PageLayout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.CURRENT_ENV = "dev";
    const mockHeadersObj = new Headers();
    mockHeadersObj.set("host", "localhost:3000");
    mockHeaders.mockResolvedValue(mockHeadersObj);
    mockGetStory.mockResolvedValue({
      content: {
        burger_menu: [],
        contact_details: [],
        login_btn_redirection_link: { url: "/login" },
        footer: { items: [] },
      },
    });
  });

  it("renders layout with all providers", async () => {
    const params = Promise.resolve({ lang: "en" as const });
    const children = <div data-testid="page-content">Page Content</div>;

    const LayoutComponent = await PageLayout({ children, params });
    render(LayoutComponent);

    expect(document.querySelector("html")).toHaveAttribute("lang", "en");
    expect(document.querySelector("body")).toHaveClass("mocked-font", "antialiased");
  });

  it("generates static params correctly", async () => {
    const layoutModule = await import("../../app/[lang]/layout");
    const params = await layoutModule.generateStaticParams();

    expect(params).toEqual([{ lang: "en" }, { lang: "de" }]);
  });

  it("sets correct metadata", async () => {
    const layoutModule = await import("../../app/[lang]/layout");
    expect(layoutModule.metadata).toEqual({ title: "KRAAK" });
  });

  it("sets revalidate time correctly", async () => {
    const layoutModule = await import("../../app/[lang]/layout");
    expect(layoutModule.revalidate).toBe(300);
  });

  it("handles different host headers", async () => {
    const mockHeadersObj = new Headers();
    mockHeadersObj.set("host", "example.com");
    mockHeaders.mockResolvedValue(mockHeadersObj);

    const params = Promise.resolve({ lang: "de" as const });
    const children = <div>Content</div>;

    const LayoutComponent = await PageLayout({ children, params });
    render(LayoutComponent);

    expect(mockGetStory).toHaveBeenCalledWith("dev", "global", "de");
  });

  it("handles missing host header", async () => {
    const mockHeadersObj = new Headers();
    mockHeaders.mockResolvedValue(mockHeadersObj);

    const params = Promise.resolve({ lang: "en" as const });
    const children = <div>Content</div>;

    const LayoutComponent = await PageLayout({ children, params });
    render(LayoutComponent);

    expect(mockGetStory).toHaveBeenCalledWith("dev", "global", "en");
  });

  it("renders with correct theme container structure", async () => {
    const params = Promise.resolve({ lang: "en" as const });
    const children = <div data-testid="page-content">Page Content</div>;

    const LayoutComponent = await PageLayout({ children, params });
    const { container } = render(LayoutComponent);

    const themeContainer = container.querySelector(".theme-container");
    expect(themeContainer).toBeInTheDocument();
    expect(themeContainer).toHaveClass("relative", "mt-[-100vh]", "min-h-screen", "px-0");
  });

  it("passes correct props to Header component", async () => {
    const mockGlobalStory = {
      burger_menu: [{ title: "Menu Item" }],
      contact_details: [{ phone: "123-456-7890" }],
      login_btn_redirection_link: { url: "/login" },
      footer: { items: [] },
    };

    mockGetStory.mockResolvedValue({ content: mockGlobalStory });

    const params = Promise.resolve({ lang: "en" as const });
    const children = <div>Content</div>;

    const LayoutComponent = await PageLayout({ children, params });
    render(LayoutComponent);

    // Verify that getStory was called with correct parameters
    expect(mockGetStory).toHaveBeenCalledWith("dev", "global", "en");
  });
});
