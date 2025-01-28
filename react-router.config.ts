import type { Config } from "@react-router/dev/config";

export default {
  async prerender() {
    return [
      "/",
      "/5e-campaign-wiki-notion-template",
      "/5e-dm-screen-notion-template",
      "/2025-bingo",
      // Articles
      "/beyond-wave-echo-cave",
      "/digital-dice-vs-physical-dice",
      "/notion-features-for-running-dnd",
      "/owlbear-rodeo-the-painless-virtual-tabletop",
      "/using-notion-dm-screen",
      // Posts (Old)
      "/posts/a-new-freelancers-guide-to-freelancing",
      "/posts/dark-mode-and-stripe-mode",
      "/posts/inwave-labs-4-years",
    ];
  },
} satisfies Config;
