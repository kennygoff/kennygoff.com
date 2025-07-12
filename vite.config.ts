import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import inspect from "vite-plugin-inspect";
import { visualizer } from "rollup-plugin-visualizer";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouterDevTools } from "react-router-devtools";

export default defineConfig(({ isSsrBuild }) => ({
  test: {
    environment: "happy-dom",
  },
  build: {
    rollupOptions: isSsrBuild
      ? {
          input: "./server/app.ts",
        }
      : undefined,
  },
  plugins: [
    reactRouterDevTools(),
    inspect(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    // {
    //   enforce: "pre",
    //   ...mdx({
    //     development: env.command === "serve",
    //     remarkPlugins: [
    //       remarkFrontmatter,
    //       remarkMdxFrontmatter,
    //     ],
    //   }),
    // },
    reactRouter(),
    tsconfigPaths(),
    visualizer({ emitFile: true }),
    tailwindcss(),
  ],
}));
