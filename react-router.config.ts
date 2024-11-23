import type { Config } from "@react-router/dev/config";

export default {
  // Does not work, seems to not work with either netlify config or custom server
  // async prerender() {
  //   return ["/"];
  // },
} satisfies Config;
