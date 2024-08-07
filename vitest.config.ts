/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: false,
    environment: "happy-dom",
    // setupFiles: ["./test/setup-test-env.ts"],
    include: ["./app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
  server: {
    watch: {
      ignored: [
        ".*\\/node_modules\\/.*",
        ".*\\/build\\/.*",
        ".*\\/postgres-data\\/.*",
      ],
    },
  },
});
