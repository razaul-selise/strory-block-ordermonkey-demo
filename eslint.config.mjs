// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
	...nextCoreWebVitals,
	...nextTypescript,
	...compat.extends("prettier"),
	{
		rules: {
			"@next/next/no-html-link-for-pages": "off",
			"tailwindcss/no-custom-classname": "off",
			"no-restricted-imports": [
				"error",
				{
					name: "next/link",
					message: "Please import from `@/i18n/navigation` instead.",
				},
				{
					name: "next/navigation",
					importNames: [
						"redirect",
						"permanentRedirect",
						"useRouter",
						"usePathname",
					],
					message: "Please import from `@/i18n/navigation` instead.",
				},
			],
		},
	},
	{
		ignores: [
			"node_modules/**",
			".next/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
		],
	},
];
