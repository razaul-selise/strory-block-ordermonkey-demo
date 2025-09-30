// app/fonts.ts
import localFont from "next/font/local";

export const twkEverett = localFont({
  display: "swap",
  src: [
    // Hairline - 100 normal & italic
    // { path: "./fonts/TWKEverett/TWKEverett-Hairline.woff2", weight: "100", style: "normal" },
    // { path: "./fonts/TWKEverett/TWKEverett-HairlineItalic.woff2", weight: "100", style: "italic" },

    // Thin - 200
    // { path: "./fonts/TWKEverett/TWKEverett-Thin.woff2", weight: "200", style: "normal" },
    // { path: "./fonts/TWKEverett/TWKEverett-ThinItalic.woff2", weight: "200", style: "italic" },

    // Ultralight (Extra Light) - 300
    // { path: "./fonts/TWKEverett/TWKEverett-Ultralight.woff2", weight: "300", style: "normal" },
    // {
    //   path: "./fonts/TWKEverett/TWKEverett-UltralightItalic.woff2",
    //   weight: "300",
    //   style: "italic",
    // },

    // Light - 300 (also at 300 weight)
    { path: "./fonts/TWKEverett/TWKEverett-Light.woff2", weight: "300", style: "normal" },
    // { path: "./fonts/TWKEverett/TWKEverett-LightItalic.woff2", weight: "300", style: "italic" },

    // Regular / Book - 400
    { path: "./fonts/TWKEverett/TWKEverett-Book.woff2", weight: "400", style: "normal" },
    // { path: "./fonts/TWKEverett/TWKEverett-BookItalic.woff2", weight: "400", style: "italic" },

    // Medium - 500
    { path: "./fonts/TWKEverett/TWKEverett-Medium.woff2", weight: "500", style: "normal" },
    // { path: "./fonts/TWKEverett/TWKEverett-MediumItalic.woff2", weight: "500", style: "italic" },

    // Bold - 700
    { path: "./fonts/TWKEverett/TWKEverett-Bold.woff2", weight: "700", style: "normal" },
    // { path: "./fonts/TWKEverett/TWKEverett-BoldItalic.woff2", weight: "700", style: "italic" },

    // Extra Bold - 800
    // { path: "./fonts/TWKEverett/TWKEverett-Extrabold.woff2", weight: "800", style: "normal" },
    // { path: "./fonts/TWKEverett/TWKEverett-ExtraboldItalic.woff2", weight: "800", style: "italic" },

    // Black - 900
    // { path: "./fonts/TWKEverett/TWKEverett-Black.woff2", weight: "900", style: "normal" },
    // { path: "./fonts/TWKEverett/TWKEverett-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
});
