# Next.js + Storyblok Production Starter

This repository includes a **fully setup production-ready Next.js application** with the following integrations and configurations:

- ✅ **Storyblok** setup with multiple environments
- ✅ **ESLint** configuration
- ✅ **SonarQube** setup
- ✅ **Git pre-hooks** (via Husky)
- ✅ **Multi-environment setup** (dev, stage, prod)
- ✅ **Production-grade structure**
- ✅ **Google Tag Manager,Google Consent Mode,Usercentric Cookiebot CMP**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2.Install dependencies

```bash
pnpm install
```

### 3.Setup Git hooks

```bash
sh scripts/setup-hooks.sh

```

### 4.Setup Storyblok

Go to the package.json file and replace YOUR*SPACE_ID_WITHOUT*# with your SB space id.DO this Step each time you update storyblok schema to get the latest types and suggestions. Now run

```bash
storyblok login
pnpm pull-sb-components
pnpm generate-sb-types
```

### 5. Run the development server

```bash
pnpm dev
or
pnpm dev-https
```

### 5. Usefull functions

You will find some usefull function on utils.ts. and lib folder.

### 6. Google Tag Manager,Google Consent Mode,Usercentric Cookiebot CMP

Google Tag Manager,Google Consent Mode,Usercentric Cookiebot CMP all of them are integrated and commented out on src/app/[lang]/layout.tsx file.Uncomment based on your need.
