/*

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
 

*/


import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { createConfig } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = createConfig([
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["*.tsx", "*.ts"], // Apply this config to .ts and .tsx files
    rules: {
      // Your custom rules here
      "react/prop-types": "off", // Example rule
    },
  },
]);

export default eslintConfig;
