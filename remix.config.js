import { config } from "@netlify/remix-adapter";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...(process.env.NODE_ENV === "production" ? config : undefined),
  // server:
  //   process.env.NETLIFY || process.env.NETLIFY_LOCAL
  //     ? "./server.js"
  //     : undefined,
  tailwind: true,
};
