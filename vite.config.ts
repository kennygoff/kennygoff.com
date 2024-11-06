import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import inspect from "vite-plugin-inspect";
import { visualizer } from "rollup-plugin-visualizer";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

declare module "@remix-run/server-runtime" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig(() => ({
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
      future: {
        v3_fetcherPersist: true,
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_singleFetch: true,
        v3_throwAbortReason: true,
      },
    }),
    netlifyPlugin(),
    tsconfigPaths(),
    visualizer({ emitFile: true }),
  ],
}));
