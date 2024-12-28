import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import inspect from "vite-plugin-inspect";
import { visualizer } from "rollup-plugin-visualizer";
import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

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
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
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
  ],
}));
