import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
  test: {
    environment: "happy-dom",
    coverage: {
      include: ["app/**/*.{js,jsx,ts,tsx}"],
    },
  },
}));
