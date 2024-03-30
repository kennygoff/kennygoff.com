import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import inspect from "vite-plugin-inspect";
import { visualizer } from "rollup-plugin-visualizer";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

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
    remix(),
    netlifyPlugin(),
    tsconfigPaths(),
    visualizer({ emitFile: true }),
  ],
}));
