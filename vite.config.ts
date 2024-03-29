import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { config } from "@netlify/remix-adapter";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import inspect from "vite-plugin-inspect";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig((env) => ({
  server: {
    port: 3000,
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
    remix({
      ...(env.command === "build" ? config : undefined),
      // ...(process.env.NODE_ENV === "production" ? config : undefined),
    }),
    tsconfigPaths(),
    visualizer({ emitFile: true }),
  ],
}));
