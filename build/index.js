var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HSL4OXBM.css";

// app/components/fathom.tsx
import { useLocation } from "@remix-run/react";
import { load, trackPageview } from "fathom-client";
import { useEffect, useRef } from "react";
var FATHOM_ID = "HMQYESLQ", FATHOM_URL = "https://cdn.usefathom.com/script.js", Fathom = () => {
  let location = useLocation(), fathom = useRef({
    isLoaded: !1,
    location: {
      pathname: "",
      search: ""
    }
  });
  return useEffect(() => {
    fathom.current.isLoaded === !1 ? (load(FATHOM_ID, {
      url: FATHOM_URL,
      includedDomains: [
        "kennygoff.com",
        "*.kennygoff.com",
        "www.kennygoff.com"
      ],
      excludedDomains: [
        "kennygoff.netlify.app",
        "localhost",
        "127.0.0.1",
        "localhost:3000"
      ]
    }), fathom.current.isLoaded = !0, fathom.current.location.pathname = location.pathname, fathom.current.location.search = location.search) : (fathom.current.location.pathname !== location.pathname || fathom.current.location.search !== location.search) && (trackPageview(), fathom.current.location.pathname = location.pathname, fathom.current.location.search = location.search);
  }, [location.pathname, location.search]), null;
}, fathom_default = Fathom;

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var meta = () => [
  {
    charset: "utf-8"
  },
  { title: "Kenny Goff" },
  { name: "viewport", content: "width=device-width,initial-scale=1" }
], links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "bg-slate-900 text-slate-200", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2("link", { rel: "manifest", href: "/site.webmanifest" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(fathom_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx
var articles_owlbear_rodeo_the_painless_virtual_tabletop_exports = {};
__export(articles_owlbear_rodeo_the_painless_virtual_tabletop_exports, {
  attributes: () => attributes,
  default: () => articles_owlbear_rodeo_the_painless_virtual_tabletop_default,
  filename: () => filename,
  handle: () => handle,
  headers: () => headers,
  meta: () => meta2
});
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var attributes = {
  title: "Owlbear Rodeo: The painless virtual tabletop",
  published: /* @__PURE__ */ new Date(16805664e5),
  updated: /* @__PURE__ */ new Date(16805664e5),
  meta: {
    title: "Owlbear Rodeo: The painless virtual tabletop",
    description: "A breakdown of the Owlbear Rodeo virtual tabletop's best features, some areas it could improve, and the bright future it has"
  }
};
function _createMdxContent(props) {
  let _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    img: "img",
    h3: "h3",
    ol: "ol",
    li: "li",
    strong: "strong"
  }, props.components);
  return /* @__PURE__ */ jsxDEV3(Fragment, { children: [
    /* @__PURE__ */ jsxDEV3(_components.h1, { children: attributes.title }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.p, { children: [
      /* @__PURE__ */ jsxDEV3(_components.a, { href: "https://www.owlbear.app/", children: "Owlbear Rodeo" }, void 0, !1, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 84
      }, this),
      ` is easily one of my favorite TTRPG
tools for running games online. It manages to provide a robust map sharing
experience while being incredibly simple to use. Unlike other virtual tabletops
(VTTs) like Roll20 or FoundryVTT, Owlbear instead focuses on making it's core
experience of battle-map sharing incredibly simple, and I think succeeds the
most in providing an experience like the one at a real table.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 69
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.p, { children: /* @__PURE__ */ jsxDEV3(_components.img, { src: "/images/articles/why-i-love-owlbear-rodeo/owlbear-1.webp", alt: "Screenshot of Owlbear Rodeo with hidden DM notes" }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 617
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 602
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.h3, { children: "My experience with Owlbear Rodeo" }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 776
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.p, { children: `Owlbear Rodeo's streamlined and simplified map editor makes it incredibly easy
to drop in a map and start playing. I find it is the VTT that comes closest to
rolling out a map and dropping miniatures on it. It provides just enough tools
to match the experience of playing in person but with nice features that enhance
and take advantage of the benefits of playing digitally online. It focuses on
sharing a map and giving you and your players a place to write, draw, and
collaborate, and that's the part that we interface with the most.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 851
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.p, { children: /* @__PURE__ */ jsxDEV3(_components.img, { src: "/images/articles/why-i-love-owlbear-rodeo/owlbear-3.webp", alt: "Screenshot of Owlbear Rodeo with a custom map" }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 1448
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 1433
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.p, { children: `And while I've found other VTTs seem so feature rich when you buy published
content in the platform, they are daunting and confusing when you need to make
things from scratch. In Owlbear, it's just as easy to load in maps from
published adventures as it is to upload a quick dungeon sketched out on my iPad
or scanned in from my notebook. Plus, they have added small add-ons and
extensions that you can enhance and upgrade your experience with, in case you
need a few more things than just a shared map with tokens.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 1604
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.h3, { children: "5 things I love about Owlbear Rodeo" }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 2166
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.p, { children: `There's a lot I like about Owlbear Rodeo, but here's just a few of my favorite
things that make each session I run a breeze.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 2244
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.ol, { children: [
      `
`,
      /* @__PURE__ */ jsxDEV3(_components.li, { children: [
        /* @__PURE__ */ jsxDEV3(_components.strong, { children: "Focus and straightforward simplicity" }, void 0, !1, {
          fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
          lineNumber: 23,
          columnNumber: 2448
        }, this),
        ` \u2014 As I've said a bunch, the
focus on the map editing and sharing experience has really made Owlbear Rodeo
so joyful to use. From uploading new monster tokens to adding or removing
fog, it's easy to learn and never gets overcomplicated.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 2432
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV3(_components.li, { children: [
        /* @__PURE__ */ jsxDEV3(_components.strong, { children: "Jumping from scene to scene" }, void 0, !1, {
          fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
          lineNumber: 23,
          columnNumber: 2811
        }, this),
        ` \u2014 Switching scenes from overland maps
to dungeons and back is so snappy, and easy to do. I'm regularly hopping back
to my overland map to give my players context or talk to them about where
quests will take them`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 2795
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV3(_components.li, { children: [
        /* @__PURE__ */ jsxDEV3(_components.strong, { children: "Quick add tokens, images, whatever" }, void 0, !1, {
          fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
          lineNumber: 23,
          columnNumber: 3141
        }, this),
        ` \u2014 Being able to really quickly
drop in a token I hadn't uploaded ahead of time works perfectly each time and
its simple to organize in folders after. I sometimes even just load up images
of NPCs or landscapes there rather than ask my players to check discord for
an image.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 3125
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV3(_components.li, { children: [
        /* @__PURE__ */ jsxDEV3(_components.strong, { children: "Access to all your content for all your rooms" }, void 0, !1, {
          fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
          lineNumber: 23,
          columnNumber: 3540
        }, this),
        ` \u2014 All my content is
tied to my account so I have a folder for each campaign and a folder with
"global" things like monster tokens. This makes it really easy to quickly
build up a library of tools for use in multiple campaigns.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 3524
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV3(_components.li, { children: [
        /* @__PURE__ */ jsxDEV3(_components.strong, { children: "Owlbear Rodeo default tokens & attachments" }, void 0, !1, {
          fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
          lineNumber: 23,
          columnNumber: 3905
        }, this),
        ` \u2014 I highly recommend
enabling the Owlbear tokens and conditions. The tokens come in handy when you
don't have a specific monster token and the condition and status attachments
are really helpful for remembering conditions.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 3889
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 2410
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.p, { children: /* @__PURE__ */ jsxDEV3(_components.img, { src: "/images/articles/why-i-love-owlbear-rodeo/owlbear-5.webp", alt: "Screenshot of Owlbear Rodeo with a library of monster tokens" }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 4283
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 4268
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.h3, { children: "5 things I dislike about Owlbear Rodeo" }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 4454
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.p, { children: `Nothing is perfect, and while I have mostly positive things to say, Owlbear has
it's flaws too. Admittedly these are pretty minor inconveniences, but I really
haven't experienced anything game-breaking.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 4535
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.ol, { children: [
      `
`,
      /* @__PURE__ */ jsxDEV3(_components.li, { children: [
        /* @__PURE__ */ jsxDEV3(_components.strong, { children: "Editing is \u201Clive\u201D for players to see" }, void 0, !1, {
          fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
          lineNumber: 23,
          columnNumber: 4818
        }, this),
        ` \u2014 Sometimes I am prepping last
minute and my players like to log in and open up Owlbear while I'm setting
up. If they do that they see me changing scenes and maps without fog. I could
kick them out each time but that is more work. Instead I have made an extra
room I use for this purpose, where only I can see, but that takes up a pretty
valuable room slot on the paid plan. Similarly mid-edit revealing fog is
shared before I confirm the fog is "set". An "editing" mode toggle would be
nice, just to quickly hide everything from the players.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 4802
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV3(_components.li, { children: [
        /* @__PURE__ */ jsxDEV3(_components.strong, { children: "Grid map setup" }, void 0, !1, {
          fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
          lineNumber: 23,
          columnNumber: 5496
        }, this),
        ` \u2014 Depending on the map, the grids can line up
perfectly the first time or the scale can be really hard to get right. I've
gotten pretty quick with it and found messing with PPI is the easiest way to
fit the grid, but I find myself fiddling with the grid when it doesn't work
too often. It would be nice to just draw over a square corner-to-corner on
the grid itself, especially when perfect alignment isn't needed just a rough
guide.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 5480
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV3(_components.li, { children: [
        /* @__PURE__ */ jsxDEV3(_components.strong, { children: "Notes text scale" }, void 0, !1, {
          fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
          lineNumber: 23,
          columnNumber: 6038
        }, this),
        ` \u2014 The text scaling on sticky notes is very weird,
I can never get them to look quite right. Either the text is too big and
overflows the square or its too small and unreadable. I can only ever fit
about a sentence before it gets wonky.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 6022
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV3(_components.li, { children: [
        /* @__PURE__ */ jsxDEV3(_components.strong, { children: "Hard to see hidden elements" }, void 0, !1, {
          fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
          lineNumber: 23,
          columnNumber: 6381
        }, this),
        ` \u2014 Elements hidden from the player will
show up for the DM as having low opacity. This works, but can make them hard
to see even for the DM.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 6365
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV3(_components.li, { children: [
        /* @__PURE__ */ jsxDEV3(_components.strong, { children: "Not sorting alphabetically by default" }, void 0, !1, {
          fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
          lineNumber: 23,
          columnNumber: 6638
        }, this),
        ` \u2014 I found it very hard to
find attachments and monsters in the quick menu until I realized I wasn't
sorting alphabetically. I feel this should just be the default.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 6622
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 4780
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.h3, { children: "Excited for the future" }, void 0, !1, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 6936
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV3(_components.p, { children: [
      `Owlbear Rodeo is an already great tool and the sky is the limit. They have
`,
      /* @__PURE__ */ jsxDEV3(_components.a, { href: "https://blog.owlbear.rodeo/owlbear-rodeo-2-0-beta-patch-9/", children: "recently" }, void 0, !1, {
        fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
        lineNumber: 23,
        columnNumber: 7096
      }, this),
      ` opened up
for developers to add third-party extensions and tools. I'm hoping to try some
more extensions out and as long as the core experience keeps getting better, the
extensions are just icing on the cake.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
      lineNumber: 23,
      columnNumber: 7001
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
function MDXContent(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV3(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV3(_createMdxContent, { ...props }, void 0, !1, {
    fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
    lineNumber: 27,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx",
    lineNumber: 27,
    columnNumber: 22
  }, this) : _createMdxContent(props);
}
var articles_owlbear_rodeo_the_painless_virtual_tabletop_default = MDXContent, filename = "_articles.owlbear-rodeo-the-painless-virtual-tabletop.mdx", headers = typeof attributes < "u" && attributes.headers, meta2 = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx
var posts_a_new_freelancers_guide_to_freelancing_exports = {};
__export(posts_a_new_freelancers_guide_to_freelancing_exports, {
  attributes: () => attributes2,
  default: () => posts_a_new_freelancers_guide_to_freelancing_default,
  filename: () => filename2,
  handle: () => handle2,
  headers: () => headers2,
  meta: () => meta3
});

// app/components/post-callout.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var PostCallout = ({ title, content }) => /* @__PURE__ */ jsxDEV4("div", { className: "bg-slate-700 p-4 not-prose rounded border-l-4 border-l-sky-500", children: [
  /* @__PURE__ */ jsxDEV4("h2", { className: "font-bold text-base mb-2", children: title }, void 0, !1, {
    fileName: "app/components/post-callout.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV4("p", { className: "text-base", children: content }, void 0, !1, {
    fileName: "app/components/post-callout.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/post-callout.tsx",
  lineNumber: 7,
  columnNumber: 3
}, this);

// app/components/post-date.tsx
import { CalendarIcon } from "@heroicons/react/24/outline";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var PostDate = ({ date }) => /* @__PURE__ */ jsxDEV5("div", { className: "rounded-lg mb-4 inline-flex flex-row items-center text-sm p-2 bg-gray-700 gap-2", children: [
  /* @__PURE__ */ jsxDEV5(CalendarIcon, { className: "w-4 h-4" }, void 0, !1, {
    fileName: "app/components/post-date.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV5("span", { children: [
    "Published ",
    date.toLocaleDateString()
  ] }, void 0, !0, {
    fileName: "app/components/post-date.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/post-date.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);

// mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx
import { Fragment as Fragment2, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var attributes2 = {
  title: "A new freelancer's guide to freelancing",
  published: /* @__PURE__ */ new Date(14905728e5),
  updated: /* @__PURE__ */ new Date(1552608e6),
  oneliner: "Advice about getting into freelancing, from a new freelancer",
  original: "https://medium.com/@kennygoff/a-new-freelancers-guide-to-freelancing-f255c7d22137",
  meta: {
    title: "A new freelancer's guide to freelancing",
    description: "Advice about getting into freelancing, from a new freelancer. Including best ways to get started, set your prices, and sharing your work."
  }
};
function _createMdxContent2(props) {
  let _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    h3: "h3",
    img: "img",
    ul: "ul",
    li: "li",
    a: "a"
  }, props.components);
  return /* @__PURE__ */ jsxDEV6(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV6(_components.h1, { children: attributes2.title }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(PostDate, { date: attributes2.published }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 69
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(PostCallout, { title: `Update ${attributes2.updated.toLocaleDateString()}`, content: "I'm no longer freelancing! I really enjoyed the experience but after a solid 2 years I've decided to look for fulltime employment once again. I still wholehartedly agree with this post so I will keep it up for anyone who is thinking of going freelancing and wants some advice to get started!" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 115
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `I've been freelancing full time for just over a month now, and it's been an
interesting journey and a somewhat rocky transition from being an employee to
running my own business. I've been asked a few times by people what it's like to
get started so I thought I'd take the time to write down my thoughts to
potentially help anyone looking to start out. I'm a web and app developer, but
I'll try to keep my advice generic enough to apply if you're an artist or writer
or in any other line of work.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 498
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h2, { children: "Before the jump" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 1041
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h3, { children: "Test the waters" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 1099
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `It's very possible to hold down small part time moonlighting contracts you can
do on the side. Freelancing isn't an easy thing to do and its not for everyone,
so trying it out before you dive in head first is a good idea. I didn't do this
and wish I had. At least get some practice by contacting potential clients and
start scheduling work.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 1157
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: /* @__PURE__ */ jsxDEV6(_components.img, { src: "/images/posts/new-freelancer-1.jpg", alt: "Person skydiving" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 1557
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 1542
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h3, { children: "Pack a parachute" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 1662
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `This advice is a bit obvious, but don't leave your \u201Cday job\u201D without any sort of
plan or financial security, preferably 6\u201312 months of expenses. This is the same
advice for freelancing, a startup, or just if you want to quit your job and
start a beet farm. Have a plan and a way to pay the bills. Sometimes financial
security isn't possible if you just lost your job or are trying to escape a
hostile one. Do what you must, but you should still have a plan and be prepared
to hustle hard to get work right away.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 1721
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `For me, this was as simple as lining up a gig that I could do part-time or
full-time, then make the jump at the right moment, when I was financially safe
enough. I had enough savings to pay rent and bills for a few months, and a gig
lined up to keep me going without a worry.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 2279
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h3, { children: "Know what you're getting into" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 2598
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `This is sort of a followup to my first point, but you should know that
freelancing isn't just \u201Cflexible work without a boss.\u201D Freelancing means finding
clients, negotiating, marketing yourself, doing taxes, paying for your own
benefits, giving yourself time for vacation and sick days, and a huge list of
other things. You are running a business, and that means you need to learn how
to run a business. I'm not going to try to run down every item, so check out a
list of resources that helped me at the bottom of this post.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 2670
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `This isn't meant to scare you, but to ensure you're prepared for the reality of
freelancing. I highly recommend at least trying to talk to potential clients
before you freelance full time. Negotiations, marketing, and other skills can be
learned, but you at least need to get somewhat comfortable with client
communication before starting.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 3240
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h2, { children: "Sticking the landing" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 3624
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h3, { children: "Become shameless" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 3687
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `Don't feel ashamed to ask for help or to ask friends, family, or colleagues for
references! Own your new life and broadcast it! Learn to hone your own pitch on
friends. Ask them if they know anyone hiring contractors. Ask them to ask their
friends. Don't pester people of course, but don't feel like you have to do it
all on your own. My first gig was with a startup that a friend was working at.
My second was with a friend of a friend who needed a new website built.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 3746
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: /* @__PURE__ */ jsxDEV6(_components.img, { src: "/images/posts/new-freelancer-2.jpg", alt: "Group of people skydiving, holding hands" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 4275
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 4260
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `Work on your niche when you tell friends. Use it as an opportunity to safely
hone your pitch and your specialty. \u201CWeb developer\u201D is very broad, whereas
\u201CWordpress eCommerce specialist\u201D can click in people's minds. As you find your
niche, update your friends on what you do. They might not know someone who
\u201Cneeds a website\u201D but it might register that they know someone who has been
complaining about their online storefront always breaking! I'm still working on
this myself, narrowing in on my niche, and finding how to pitch more narrowly
than just \u201Cweb developer.\u201D` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 4404
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h3, { children: "Under-promise, over-deliver" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 5018
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `I try to go above and beyond what's expected of me. This is not necessarily how
everyone works and I don't treat every project like this. But in general, I try
to make realistic estimations and stick to them, yet over-deliver whenever
possible. It builds trust and really can help solidify relationships, which is
important especially in markets where clients don't always trust contractors.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 5088
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `This could be as simple as adding a \u201Cnice to have\u201D feature that was originally
out of scope at no extra cost or providing a few extra options for a poster
design. Do not blatantly lie about scope just to deliver extra \u201Cgoodies\u201D. The
way I normally treat this is if I have some spare time on my hands I work an
extra hour or two for free, as long as I'm on target with the main scope of
work.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 5524
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h3, { children: "Work with a contract" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 5961
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `Please don't go into a working relationship without a contract. I am not a
lawyer and this is not law advice, so please consult a lawyer and get a
customized contract for your work. It can be costly, but a simple Master Service
Agreement and Scope of Work that you can reuse with each client and fit your
needs exactly are a worthy investment. You should never do work without knowing
the scope of the project, deliverables, and cost. Contracts are good for both
parties even just as a way to discuss these points on paper in a solidified way.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 6024
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h3, { children: "Double your rate" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 6614
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `Whatever you think your rate should be, you should probably just double it now.
I don't want to get into charging hourly vs charging weekly vs fixed bids, so to
keep it simple, let's look at hourly. Take the salary you want to make and
divide by 1,000 for an hourly rate. If you made $80,000/year, charge $80/hour.
If you made $120,000/year, charge $120/hour. This is a very rough estimate just
to get an idea. From there adjust as needed. If you're worried about your rate,
just pick something and go with it, but be ready to raise your rates as you go.
Most people will undervalue themselves with respect to their rate, which is why
the \u201Cdivide by 1000\u201D calculation is a helpful albeit oversimplified way to avoid
race-to-the-bottom rates.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 6673
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `As an independent contractor, you have to pay your own taxes, benefits, and
business expenses. Taxes and benefits are not taken out of your paycheck so you
need to make sure that the amount you're charging covers not only your own
bills, but also taxes, benefits, and any profit you want to make.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 7464
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h3, { children: "Not all of your time is billable" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 7804
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `I could write a whole post on this one topic so I'll try to keep it brief. Let's
say you're a salaried employee working 40 hours a week (I hope you're not
working more). Do you get paid for lunch breaks? How about bathroom time? What
happens if you get up to get some water? What happens if you're feeling
unproductive? In most cases, a salaried employee will get paid the overall time
they spend \u201Cat the office\u201D, not for the output of quality work. If you work
9-to-5 but take 15 minutes of bathroom breaks your employer doesn't dock your
pay 15 minutes.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 7879
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `Remember how I said freelancing is running a business? Treat your time running
the business as part of your job. If you plan to work 40 hour weeks, but then
book 40 hours a week with a client, when do you think you'll do bookkeeping?
Call other clients? Work on your website? Do marketing? All of a sudden you're
working 60 hours a week, burned out, and wanting to run back to being an
employee.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 8482
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `A lot of people view this in different ways, but in my opinion, you shouldn't be
billing more than 20\u201330 hours a week. Why? Because then you can bill only your
highest quality hours. Billing weekly? That still fits, I actually prefer
billing weekly myself. Just assume a week is 20\u201330 hours and pick what feels
right to you. By only charging for the real quality work you do, you're also
able to better justify upping your rate. I make this delineation easy and clear
cut for my own records, as I use Pomodoro technique and just consider the time
in pomodoros as my quality time worked.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 8923
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h3, { children: "Know when to say no" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 9557
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `Get comfortable with saying no to projects. This might be tough at first, but
learn to say no to clients that raise a lot of red flags, aren't willing to pay
your rate, or projects that won't advance your career or business. It's a very
useful muscle to flex.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 9619
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: /* @__PURE__ */ jsxDEV6(_components.img, { src: "/images/posts/new-freelancer-3.jpg", alt: "Person in parachute landing" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 9937
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 9922
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h2, { children: "Just the beginning" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 10053
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `These are some of the main things I think about as a new freelancer, and I
definitely don't take my own advice as much as I should. But if you're thinking
about getting started, I hope this perspective from a fresh new freelancer will
help give you a better idea of what its like.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 10114
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: `Have any thoughts on these points? Disagree with anything? Leave a response! I
would love the feedback and discussion.` }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 10438
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h3, { children: "Resources that helped me" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 10598
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.ul, { children: [
      `
`,
      /* @__PURE__ */ jsxDEV6(_components.li, { children: /* @__PURE__ */ jsxDEV6(_components.a, { href: "https://www.freelancersunion.org/", children: "https://www.freelancersunion.org/" }, void 0, !1, {
        fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
        lineNumber: 27,
        columnNumber: 10703
      }, this) }, void 0, !1, {
        fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
        lineNumber: 27,
        columnNumber: 10687
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV6(_components.li, { children: [
        /* @__PURE__ */ jsxDEV6(_components.a, { href: "https://devchat.tv/freelancers", children: "https://devchat.tv/freelancers" }, void 0, !1, {
          fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
          lineNumber: 27,
          columnNumber: 10851
        }, this),
        `: Freelancing
podcast that has an episode on almost every topic you can imagine and then
some`
      ] }, void 0, !0, {
        fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
        lineNumber: 27,
        columnNumber: 10835
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV6(_components.li, { children: /* @__PURE__ */ jsxDEV6(_components.a, { href: "https://doubleyourfreelancing.com/topics", children: "https://doubleyourfreelancing.com/topics" }, void 0, !1, {
        fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
        lineNumber: 27,
        columnNumber: 11092
      }, this) }, void 0, !1, {
        fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
        lineNumber: 27,
        columnNumber: 11076
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 10665
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.h2, { children: "Credits" }, void 0, !1, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 11261
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6(_components.p, { children: [
      "All photos by ",
      /* @__PURE__ */ jsxDEV6(_components.a, { href: "https://unsplash.com/@kpietrzakweb", children: "Kamil Pietrzak" }, void 0, !1, {
        fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
        lineNumber: 27,
        columnNumber: 11344
      }, this),
      ` on
`,
      /* @__PURE__ */ jsxDEV6(_components.a, { href: "https://unsplash.com", children: "Unsplash" }, void 0, !1, {
        fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
        lineNumber: 27,
        columnNumber: 11444
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
      lineNumber: 27,
      columnNumber: 11311
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
function MDXContent2(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV6(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV6(_createMdxContent2, { ...props }, void 0, !1, {
    fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
    lineNumber: 31,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/posts.a-new-freelancers-guide-to-freelancing.mdx",
    lineNumber: 31,
    columnNumber: 22
  }, this) : _createMdxContent2(props);
}
var posts_a_new_freelancers_guide_to_freelancing_default = MDXContent2, filename2 = "posts.a-new-freelancers-guide-to-freelancing.mdx", headers2 = typeof attributes2 < "u" && attributes2.headers, meta3 = typeof attributes2 < "u" && attributes2.meta, handle2 = typeof attributes2 < "u" && attributes2.handle;

// mdx:routes/_articles.notion-features-for-running-dnd.mdx
var articles_notion_features_for_running_dnd_exports = {};
__export(articles_notion_features_for_running_dnd_exports, {
  attributes: () => attributes3,
  default: () => articles_notion_features_for_running_dnd_default,
  filename: () => filename3,
  handle: () => handle3,
  headers: () => headers3,
  meta: () => meta4
});

// app/components/link-button.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var LinkButton = ({ children, ...props }) => /* @__PURE__ */ jsxDEV7(
  "a",
  {
    className: "text-sm font-bold sm:inline-block text-white hover:bg-sky-700 active:bg-sky-700 py-2 px-3 bg-sky-600 rounded block text-center",
    ...props,
    children
  },
  void 0,
  !1,
  {
    fileName: "app/components/link-button.tsx",
    lineNumber: 7,
    columnNumber: 5
  },
  this
);

// mdx:routes/_articles.notion-features-for-running-dnd.mdx
import { Fragment as Fragment3, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var attributes3 = {
  title: "Helpful Notion features for running D&D Campaigns",
  published: /* @__PURE__ */ new Date(16811712e5),
  updated: /* @__PURE__ */ new Date(16811712e5),
  meta: {
    title: "Helpful Notion features for running D&D Campaigns",
    description: "6 features in Notion to help you build, plan, and run your TTRPG and D&D campaigns. Plus a handy template to help get started."
  }
};
function _createMdxContent3(props) {
  let _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    h2: "h2",
    img: "img",
    code: "code",
    em: "em",
    hr: "hr"
  }, props.components);
  return /* @__PURE__ */ jsxDEV8(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV8(_components.h1, { children: attributes3.title }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: [
      `Notion is one of my favorite tools for running D&D campaigns. I use it in a lot
of `,
      /* @__PURE__ */ jsxDEV8(_components.a, { href: "/using-notion-dm-screen", children: "different ways" }, void 0, !1, {
        fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
        lineNumber: 24,
        columnNumber: 172
      }, this),
      `. It's great not just for note
taking and world building like other docs tools but also as a really simple
code-free database tool and wiki.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 69
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: `Notion is simple on the surface but complex and flexible as you use it more and
more. There's a lot of features in Notion, so much so that there's quite a steep
learning curve to get past just using it for a simple notes and document editor.
Here's 6 features in Notion I use in running D&D or other TTRPG campaigns you
can use right away:` }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 420
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.h2, { children: "Databases for Session notes" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 804
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: [
      `The most immediately obvious way I'm sure most people think to use Notion for
D&D is for note-taking for sessions. It's a great start but one way to upgrade
that experience is by making a notes
`,
      /* @__PURE__ */ jsxDEV8(_components.a, { href: "https://www.notion.so/help/intro-to-databases", children: "database" }, void 0, !1, {
        fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
        lineNumber: 24,
        columnNumber: 1090
      }, this),
      `, rather than just
creating sub-pages under a "session" page. This allows you to add properties to
each note; from a simple "Date" of each session to linked relationships to each
encounter you ran during that session. Properties you add to the pages make it
easy to filter or sort or organize. Session notes are a good way to get started
with learning Notion databases, as much of the things you'd track in Notion
should probably be part of a database, and its a tool that unlocks a lot of
power and capability.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 874
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: /* @__PURE__ */ jsxDEV8(_components.img, { src: "/images/articles/notion-features-for-running-dnd/tip-1-session-database.png", alt: "Screenshot of session notes database" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 1749
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 1734
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.h2, { children: "Gallery view for NPCs" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 1915
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: [
      `Once you get your feet wet learning the ins-and-outs of databases, you'll learn
there are many different views for those databases including timelines,
calendars, and simple lists. I use
`,
      /* @__PURE__ */ jsxDEV8(_components.a, { href: "https://www.notion.so/help/galleries", children: "Gallery View" }, void 0, !1, {
        fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
        lineNumber: 24,
        columnNumber: 2188
      }, this),
      ` for things like NPCs by
uploading an portrait to each NPC page and setting that portrait as the gallery
image. It makes scrolling through a list of NPCs much more visual and easy to
reference.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 1979
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: /* @__PURE__ */ jsxDEV8(_components.img, { src: "/images/articles/notion-features-for-running-dnd/tip-2-gallery-view.png", alt: "Screenshot of a gallery view of NPCs" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 2516
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 2501
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.h2, { children: "Links to reference key items" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 2678
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: [
      "Using the ",
      /* @__PURE__ */ jsxDEV8(_components.code, { children: "@-command" }, void 0, !1, {
        fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
        lineNumber: 24,
        columnNumber: 2778
      }, this),
      ` you can
`,
      /* @__PURE__ */ jsxDEV8(_components.a, { href: "https://www.notion.so/help/create-links-and-backlinks", children: "link" }, void 0, !1, {
        fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
        lineNumber: 24,
        columnNumber: 2842
      }, this),
      ` to another page,
which is a great way to create a web of information for planning or running your
campaign. This is incredibly useful for tying together your key campaign
elements from NPCs to Locations to Quests. Clicking on a link will open up that
page in a so you can quickly peek to view an the details of that page then close
it returning to your original page. You can view backlinks so if you want to see
where an NPC is referenced throughout your notes or in your quests, you can
easily find that information right on the NPC's page.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 2749
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: /* @__PURE__ */ jsxDEV8(_components.img, { src: "/images/articles/notion-features-for-running-dnd/tip-3-links.png", alt: "Screenshot of linked content" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 3533
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 3518
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.h2, { children: "Callouts for important information" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 3680
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: [
      "Callouts are a ",
      /* @__PURE__ */ jsxDEV8(_components.a, { href: "https://www.notion.so/help/what-is-a-block", children: "block" }, void 0, !1, {
        fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
        lineNumber: 24,
        columnNumber: 3791
      }, this),
      ` in Notion
where you can specify an icon and a small blurb of text that's formatted to be
emphasized within the page. Callouts are great for important information within
a page and I use them when planning dungeons and encounters to callout traps,
hidden enemies, secret doors, difficult terrain and more. It makes it really
easy to notice when scanning through my notes on a dungeon that a particular
area has some surprises or attributes the characters need to know \u2014 or not know.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 3757
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: /* @__PURE__ */ jsxDEV8(_components.img, { src: "/images/articles/notion-features-for-running-dnd/tip-4-callouts.png", alt: "Screenshot of example callouts" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 4410
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 4395
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.h2, { children: "Toggles for rooms" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 4562
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: [
      `On the opposite end of the spectrum to callouts is the toggle block, which
allows you to `,
      /* @__PURE__ */ jsxDEV8(_components.em, { children: "hide" }, void 0, !1, {
        fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
        lineNumber: 24,
        columnNumber: 4731
      }, this),
      ` information behind a single line description. I use toggles
for dungeons with lots of rooms, with each room's details hidden within the
closed toggle. This keeps the page focused while you play and easy to reference
exactly what each room contains while hiding the details of the other rooms.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 4622
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: /* @__PURE__ */ jsxDEV8(_components.img, { src: "/images/articles/notion-features-for-running-dnd/tip-5-toggles.png", alt: "Screenshot of example toggles" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 5109
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 5094
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.h2, { children: "Buttons for automating repetitive tasks" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 5259
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: [
      `A new feature in Notion that has opened up some great capability in Notion is
`,
      /* @__PURE__ */ jsxDEV8(_components.a, { href: "https://www.notion.so/help/template-buttons", children: "buttons" }, void 0, !1, {
        fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
        lineNumber: 24,
        columnNumber: 5439
      }, this),
      ` which allow you to repeat
and automate simple actions. You can create blocks, create pages, edit DB
properties, open pages, and more. The main place I use buttons now is in Session
and Encounter creation, where previously I had a lot of steps needed to set up
an session or set up an encounter, now they just require a simple button press.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 5341
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: /* @__PURE__ */ jsxDEV8(_components.img, { src: "/images/articles/notion-features-for-running-dnd/tip-6-buttons.png", alt: "Screenshot of button automation editor" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 5917
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 5902
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.hr, {}, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 6076
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: `If you haven't already I hope you give Notion a shot in your campaign planning,
prep, or sessions. I have found it incredibly handy!` }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 6100
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8(_components.p, { children: `I leverage these tools and many more in my 5e Campaign Wiki Notion template, so
if you like these ideas but don't want to go through the hassle of setting it
all up yourself or want a base to work from, check out my template! Just visit
the template below and duplicate!` }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 6274
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV8("p", { className: "not-prose", children: /* @__PURE__ */ jsxDEV8(LinkButton, { href: "https://kennygoff.notion.site/5e-Campaign-Wiki-2234b289a06d47c6967a99a934864c6a", children: /* @__PURE__ */ jsxDEV8(_components.p, { children: "Get 5e Campaign Wiki \u2192" }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 6712
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 6613
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
      lineNumber: 24,
      columnNumber: 6588
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
function MDXContent3(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV8(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV8(_createMdxContent3, { ...props }, void 0, !1, {
    fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
    lineNumber: 28,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/_articles.notion-features-for-running-dnd.mdx",
    lineNumber: 28,
    columnNumber: 22
  }, this) : _createMdxContent3(props);
}
var articles_notion_features_for_running_dnd_default = MDXContent3, filename3 = "_articles.notion-features-for-running-dnd.mdx", headers3 = typeof attributes3 < "u" && attributes3.headers, meta4 = typeof attributes3 < "u" && attributes3.meta, handle3 = typeof attributes3 < "u" && attributes3.handle;

// mdx:routes/_articles.digital-dice-vs-physical-dice.mdx
var articles_digital_dice_vs_physical_dice_exports = {};
__export(articles_digital_dice_vs_physical_dice_exports, {
  attributes: () => attributes4,
  default: () => articles_digital_dice_vs_physical_dice_default,
  filename: () => filename4,
  handle: () => handle4,
  headers: () => headers4,
  meta: () => meta5
});
import { Fragment as Fragment4, jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var attributes4 = {
  title: "Digital dice vs physical dice",
  published: /* @__PURE__ */ new Date(16824672e5),
  updated: /* @__PURE__ */ new Date(16824672e5),
  meta: {
    title: "Digital dice vs physical dice",
    description: "My hot take on what dice rolling method is better physical or digital and spoiler - its physical dice, no contest."
  }
};
function _createMdxContent4(props) {
  let _components = Object.assign({
    h1: "h1",
    p: "p",
    h3: "h3"
  }, props.components);
  return /* @__PURE__ */ jsxDEV9(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV9(_components.h1, { children: attributes4.title }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.p, { children: `All the TTRPG games I'm currently playing in are run online. I make extensive
use of digital tools like Owlbear Rodeo and Notion to run my games. And yet, I
keep coming back to physical dice. I usually just let my players pick what
they'd like to roll with as it really just comes down to personal preference to
each player. But for me personally, its physical dice all the way.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 69
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.h3, { children: "The simplicity of digital dice" }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 492
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.p, { children: `Digital dice have an obvious advantage when it comes to games that are played
online. They can integrate with character sheets allowing for player rolls to be
simple button presses. Automating rules and bonuses makes it easy for new
players and faster and simpler for everyone.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 565
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.p, { children: `Another advantage is that everyone sees the dice rolls. While some VTTs let you
hide them for private rolls or DM rolls, by default normally everyone sees the
results. No needing to repeat roll values, no fudging, everyone's on the same
page.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 886
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.h3, { children: "Why I don't like digital dice" }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 1172
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.p, { children: `Ok, \u201Cdon't like\u201D even feels a little strong here, and this is some really minor
nitpicking. I am fine with digital dice, I use them in one game as a player and
some of my players use dice rolls integrated into D&D Beyond character sheets.
However I do find them lacking in capturing the same magic of rolling bones in
real life. Maybe its the digital coldness of buttons in a web app.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 1244
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.p, { children: `While I am not a stickler for my players to \u201Cknow all the rules by heart\u201D,
especially in a very crunchy and complicated game like D&D 5e, I do find the
character sheet integrated dice to be a bit of a crutch. And I really don't mean
this in a gatekeepy way, if you prefer rolling from integrated buttons in a
sheet thats totally cool. But the times when a VTT service is down or we've
tried hybrid games with some players rolling in person, it becomes clear players
who only use digital dice don't know where bonuses come from or how some basic
mechanics work. This goes for myself as well! In the only game where I'm a
player, I use D&D Beyond with Roll20 and I definitely gloss over how my various
rolls add up sometimes. Going from digital to physical makes me feel like I'm
relearning the core mechanics of the game over because the \u201CCast Firebolt\u201D
button isn't available and I'm is lost as to what dice to roll or bonuses to
add.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 1673
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.p, { children: `As for 3D simulated dice roles\u2026 I personally don't care for \u201Csimulating\u201D what we
do at the table. I don't like complex 3D maps for similar reasons. I personally
just find 3D dice kind of a novelty and not really better than physical or even
just printed out results. I do understand that with the physics simulations in
services like D&D Beyond, you can get statistically more fair rolls over a
crudely implemented simple random number generator, thats totally a plus. That
physics simulation comes at a cost though. I've run into issues with players on
lower end computers not able to run the complex 3D simulation, causing slow dice
rolls that take upwards of 30 seconds to complete.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 2660
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.h3, { children: "The magic of physical dice" }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 3394
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.p, { children: `I like the clatter of the dice when you shake up a few dice before a roll. I
like shaking a handful of dice into the mic to let my players know a big damage
roll is coming. I like my players hearing an unprompted d20 drop in the
background breaking the silence. Hell, I even like not being able to find the
right dice and hunting through a pile of plastic shapes for that darn d10.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 3463
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.p, { children: "That's really what it comes down to \u2014 its just more fun for me." }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 3889
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.p, { children: `Even in otherwise digital-only online games, I like the feeling physical dice
adds. I don't think 3D simulated dice, sound effects, fancy visuals, or even the
automation of integrated character sheets can be good enough to take the
polyhedrals out of my dice goblin hands.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 3993
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV9(_components.p, { children: `It's totally personal preference, but ultimately the reason I use physical dice
is that to me nothing beats grabbing physical dice and tossing them into a dice
tray. Both as a player and as a GM I love keeping that part of the game physical
even though all my games are run digitally.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
      lineNumber: 19,
      columnNumber: 4309
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
}
function MDXContent4(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV9(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV9(_createMdxContent4, { ...props }, void 0, !1, {
    fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
    lineNumber: 23,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/_articles.digital-dice-vs-physical-dice.mdx",
    lineNumber: 23,
    columnNumber: 22
  }, this) : _createMdxContent4(props);
}
var articles_digital_dice_vs_physical_dice_default = MDXContent4, filename4 = "_articles.digital-dice-vs-physical-dice.mdx", headers4 = typeof attributes4 < "u" && attributes4.headers, meta5 = typeof attributes4 < "u" && attributes4.meta, handle4 = typeof attributes4 < "u" && attributes4.handle;

// app/routes/5e-campaign-wiki-notion-template.tsx
var e_campaign_wiki_notion_template_exports = {};
__export(e_campaign_wiki_notion_template_exports, {
  default: () => Articles,
  meta: () => meta6
});
import { Link as Link3 } from "@remix-run/react";

// app/components/footer.tsx
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var Footer = () => /* @__PURE__ */ jsxDEV10("footer", { className: "max-w-6xl mx-auto flex flex-col pt-8 pb-16 justify-between text-sm", children: [
  /* @__PURE__ */ jsxDEV10("div", { className: "text-center font-semibold my-1", children: [
    "Made with ",
    /* @__PURE__ */ jsxDEV10("span", { style: { fontFamily: "none" }, children: "\u2764" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 6,
      columnNumber: 17
    }, this),
    " by",
    " ",
    /* @__PURE__ */ jsxDEV10(Link, { to: "/", className: "text-white underline font-semibold", children: "Kenny Goff" }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV10("div", { className: "text-center text-slate-400", children: "Kenny Goff \xA9 2023" }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/footer.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);

// app/components/header.tsx
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var Header = () => /* @__PURE__ */ jsxDEV11("header", { className: "max-w-6xl mx-auto p-4 flex flex-row gap-2 items-center", children: [
  /* @__PURE__ */ jsxDEV11(Link2, { to: "/", children: /* @__PURE__ */ jsxDEV11("img", { src: "/images/logo-square.svg", className: "w-8 h-8", alt: "Home" }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV11(Link2, { to: "/", children: /* @__PURE__ */ jsxDEV11("img", { src: "/images/logotype.svg", className: "h-6 mt-1", alt: "Home" }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/header.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);

// app/routes/5e-campaign-wiki-notion-template.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "5e Campaign Wiki for Notion" },
  {
    name: "description",
    content: "A Notion template to help you run your 5e campaign. Set up with ready-to-use databases for players, NPCs, session notes, encounters and more. Plan and run your games with ease all within Notion."
  }
];
function Articles() {
  return /* @__PURE__ */ jsxDEV12("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV12(Header, {}, void 0, !1, {
      fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("main", { className: "max-w-6xl mx-auto p-4", children: [
      /* @__PURE__ */ jsxDEV12("h1", { className: "mb-4 font-semibold text-white text-3xl", children: "5e Campaign Wiki for Notion" }, void 0, !1, {
        fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("section", { className: "flex flex-col gap-4 sm:flex-row-reverse sm:items-center", children: [
        /* @__PURE__ */ jsxDEV12(
          "img",
          {
            src: "/images/5e-campaign-wiki-screenshot.png",
            alt: "Screenshot of DM Screen in use",
            className: "w-full sm:max-w-sm md:max-w-md lg:max-w-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
            lineNumber: 26,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV12("div", { children: [
          /* @__PURE__ */ jsxDEV12("h2", { className: "text-2xl", children: "Your home for running 5e campaigns" }, void 0, !1, {
            fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("p", { className: "my-2", children: "A full campaign wiki for 5e all in a Notion template. Plan your sessions, track your NPCs, and take notes in this robust campaign wiki." }, void 0, !1, {
            fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("ul", { className: "list-disc list-inside", children: [
            /* @__PURE__ */ jsxDEV12("li", { children: "Take Session notes and track Encounters" }, void 0, !1, {
              fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
              lineNumber: 39,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("li", { children: "Player, NPC, and Monster references" }, void 0, !1, {
              fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
              lineNumber: 40,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("li", { children: "Track quests and rumors" }, void 0, !1, {
              fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("li", { children: "Easy to expand and extend" }, void 0, !1, {
              fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
              lineNumber: 42,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("p", { className: "my-2", children: [
            "Duplicate this template into your Notion and customize it to fit your campaign. New to Notion and want a breakdown of some basic features? Check out",
            " ",
            /* @__PURE__ */ jsxDEV12(Link3, { to: "/notion-features-for-running-dnd", className: "underline", children: "my post" }, void 0, !1, {
              fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
              lineNumber: 48,
              columnNumber: 15
            }, this),
            " ",
            "on the Notion features to use for D&D."
          ] }, void 0, !0, {
            fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12(LinkButton, { href: "https://kennygoff.notion.site/5e-Campaign-Wiki-2234b289a06d47c6967a99a934864c6a", children: "Get 5e Campaign Wiki, free \u2192" }, void 0, !1, {
            fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(Footer, {}, void 0, !1, {
      fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/5e-campaign-wiki-notion-template.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// mdx:routes/_articles.using-notion-dm-screen.mdx
var articles_using_notion_dm_screen_exports = {};
__export(articles_using_notion_dm_screen_exports, {
  attributes: () => attributes5,
  default: () => articles_using_notion_dm_screen_default,
  filename: () => filename5,
  handle: () => handle5,
  headers: () => headers5,
  meta: () => meta7
});
import { Fragment as Fragment5, jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var attributes5 = {
  title: "Using Notion as a DM Screen",
  published: /* @__PURE__ */ new Date(16794432e5),
  updated: /* @__PURE__ */ new Date(16794432e5),
  meta: {
    title: "Using Notion as a DM Screen",
    description: "A guide on how to use Notion to build a digital DM Screen to run D&D 5e games using my ready-to-use template"
  }
};
function _createMdxContent5(props) {
  let _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    h2: "h2",
    img: "img",
    h3: "h3",
    ul: "ul",
    li: "li",
    strong: "strong"
  }, props.components);
  return /* @__PURE__ */ jsxDEV13(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV13(_components.h1, { children: attributes5.title }, void 0, !1, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV13(_components.p, { children: [
      "I absolutely adore ",
      /* @__PURE__ */ jsxDEV13(_components.a, { href: "https://notion.so", children: "Notion" }, void 0, !1, {
        fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
        lineNumber: 25,
        columnNumber: 107
      }, this),
      `. I use it for a ton of things and
that includes running D&D games. Everything in my campaigns from session notes
to NPC databases and encounter trackers are in Notion.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 69
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV13(_components.p, { children: `One page I use each and every session is a digital DM screen. In a single page
you can have everything you need at a glance, but unlike rules reference
websites or other digital DM screens its so easy to customize. Notion's editing
interface is a joy to use so it makes a perfect companion to your sessions,
digital or physical. You can easily add new sections for your campaign specific
rules, player stats, monster stat blocks, session notes, and more.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 369
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV13(_components.h2, { children: "My 5e DM Screen Template" }, void 0, !1, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 869
    }, this),
    `
`,
    `
`,
    /* @__PURE__ */ jsxDEV13(_components.p, { children: [
      `If you're playing 5e based games, I recommend starting from
`,
      /* @__PURE__ */ jsxDEV13(_components.a, { href: "/5e-dm-screen-notion-template", children: "my free template" }, void 0, !1, {
        fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
        lineNumber: 25,
        columnNumber: 1024
      }, this),
      ` built specifically around D&D
5e. Go ahead and duplicate it to make your own copy! I actually make a copy of
the DM Screen page for each campaign I'm running, which allows customize it for
to fit that game's needs.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 944
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV13(_components.p, { children: /* @__PURE__ */ jsxDEV13(_components.img, { src: "/images/articles/using-notion-dm-screen/my-dm-screen-cropped.png", alt: "Screenshot of my DM Screen containing custom players" }, void 0, !1, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 1371
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 1356
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV13(_components.h3, { children: "Customize to fit your campaign" }, void 0, !1, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 1542
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV13(_components.p, { children: `The base template has many core 5e rules easy to find as a quick reference, but
that's just the start. The real benefit comes from customizing it, adding your
own campaign's info and what you specifically need to help run your games.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 1615
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV13(_components.p, { children: "Here's a few ways you can customize:" }, void 0, !1, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 1891
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV13(_components.ul, { children: [
      `
`,
      /* @__PURE__ */ jsxDEV13(_components.li, { children: [
        /* @__PURE__ */ jsxDEV13(_components.strong, { children: "Add your players" }, void 0, !1, {
          fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
          lineNumber: 25,
          columnNumber: 2006
        }, this),
        ` \u2014 The section at the top is reserved to highlight your
player's characters and their stats. The key here is to only include the stats
you need to reference regularly. For my 5e games that means HP, AC, and
Passive Perception. For everything else I just link to my PC's dedicated page
or character sheet.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
        lineNumber: 25,
        columnNumber: 1990
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV13(_components.li, { children: [
        /* @__PURE__ */ jsxDEV13(_components.strong, { children: "Add the rules you tend to forget" }, void 0, !1, {
          fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
          lineNumber: 25,
          columnNumber: 2418
        }, this),
        ` \u2014 The template comes preloaded with a lot
of rules, conditions, and descriptions available in the 5e SRD. I couldn't
include everything otherwise it'd just be a giant wall of text, so I
prioritized things that I find need to reference regularly or forget the
details of. Add what you can't remember or always forget the specifics of.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
        lineNumber: 25,
        columnNumber: 2402
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV13(_components.li, { children: [
        /* @__PURE__ */ jsxDEV13(_components.strong, { children: "Add your campaign specific rules" }, void 0, !1, {
          fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
          lineNumber: 25,
          columnNumber: 2876
        }, this),
        ` \u2014 Beyond the core rules, add what rules
you use that are from different publications like the Dungeon Masters Guide or
stuff you and your players like as house rules. For one of my campaigns I've
added both drunkeness and fishing mechanics as my players love drinking in
taverns with locals and fishing when we're by rivers and lakes.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
        lineNumber: 25,
        columnNumber: 2860
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV13(_components.li, { children: [
        /* @__PURE__ */ jsxDEV13(_components.strong, { children: "Adjust the layout" }, void 0, !1, {
          fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
          lineNumber: 25,
          columnNumber: 3335
        }, this),
        ` \u2014 I designed the template to put as much info at a
glance as possible and everthing that is not visible is never more than a
single click away. But maybe you want to have conditions effects not behind a
toggle or you feel you need to know travel rules regularly and want to move
that section higher up the template to be more visible for you.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
        lineNumber: 25,
        columnNumber: 3319
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV13(_components.li, { children: [
        /* @__PURE__ */ jsxDEV13(_components.strong, { children: "Synced blocks" }, void 0, !1, {
          fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
          lineNumber: 25,
          columnNumber: 3787
        }, this),
        ` \u2014 Notion's
`,
        /* @__PURE__ */ jsxDEV13(_components.a, { href: "https://www.notion.so/help/synced-blocks", children: "synced blocks" }, void 0, !1, {
          fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
          lineNumber: 25,
          columnNumber: 3862
        }, this),
        ` feature allows you
to sync content across multiple pages. If you keep information in Notion about
your campaign (session notes, quest info, etc) you can add it to the DM screen
as a synced block and have the same content in both places.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
        lineNumber: 25,
        columnNumber: 3771
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV13(_components.li, { children: [
        /* @__PURE__ */ jsxDEV13(_components.strong, { children: "Remove or replace anything" }, void 0, !1, {
          fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
          lineNumber: 25,
          columnNumber: 4241
        }, this),
        ` \u2014 Ultimately the template is a base to make
your own, you can delete or replace anything you don't find useful. I included
XP leveling in the template but I actually normally use milestone leveling, so
I replaced that entire section with upcoming milestones for my players, rather
than an XP reference table.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
        lineNumber: 25,
        columnNumber: 4225
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 1968
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV13(_components.p, { children: [
      `Hopefully that gets your brain turning on how you can use Notion in your
campaign. `,
      /* @__PURE__ */ jsxDEV13(_components.a, { href: "/5e-dm-screen-notion-template", children: "Grab the template" }, void 0, !1, {
        fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
        lineNumber: 25,
        columnNumber: 4778
      }, this),
      `, try it out for you
next session and `,
      /* @__PURE__ */ jsxDEV13(_components.a, { href: "mailto:hi@kennygoff.com", children: "let me know" }, void 0, !1, {
        fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
        lineNumber: 25,
        columnNumber: 4910
      }, this),
      ` how it goes. I'm
planning to adjust the template with improvements over time so any feedback is
welcome!`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
      lineNumber: 25,
      columnNumber: 4675
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
function MDXContent5(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV13(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV13(_createMdxContent5, { ...props }, void 0, !1, {
    fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
    lineNumber: 29,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/_articles.using-notion-dm-screen.mdx",
    lineNumber: 29,
    columnNumber: 22
  }, this) : _createMdxContent5(props);
}
var articles_using_notion_dm_screen_default = MDXContent5, filename5 = "_articles.using-notion-dm-screen.mdx", headers5 = typeof attributes5 < "u" && attributes5.headers, meta7 = typeof attributes5 < "u" && attributes5.meta, handle5 = typeof attributes5 < "u" && attributes5.handle;

// mdx:routes/_articles.beyond-wave-echo-cave.mdx
var articles_beyond_wave_echo_cave_exports = {};
__export(articles_beyond_wave_echo_cave_exports, {
  attributes: () => attributes6,
  default: () => articles_beyond_wave_echo_cave_default,
  filename: () => filename6,
  handle: () => handle6,
  headers: () => headers6,
  meta: () => meta8
});
import { Fragment as Fragment6, jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var attributes6 = {
  title: "Beyond Wave Echo Cave: Expanding Lost Mines of Phandelver",
  published: /* @__PURE__ */ new Date(16798752e5),
  updated: /* @__PURE__ */ new Date(16798752e5),
  meta: {
    title: "Beyond Wave Echo Cave: Expanding Lost Mines of Phandelver",
    description: "Advice for Dungeon Masters on continuing a D&D 5e campaign after the Lost Mines of Phandelver adventure finishes"
  }
};
function _createMdxContent6(props) {
  let _components = Object.assign({
    h1: "h1",
    p: "p",
    em: "em",
    h2: "h2",
    blockquote: "blockquote",
    ul: "ul",
    li: "li",
    strong: "strong",
    a: "a"
  }, props.components);
  return /* @__PURE__ */ jsxDEV14(Fragment6, { children: [
    /* @__PURE__ */ jsxDEV14(_components.h1, { children: attributes6.title }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.p, { children: [
      `Picture this: You've just finished Lost Mines of Phandelver. Your fresh-faced
party took down The Black Spider and wants more. You want to keep the story
going but all you have is the free adventure in D&D Beyond or a starter set.
`,
      /* @__PURE__ */ jsxDEV14(_components.em, { children: "What now?" }, void 0, !1, {
        fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
        lineNumber: 24,
        columnNumber: 322
      }, this)
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 69
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.p, { children: `I enjoy doing my own worldbuilding and crafting quests, NPCs, and encounters.
But doing so as a new DM or one with limited time can be a lot of work. There's
plenty of published settings, adventure books, and homebrew you can find, but
maybe you want to dip your toe into writing your own stuff.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 390
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.p, { children: `My favorite way to get started with writing your own campaign \u2014 and how I got
started as a DM \u2014 is to start off with a published adventure in an established
setting and build on that once the final quest from the book closes.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 729
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.h2, { children: "Welcome to Phandalin, first time here?" }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 997
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.p, { children: `When I was only a few months into DMing for the first time, I was thinking about
DMing a second group and I wasn't sure how much time I'd have to do a campaign
from scratch. I was already DMing one game and playing in another. Plus the
group would be all new players so I wasn't sure if they'd even like D&D or how
long our party would stick together. So I ran Lost Mines of Phandelver so I
could get started right away. By the end of the campaign I had a lot more
experience under my belt \u2014 but got stuck with this closing paragraph:` }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 1078
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.blockquote, { children: [
      `
`,
      /* @__PURE__ */ jsxDEV14(_components.p, { children: `If your players wish to continue playing their characters, you can use the
contents of this set to create your own adventures; the mysterious map found
in area 14 of Wave Echo Cave provides one possible adventure hook, but feel
free to explore other ideas using the monsters, magic items, and locations in
this adventure.` }, void 0, !1, {
        fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
        lineNumber: 24,
        columnNumber: 1689
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 1659
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.p, { children: `Not much to go off on, so here's some general tips as well as some campaign
specific ones you can leverage.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 2086
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.h2, { children: "General advice" }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 2235
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.p, { children: `These tips apply to really any campaign but can be extra help when running
published adventures as simple ways to expand from the books as written.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 2292
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.ul, { children: [
      `
`,
      /* @__PURE__ */ jsxDEV14(_components.li, { children: [
        /* @__PURE__ */ jsxDEV14(_components.strong, { children: "Foreshadow" }, void 0, !1, {
          fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
          lineNumber: 24,
          columnNumber: 2519
        }, this),
        ` \u2014 If you have the foresight knowing you may run the campaign
past the end of the book, drop hints and foreshadowing for future campaign
beats. The nice thing about this is your players won't remember everything so
you don't have to actually use it once it comes time to implement. Sprinkle
foreshadowing all about and only use what sticks or interests your players.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
        lineNumber: 24,
        columnNumber: 2503
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV14(_components.li, { children: [
        /* @__PURE__ */ jsxDEV14(_components.strong, { children: [
          /* @__PURE__ */ jsxDEV14(_components.em, { children: "Retroactively" }, void 0, !1, {
            fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
            lineNumber: 24,
            columnNumber: 3007
          }, this),
          " foreshadow"
        ] }, void 0, !0, {
          fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
          lineNumber: 24,
          columnNumber: 2987
        }, this),
        ` \u2014 Sometimes you may not have the foresight to
plan ahead or you just want to focus on the adventure as written. Instead,
pick something the players find or do and retroactively give it meaning later.
Maybe it's a random item the players find that you later decide belonged to a
villain who wants it back and hunts down the players.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
        lineNumber: 24,
        columnNumber: 2971
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV14(_components.li, { children: [
        /* @__PURE__ */ jsxDEV14(_components.strong, { children: "Unused sidequests and rumors" }, void 0, !1, {
          fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
          lineNumber: 24,
          columnNumber: 3472
        }, this),
        ` \u2014 This is less "your own adventure" but
moreso picking and chosing from the book what you want without the "burden" of
having it be relevant to the main plot. Expand these side quests and give them
more weight and their own plotlines. This might be the perfect way to continue
if your players were focused only on the immediately important main plot and
avoided side quests. They can also serve as nice palette cleansers or fillers
for you to give you time to write your own adventures.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
        lineNumber: 24,
        columnNumber: 3456
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV14(_components.li, { children: [
        /* @__PURE__ */ jsxDEV14(_components.strong, { children: "Spotlight an NPC" }, void 0, !1, {
          fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
          lineNumber: 24,
          columnNumber: 4085
        }, this),
        ` \u2014 Give underused NPCs who had little to do in the book
their own quest or story. This is a good one for writing specifically for your
players based on their own experience. Every party in every campaign will have
unique interactions with prewritten NPCs: an NPC wrote as a one off character
might be the party's best friend.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
        lineNumber: 24,
        columnNumber: 4069
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV14(_components.li, { children: [
        /* @__PURE__ */ jsxDEV14(_components.strong, { children: "The Bigger, Badder Evil Guy" }, void 0, !1, {
          fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
          lineNumber: 24,
          columnNumber: 4518
        }, this),
        ` \u2014 You can always pull "the boss was working
for someone even more powerful". It's a bit of a cliche but it gives your
players immediate motivation and a strong tie to the new big bad. Maybe it's
not just the boss's boss but a rival who's path has been cleared to expand
territories. Use the villain's defeat as the spark of a new villain's rise.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
        lineNumber: 24,
        columnNumber: 4502
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 2481
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.h2, { children: "Lost Mines of Phandelver hooks" }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 4992
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.p, { children: `The book mentions a few hooks for future play such as a mysterious map in Wave
Echo Cave or the return of Glasstaff. Here's some not explicitly left by the
book that I used in my campaign.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 5065
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.ul, { children: [
      `
`,
      /* @__PURE__ */ jsxDEV14(_components.li, { children: [
        /* @__PURE__ */ jsxDEV14(_components.strong, { children: "Thundertree, Reidoth & Venomfang" }, void 0, !1, {
          fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
          lineNumber: 24,
          columnNumber: 5334
        }, this),
        ` \u2014 Thundertree is a fun side quest, but
not every party will run into this rumor or choose to go on it. My party
skipped on it to focus on the main plot threads, so I used it as the opening
thread to our second adventure arc. Plus if you can have them fight Venomfang
at a higher level, they could defeat the dragon, rather than him fleeing at
half HP as the book suggests.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
        lineNumber: 24,
        columnNumber: 5318
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV14(_components.li, { children: [
        /* @__PURE__ */ jsxDEV14(_components.strong, { children: "Leverage unexplored areas of Sword Coast" }, void 0, !1, {
          fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
          lineNumber: 24,
          columnNumber: 5832
        }, this),
        ` \u2014 Sword Coast has a vibrant
history in D&D lore and it's already fleshed out as a setting. Just on the map
given in Phandelver are unused locales in the city of Neverwinter, Mount
Hotenow, and The Crags, among others. You can also check out the
`,
        /* @__PURE__ */ jsxDEV14(_components.a, { href: "https://forgottenrealms.fandom.com/wiki/Sword_Coast_North", children: "Forgotten Realms fandom wiki" }, void 0, !1, {
          fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
          lineNumber: 24,
          columnNumber: 6171
        }, this),
        `
for some quick location inspiration if you don't want to make up your own
villages and fortresses. I set the next arc of my campaign in my own villages
and dungeons within Kryptgarden Forest, an area just south of Phandalin
unutilized by the book.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
        lineNumber: 24,
        columnNumber: 5816
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV14(_components.li, { children: [
        /* @__PURE__ */ jsxDEV14(_components.strong, { children: "The Black Spider's Boss" }, void 0, !1, {
          fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
          lineNumber: 24,
          columnNumber: 6594
        }, this),
        ` \u2014 Maybe the Black Spider was working for yet
another mysterious benefactor or he was part of a group of evil mages that is
pissed he's dead. Use the fact that he's a drow to your advantage: they are a
footsoldier for a stronger woman in charge. I pulled this move and set up a
fun drow-centric and underdark-delving adventure for my players to go on.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
        lineNumber: 24,
        columnNumber: 6578
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 5296
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV14(_components.p, { children: `Whatever you decide to do, don't end the campaign because you finished the book!
Let the events of your campaign be the seeds for a new adventure. Plus, it's
easier than starting from a blank page.` }, void 0, !1, {
      fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
      lineNumber: 24,
      columnNumber: 7067
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
function MDXContent6(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV14(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV14(_createMdxContent6, { ...props }, void 0, !1, {
    fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
    lineNumber: 28,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/_articles.beyond-wave-echo-cave.mdx",
    lineNumber: 28,
    columnNumber: 22
  }, this) : _createMdxContent6(props);
}
var articles_beyond_wave_echo_cave_default = MDXContent6, filename6 = "_articles.beyond-wave-echo-cave.mdx", headers6 = typeof attributes6 < "u" && attributes6.headers, meta8 = typeof attributes6 < "u" && attributes6.meta, handle6 = typeof attributes6 < "u" && attributes6.handle;

// mdx:routes/posts.dark-mode-and-stripe-mode.mdx
var posts_dark_mode_and_stripe_mode_exports = {};
__export(posts_dark_mode_and_stripe_mode_exports, {
  attributes: () => attributes7,
  default: () => posts_dark_mode_and_stripe_mode_default,
  filename: () => filename7,
  handle: () => handle7,
  headers: () => headers7,
  meta: () => meta9
});
import { Fragment as Fragment7, jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var attributes7 = {
  title: "Dark mode and Stripe mode",
  published: /* @__PURE__ */ new Date(1568592e6),
  updated: /* @__PURE__ */ new Date(16794432e5),
  oneliner: 'Theming my website for 2019 and beyond with the popular "dark mode" and "stripe mode" switch',
  meta: {
    title: "Dark mode and Stripe mode",
    description: "A tongue-in-cheek rebranding of my website to have a dark mode and a mode copying financial payment provider Stripe's homepage design"
  }
};
function _createMdxContent7(props) {
  let _components = Object.assign({
    h1: "h1",
    p: "p",
    img: "img",
    a: "a"
  }, props.components);
  return /* @__PURE__ */ jsxDEV15(Fragment7, { children: [
    /* @__PURE__ */ jsxDEV15(_components.h1, { children: attributes7.title }, void 0, !1, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV15(PostDate, { date: attributes7.published }, void 0, !1, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 69
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV15(PostCallout, { title: `Update ${attributes7.updated.toLocaleDateString()}`, content: "I've redesigned my site a few times since this post and no longer have the Stripe mode. Bummer! I've also since moved on to Remix and Tailwind for building this site." }, void 0, !1, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 115
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV15(_components.p, { children: /* @__PURE__ */ jsxDEV15(_components.img, { src: "/images/posts/dark-mode.png", alt: "Website screenshot with dark mode" }, void 0, !1, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 388
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 373
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV15(_components.p, { children: [
      `Just about every website and application nowadays has a dark mode toggle. It's a
great feature for people who prefer reading on a screen with dark backgrounds
and light text. Other people really like colorful gradients at slight angles and
the growing trend is "borrowing" `,
      /* @__PURE__ */ jsxDEV15(_components.a, { href: "https://stripe.com", children: "Stripe's" }, void 0, !1, {
        fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
        lineNumber: 22,
        columnNumber: 800
      }, this),
      ` website design.
So today I'm launching both on my website!`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 503
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV15(_components.p, { children: /* @__PURE__ */ jsxDEV15(_components.img, { src: "/images/posts/stripe-mode.png", alt: "Website screenshot with Stripe theme" }, void 0, !1, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 970
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 955
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV15(_components.p, { children: [
      `Both the Dark and the Stripe themes are available in the theme switcher in my
site header. The dark mode provides a clean interface great for viewing without
the bright glaring lights of a lighter theme. And Stripe mode fills the need for
this site to have basically the same design as Stripe. Just head to the
`,
      /* @__PURE__ */ jsxDEV15(_components.a, { href: "/", children: "homepage" }, void 0, !1, {
        fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
        lineNumber: 22,
        columnNumber: 1424
      }, this),
      ` and tilt your head 15 degrees. Between operating systems offering
native support for dark theming and more and more sites yoinking all the CSS off
of stripe's homepage, it's imperative to offer those same experiences on my own
site.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 1090
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV15(_components.p, { children: /* @__PURE__ */ jsxDEV15(_components.img, { src: "/images/posts/stripe-clones.png", alt: "Screenshots of Stripe clones" }, void 0, !1, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 1753
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 1738
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV15(_components.p, { children: [
      `If you're interested in seeing how it's implemented, you can check out my
website on `,
      /* @__PURE__ */ jsxDEV15(_components.a, { href: "https://github.com/kennygoff/kennygoff.com", children: "GitHub" }, void 0, !1, {
        fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
        lineNumber: 22,
        columnNumber: 1972
      }, this),
      `! I use
`,
      /* @__PURE__ */ jsxDEV15(_components.a, { href: "https://emotion.sh", children: "emotion" }, void 0, !1, {
        fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
        lineNumber: 22,
        columnNumber: 2076
      }, this),
      ` for styling, and simply add a class name for each
team when loading the page. Dark mode is simple, but Stripe mode was a bit more
complex since I needed to add a lot of components and layout just to handle it.
Using emotion's parent selector syntax I was able to make the many modifications
needed to slap stripes on my page.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 1867
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV15(_components.p, { children: `I originally used emotion-theming, but that had problems since Gatsby builds the
CSS on deploy. The simpler class name approach allowed me to overcome some
problems like the "style flashing" that occurs using emotion's built-in theming
provider without server-side rendering and the hollow emptiness of my personal
website looking like a Stripe clone. There's still some issues to work out, like
the inability to simply reference the "active" theme in CSS, like I could in
emotion's theme provider.` }, void 0, !1, {
      fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
      lineNumber: 22,
      columnNumber: 2500
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
function MDXContent7(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV15(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV15(_createMdxContent7, { ...props }, void 0, !1, {
    fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
    lineNumber: 26,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/posts.dark-mode-and-stripe-mode.mdx",
    lineNumber: 26,
    columnNumber: 22
  }, this) : _createMdxContent7(props);
}
var posts_dark_mode_and_stripe_mode_default = MDXContent7, filename7 = "posts.dark-mode-and-stripe-mode.mdx", headers7 = typeof attributes7 < "u" && attributes7.headers, meta9 = typeof attributes7 < "u" && attributes7.meta, handle7 = typeof attributes7 < "u" && attributes7.handle;

// app/routes/5e-dm-screen-notion-template.tsx
var e_dm_screen_notion_template_exports = {};
__export(e_dm_screen_notion_template_exports, {
  default: () => Articles2,
  meta: () => meta10
});
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var meta10 = () => [
  { title: "5e DM Screen for Notion" },
  {
    name: "description",
    content: "A DM Screen and 5e reference in a Notion template. Quickly look up rules, player stats, and more in this digital DM screen that is easy to extend and modify."
  }
];
function Articles2() {
  return /* @__PURE__ */ jsxDEV16("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV16(Header, {}, void 0, !1, {
      fileName: "app/routes/5e-dm-screen-notion-template.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("main", { className: "max-w-6xl mx-auto p-4", children: [
      /* @__PURE__ */ jsxDEV16("h1", { className: "mb-4 font-semibold text-white text-3xl", children: "5e DM Screen for Notion" }, void 0, !1, {
        fileName: "app/routes/5e-dm-screen-notion-template.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("section", { className: "flex flex-col gap-4 sm:flex-row-reverse sm:items-center", children: [
        /* @__PURE__ */ jsxDEV16(
          "img",
          {
            src: "/images/5e-dm-screen-screenshot.png",
            alt: "Screenshot of DM Screen in use",
            className: "w-full sm:max-w-sm md:max-w-md lg:max-w-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/5e-dm-screen-notion-template.tsx",
            lineNumber: 26,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16("div", { children: [
          /* @__PURE__ */ jsxDEV16("h2", { className: "text-2xl", children: "The simplest reference tool your 5e games" }, void 0, !1, {
            fileName: "app/routes/5e-dm-screen-notion-template.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "my-2", children: "A DM Screen and 5e quick reference in a Notion template. Quickly look up 5e rules, player stats, and more in this digital DM screen that is easy to extend and modify." }, void 0, !1, {
            fileName: "app/routes/5e-dm-screen-notion-template.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("ul", { className: "list-disc list-inside", children: [
            /* @__PURE__ */ jsxDEV16("li", { children: "Quick reference for D&D 5e rules" }, void 0, !1, {
              fileName: "app/routes/5e-dm-screen-notion-template.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("li", { children: "Easy to read at a glance" }, void 0, !1, {
              fileName: "app/routes/5e-dm-screen-notion-template.tsx",
              lineNumber: 42,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("li", { children: "Fully customizable" }, void 0, !1, {
              fileName: "app/routes/5e-dm-screen-notion-template.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/5e-dm-screen-notion-template.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "my-2", children: [
            "Duplicate this template into your Notion and customize it to fit your campaign. Need some ideas for how to use this? Check out",
            " ",
            /* @__PURE__ */ jsxDEV16(Link4, { to: "/using-notion-dm-screen", className: "underline", children: "my post" }, void 0, !1, {
              fileName: "app/routes/5e-dm-screen-notion-template.tsx",
              lineNumber: 48,
              columnNumber: 15
            }, this),
            " ",
            "on the topic."
          ] }, void 0, !0, {
            fileName: "app/routes/5e-dm-screen-notion-template.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16(LinkButton, { href: "https://kennygoff.notion.site/5e-DM-Screen-Template-94918eaae3024973831d3eae4d7810b1", children: "Get 5e DM Screen, free \u2192" }, void 0, !1, {
            fileName: "app/routes/5e-dm-screen-notion-template.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/5e-dm-screen-notion-template.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/5e-dm-screen-notion-template.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/5e-dm-screen-notion-template.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16(Footer, {}, void 0, !1, {
      fileName: "app/routes/5e-dm-screen-notion-template.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/5e-dm-screen-notion-template.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// mdx:routes/posts.inwave-labs-4-years.mdx
var posts_inwave_labs_4_years_exports = {};
__export(posts_inwave_labs_4_years_exports, {
  attributes: () => attributes8,
  default: () => posts_inwave_labs_4_years_default,
  filename: () => filename8,
  handle: () => handle8,
  headers: () => headers8,
  meta: () => meta11
});
import { Fragment as Fragment8, jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var attributes8 = {
  title: "Freelance, burnout, and Double Turn: 4 Years of Inwave Labs",
  published: /* @__PURE__ */ new Date(16157664e5),
  updated: /* @__PURE__ */ new Date(16157664e5),
  oneliner: "Reflections on four years running Inwave Labs",
  original: "https://medium.com/@kennygoff/a-new-freelancers-guide-to-freelancing-f255c7d22137",
  meta: {
    title: "Freelance, burnout, and Double Turn: 4 Years of Inwave Labs",
    description: "Reflections on four years running Inwave Labs, my small indie game development studio, and freelancing along the way"
  }
};
function _createMdxContent8(props) {
  let _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    em: "em",
    h2: "h2",
    img: "img",
    h3: "h3",
    ul: "ul",
    li: "li",
    ol: "ol",
    strong: "strong"
  }, props.components);
  return /* @__PURE__ */ jsxDEV17(Fragment8, { children: [
    /* @__PURE__ */ jsxDEV17(_components.h1, { children: attributes8.title }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(PostDate, { date: attributes8.published }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 69
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(PostCallout, { title: "Content warning", content: "I discuss burnout, anxiety, and depression throughout this post." }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 115
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `Today marks the 4 year anniversary of starting Inwave Labs, my indie game
development studio. It's also just under 3 years since I launched my first game
in early access and about a year since I picked up the broken pieces of it.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 237
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: [
      `If you're stumbling on this and you don't know me: Inwave Labs is basically just
myself, Kenny Goff, trying to make some cool and fun stuff part-time. I released
my first commercial game, `,
      /* @__PURE__ */ jsxDEV17(_components.a, { href: "https://doubleturngame.com/", children: "Double Turn" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 718
      }, this),
      `, last year.
I didn't do everything on Double Turn alone and I want to avoid portraying
myself as a lone wolf solo developer persona \u2014 I worked with great
contractors and collaborators \u2014 but Inwave Labs and the day-to-day of
maintaining Double Turn is just me.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 509
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: [
      `I wanted to take the time to reflect on these 4 years, in part because of the
anniversary, but also because I'm starting to think about the `,
      /* @__PURE__ */ jsxDEV17(_components.em, { children: "next" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 1249
      }, this),
      ` projects
and I think this first phase of Inwave Labs really started with prototyping
Double Turn and bookended by Double Turn's release in November.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 1089
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `This post will mostly be about running Inwave Labs but also a bit about Double
Turn, since it's a major piece of what I had been doing all these years.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 1467
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.h2, { children: "Year 1 - Bootstrapping" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 1660
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `I started Inwave Labs shortly after leaving my first job doing web development
in a tech startup. I left after months of being burnt out, and in my time
figuring out what my next steps were, I picked up some freelancing jobs and was
really liking that work. I also had a small game prototype I lovingly called
"Punch! Kick! Fight!" that I was having a ton of fun working on. It was a fairly
simple local multiplayer platform fighter game.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 1725
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `It was a perfect storm for me, I wanted to do game development since I started
progamming in high school, but through college and beyond gravitated more
towards web development. Not that I didn't like game development anymore, quiet
the opposite. I just that I liked making my own stuff and having the freedom of
"indie" development, even if that meant having a "day job". Another big reason
was that didn't like the crunch culture that I heard so much about from horror
stories at lots of studios that turned me off of wanting to start my career as a
game developer \u2014 I ended up burning out anyway. So it goes. I used this
time to try out my own thing: I took on freelance work to pay the bills, and on
nights and weekends or in between clients I would build out my games. Inwave
Labs was born.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 2211
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(PostCallout, { title: "Disclaimer", content: "Quick aside on my background for correct framing on my own status and privilege in being able to do this: I had built up savings while at my previous job so I could leave with months of runway. I also had parents who were ecstatic to have me move back home for the first time since I left for college 7 years prior. I opted to not renew my expensive lease a few months into freelancing and instead lived with my parents rent-free for 2 years. My burn rate during that time was essentially just my student-loan payments plus smaller bills like phone and software." }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 3061
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `I also had some good word of mouth referrals from some college friends vouching
for me who happened to know some people looking for contract programmers, so I
lucked out on getting work right away. I took a small WordPress job fixing
someone else's mess and then a larger web app project that would keep me going
for months. That web dev client ended up having more work after that project so
I ended up doing really well for a first time freelancer. I had steady project
pay and didn't have to jump around to clients constantly. Most importantly, I
felt good and work on my prototype game now called "Double Turn" was going super
well and was now rocking a super fun pro-wrestling theme that helped drive a lot
of the design direction.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 3674
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: /* @__PURE__ */ jsxDEV17(_components.img, { src: "/images/posts/inwave-four-old-prototype.gif", alt: "Animated clip of my original Double Turn prototype" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 4477
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 4462
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: [
      `For months this was cruising along, and then I finally hit a point in Double
Turn where I felt really confident in the core game loops and had to make the
call: do I release it as a small free or low price game with shitty programmer
art and even worse programmer music, or do I really double down on my goal of
making this a game I knew it could be? After some budgeting and chats with some
great folks, I made the decision to really give Double Turn a full go and hired
`,
      /* @__PURE__ */ jsxDEV17(_components.a, { href: "https://twitter.com/rephildesign", children: "Phil Giarrusso" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 5122
      }, this),
      ` as an artist and
`,
      /* @__PURE__ */ jsxDEV17(_components.a, { href: "https://twitter.com/orbsoundwerx", children: "Orb Soundwerx" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 5234
      }, this),
      ` for music and sound. It was a
pretty small budget from my savings and we couldn't do something as large as say
Rivals of Aether, a mainstay in the genre to this day, but I could make
something good and really polished even if small.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 4625
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `At the time this to me was the big step that took me from aspiring indie or
hobbiest to a professional developer. It seems silly in retrospect but finding
great people to take my money and really fill in the parts of the game that I
knew I couldn't do well enough myself was a major milestone. I had worked with
friends to do music and bought some off-the-shelf tracks for some flash games in
my college days, but this felt different. I was super proud of the work Phil and
the team at Orb Soundwerx did, I remember being super hyped up after seeing some
early character sketches from Phil on the verge of happy tears seeing this game
become more and more "real". I think if there's any success Double Turn had it's
in most part due to their great work in making the game more than just a janky
prototype on my computer and being truly viable as a game people would pay for.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 5584
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: /* @__PURE__ */ jsxDEV17(_components.img, { src: "/images/posts/inwave-four-roster.gif", alt: "Animated clip of Double Turn character roster with near-final art" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 6526
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 6511
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: [
      `This was also when I learned about another important part of working with
collaborators: paying them! I genuinely truly loved this. I only wish I had a
larger budget to work with them more. As someone has been on the other side of
contracting, it felt really wonderful to pay people for their great work and I
tried really hard to be easy to work with and pay timely if not immediately when
I saw an invoice. I highly recommend
`,
      /* @__PURE__ */ jsxDEV17(_components.a, { href: "https://squareup.com/us/en/payroll", children: "Square Payroll" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 7135
      }, this),
      ` if you're able to use it
(at the time it was only US and only some states), it was very easy to set up
paying people and manage all the tax stuff.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 6682
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.h3, { children: "Biting off more than I can chew" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 7401
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: [
      `While that side of it was going really well, I started letting my hubris get the
better of me. In late 2017 I was trying to work out the plan for Double Turn's
launch. I was on a pretty tight budget and more content wasn't really possible.
We were able to build `,
      /* @__PURE__ */ jsxDEV17(_components.em, { children: "just" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 7759
      }, this),
      ` enough of the game that I would feel happy
finishing it, but I still knew I wanted more and that players would want more. I
had run a
`,
      /* @__PURE__ */ jsxDEV17(_components.a, { href: "https://www.kickstarter.com/projects/margravegames/mr-game-the-chaotic-party-game", children: "Kickstarter in the past" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 7942
      }, this),
      `
and had a bit of a bad taste in my mouth from that still plus Kickstarters are
really really stressful so doing another one wasn't my idea of a good time. I
opted instead to do Steam Early Access, and set my sights to that new goal. I
had a clear scope planned for the early access launch but I really wanted to do
more: if we did well enough I could fund more content. Spoiler alert: don't run
early access like this, even if you're happy with the current amount of content
and not expanding the game, system updates and regular maintenance is not going
to sustain an early access game. Later that year I also ended my client work to
focus on Double Turn until the launch. I had about 5 months to work on it full
time.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 7475
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `The first major mistake I made was I planned out the early access to launch with
nearly all the budget dried up. In retrospect I should have launched the early
access earlier with less of the game finished, but I was really worried about
making sure the game was "good enough" for early access. I think I ended up
making it harder for me to adjust to feedback in EA though, because so much of
the game was going to be done.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 8845
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `Unfortunately, against my own better judgement, I took a hail mary that ended up
being the thing that would eventually burn me out and kill a lot of the momentum
of both the game and Inwave Labs: I decided to implement online multiplayer.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 9316
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: [
      `I felt like I needed to make up for the smaller content scope, probably due to
my own self-doubt. I spent a week building online on top of what I had and it
was not perfect but it was `,
      /* @__PURE__ */ jsxDEV17(_components.em, { children: "alright" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 9802
      }, this),
      ` and almost playable. And all it took was a
week. I figured if I worked out the last bit of polish over a few months, surely
it would be production ready. (It never was.)`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 9597
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: "A terrible technical decision, far too late into development." }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 10044
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.h2, { children: "Year 2 - Burning out" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 10146
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `Just as I had hit 1 year of Inwave Labs, I was about a month away from releasing
in early access on Steam. The art was mostly done and the music was mostly done.
No budget money was left unaccounted for, but I had some months runway to pay
bills until I needed to find other work. It was basically down to the wire at
this point.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 10209
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `I went to GDC for the first time ever in March 2018, 3 days after Inwave Labs
turned 1 year old. It didn't go so well. I had multiple panic attacks in GDC. I
didn't know anyone and I felt really self conscious about the game. The imposter
syndrome was strong: I wasn't a game designer, I'm a web programmer, a fraud. My
heightened anxiety prevented me from meeting anyone, talking to folks, or even
showing the game, which I carried around in my backpack on a laptop and 4 USB
controllers.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 10583
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `What hadn't really hit me until I was lying in an Airbnb bed in San Fransisco in
the middle of the afternoon during GDC listening to S.O.S. meditations trying to
calm down: I was already burnt out... again. This time it wasn't bad work life
balance or unrealistic startup pressures or something else external. It was me
doing it to myself.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 11119
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: "I had let a lot of things really build up:" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 11503
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.ul, { children: [
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: "Pressure of everything riding on one Early Access launch" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 11608
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: "Lack of confidence in my system designs or my combat design" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 11707
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: `Fear that I did too little too late in terms of hype building and community
building up-front` }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 11809
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: "Feeling like I didn't playtest with enough people" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 11946
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: `I was nearly out of money and if I got major feedback I couldn't do much about
it unless it was purely technical` }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 12038
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: "Waffling on whether or not to do online" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 12194
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 11586
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17("br", {}, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 12299
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `It all just came crashing down and I just tried to make it through the rest of
GDC as best I could and take advantage of talks and walking around the showroom
floor, hoping maybe I can kick myself out of the depressive spiral.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 12311
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.h3, { children: "Early Access Launch" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 12580
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `I got home from GDC and struggled through the last month of work before the
April Early Access launch. It didn't do well at launch. A lot of my worries were
coming true.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 12642
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.ul, { children: [
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: "I didn't have enough pre-launch buildup or community support" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 12876
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: `Online bugs were so rampant that in launch week I had to move from Steam P2P
online to old hosted servers, that was slower but more stable, but cost me $15
a month to host and had it's own issues` }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 12979
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: `Some of the feedback required core systems or combat changes I couldn't do in
part because it would require too much art rework but also because I had a
certain vision for the combat and was too stubborn to change that (I think
differently about it now but thats a design rabbithole I won't go into here)` }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 13219
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: `I did early access "wrong": the general consensus is that you should do early
access if you could release a steady stream of content updates, something I
couldn't deliver on` }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 13569
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 12854
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17("br", {}, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 13812
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `I think the saving grace of the EA launch was the amazing few people who did
stick around and ask questions and play builds and give feedback. I am forever
grateful for those folks who took a chance on Double Turn. Because as much as I
consider the Early Access a failure, it wasn't 0 people playing, I had some sort
of player base, even if small.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 13824
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: /* @__PURE__ */ jsxDEV17(_components.img, { src: "/images/posts/inwave-four-timeline.png", alt: "Timeline of Double turn's active development, annotated to show GDC 2018, Early Access launch, and then months of no activity" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 14231
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 14216
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `After two months of bug fixing the burnout really caught up to me and I just
went silent. I really didn't mean to it wasn't intentional. It just became too
hard to work on (multiplied by online complexities) and too emotionally draining
to think about. It was clear I wasn't making back my small budget anytime soon
so I got back in touch with the an old client, who sure enough had more work.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 14449
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `Unfortunately fast forward a few months into that project and I was also feeling
the dread of working with that client. It was staff-augmentation work and
blurred the lines of contractor/employee and I just overall felt really
stagnant. The positives I saw early on in the steady pay and seemingly unlimited
project scopes became red flags and negatives and decided to close up work on
that client. I was pretty much burnt out on everything at this point.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 14887
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.h2, { children: "Year 3 - Dead silence" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 15388
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `In March 2019, after 2 years of Inwave Labs, it was basically inactive. I was
too burnt out to work on Double Turn and the last of my client work had just
wrapped up. I was still in the mindset that I would be looking for more client
work so I spent some time refreshing my project contract templates and website.
Busy work, really. I had an important realization: Juggling the contract work
and game dev wasn't sustainable alone.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 15452
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `I didn't really like the contract work available for web devs, I wanted to work
on greenfield projects but I didn't have a design partner or creative partner to
really successfully bid on those types of projects. Most of the work I was
seeing was essentially more "we need a programmer right now because we can't
hire full time or refuse to". But really, without the game dev to come back to,
the web dev client work felt empty and aimless. I decided I'd rather find a
full-time job on a project I can really dig my teeth into, rather than just
piecemeal client projects. Losing the will to work on Double Turn sort of killed
the thing that made freelancing so appealing to me.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 15928
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `So I folded up shop and got a full time job. I joined Dashlane in July 2019 and
Inwave Labs sat in the sidelines quietly in my heart and in the abandoned Steam
page of Double Turn. I also silently dropped the price of the game from $9.99 to
$4.99. This was the first attempt to force myself to scope smaller and rethink
what I wanted to make. Nothing about the game changed but I think the lower
price helped me re-frame in my head what I wanted the game to be to be closer to
what it really was.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 16656
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `I tried to return back to doing patches or bug fixes for Double Turn but the
ghost of online and the sting of reading "is this game dead now?" comments just
really kept me away. In truth I didn't have much to say. No it wasn't dead, but
also no I've got no update. To the Steam forums thats as good as dead so I just
let it be. I wasn't ready to go back yet.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 17199
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.h2, { children: "Year 4 - Revival in time of quarantine" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 17604
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `A few months being back into the world of full-time employment and after a work
trip to our Paris office and a much needed vacation in London \u2014 the first
real vacation i'd had in years \u2014 I came home refreshed and in January 2020
decided to put some work in on Double Turn. For the first time in a long time, I
felt enjoyment working on it.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 17685
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `Right as I started getting back into the swing of things, I saw the dreadful
state of it. From the abandoned store page to the sad state of the codebase and
tacked on online that still haunts me to this day. This time though I started
tackling all the problems that plagued my mind for years and came at the project
with a fresh mindset.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 18069
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: [
      `I was at the point where I could do one of two things with the project: kill it
for real and painfully move on knowing my first commercial project failed
without every seeing the light of day... or I could finish it at least to what I
really wanted for a finished release. I decided to give it a go but with a rule:
Refocus and cut everything that wasn't necessary, especially what made the
project harder to work on. Steam Remote Play Together launched a few months
prior so I decided to
`,
      /* @__PURE__ */ jsxDEV17(_components.a, { href: "https://store.steampowered.com/news/app/762680/view/3503180470707405529", children: "cut online completely" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 18966
      }, this),
      `
and officially turn off the unused online servers and really honed in on a final
list of features and updates for the game.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 18451
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `Unfortunately the COVID-19 pandemic started really showing itself in the US and
recommended quarantine in my city quickly got me into work-from-home mode. I was
extremely fortunate to be able to transition to WFH and keep my job during this
time and the pandemic really forced me to rethink what I cared about and what to
put my energy into. Luckily this aligned with exactly what I wanted for Inwave
and Double Turn, I was already in hardcore focus and cutting mode, and all about
narrowing focus.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 19253
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: [
      `I spent the rest of 2020 putting out regular updates again. Tried to salvage
what I could of the Steam forums and respond to whatever criticism I got from
abandoning the game, even if I knew those players were long gone. Hell I even
whipped up a new logo for Inwave Labs and refreshed
`,
      /* @__PURE__ */ jsxDEV17(_components.a, { href: "https://inwavelabs.com/", children: "the website" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 20106
      }, this),
      "!"
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 19798
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `In November 2020 after a few EA updates that were 2 years never too late, I
launched the fated 1.0 update and... it did ok, I did about as well as the
original EA launch, just at a lower price. Sold some more copies, still nowhere
near paying back the original budget. But hey, I'm happy where the game is.` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 20210
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: [
      `And as year 4 closes, I've finally settled into a place I'm happy with. I'm
enjoying running Inwave Labs part-time. I'm still putting out Double Turn
updates, although the cadence is a bit slower and my focus is mostly on just
quality of life and accessibility updates for the time being. With the
`,
      /* @__PURE__ */ jsxDEV17(_components.a, { href: "https://store.steampowered.com/app/762680/Double_Turn/", children: "occasional bigger update" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 20881
      }, this),
      `
when I'm feeling inspired. I even started working on other game prototypes,
something that my anxiety and guilt prevented me from really pursuing before.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 20560
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.h2, { children: "Takeaways" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 21184
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.ol, { children: [
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: [
        /* @__PURE__ */ jsxDEV17(_components.strong, { children: "Don't go it alone:" }, void 0, !1, {
          fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
          lineNumber: 30,
          columnNumber: 21274
        }, this),
        ` I really feel that having a partner to complement my
skills, whether it be a designer for web work or an artist for games, would
make what I tried from the outset more sustainable and allow me to bounce
ideas of them and relieve some of the pressure and weight of it all`
      ] }, void 0, !0, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 21258
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: [
        /* @__PURE__ */ jsxDEV17(_components.strong, { children: "Scope smaller when taking risks:" }, void 0, !1, {
          fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
          lineNumber: 30,
          columnNumber: 21654
        }, this),
        ` I think there's a version of Double Turn
that's actually simpler and cheaper to make without losing too much quality,
and I think that is what I should have made and launched in Early Access
sooner`
      ] }, void 0, !0, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 21638
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: [
        /* @__PURE__ */ jsxDEV17(_components.strong, { children: "Embrace community:" }, void 0, !1, {
          fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
          lineNumber: 30,
          columnNumber: 21975
        }, this),
        ` I was really hesitant to show off builds of the game
too early too publicly, or to do small betas. I was worried that I only had
one shot to launch and that I was simply too new too unknown or too small to
build a community. I think embracing community building earlier would help,
especially for a game that needs people to play with friends. I also would
have gotten good feedback a bit earlier.`
      ] }, void 0, !0, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 21959
      }, this),
      `
`,
      /* @__PURE__ */ jsxDEV17(_components.li, { children: [
        /* @__PURE__ */ jsxDEV17(_components.strong, { children: "Don't be afraid to ask for help:" }, void 0, !1, {
          fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
          lineNumber: 30,
          columnNumber: 22484
        }, this),
        ` Help comes in a lot of ways and I never
really asked anyone for help during this time. Funding or a publisher could
have helped bridge gap between my vision and what I could afford on savings;
a community manager could have helped foster the community before and during
EA; excited players could have helped playtesting earlier; mentors could have
helped me connect with people at GDC`
      ] }, void 0, !0, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 22468
      }, this),
      `
`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 21236
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.h2, { children: "What's next" }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 23001
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: [
      `Inwave Labs is still kicking and I'm still supporting Double Turn as much as I
can. I've got some prototypes cooking right now and even a hobby project that is
keeping me fresh and `,
      /* @__PURE__ */ jsxDEV17(_components.a, { href: "https://kennygoff.itch.io/micro-shooter", children: "having fun" }, void 0, !1, {
        fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
        lineNumber: 30,
        columnNumber: 23257
      }, this),
      `. I'm
making sure I explore a few prototypes before diving into another commercial
project and whatever I do next will be smaller in scope.`
    ] }, void 0, !0, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 23055
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV17(_components.p, { children: `Most importantly I feel like the space I've carved for myself is much more
sustainable and I'm happy with the full-time web dev, part-time game dev split I
have. I even take part-time "vacations" regularly, I haven't coded on
nights/weekends for 2 weeks!` }, void 0, !1, {
      fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
      lineNumber: 30,
      columnNumber: 23516
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
function MDXContent8(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV17(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV17(_createMdxContent8, { ...props }, void 0, !1, {
    fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
    lineNumber: 34,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/posts.inwave-labs-4-years.mdx",
    lineNumber: 34,
    columnNumber: 22
  }, this) : _createMdxContent8(props);
}
var posts_inwave_labs_4_years_default = MDXContent8, filename8 = "posts.inwave-labs-4-years.mdx", headers8 = typeof attributes8 < "u" && attributes8.headers, meta11 = typeof attributes8 < "u" && attributes8.meta, handle8 = typeof attributes8 < "u" && attributes8.handle;

// app/routes/_articles.tsx
var articles_exports = {};
__export(articles_exports, {
  default: () => Articles3
});
import { Link as Link5, Outlet as Outlet2 } from "@remix-run/react";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function Articles3() {
  return /* @__PURE__ */ jsxDEV18("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV18("header", { className: "max-w-6xl mx-auto p-4 flex flex-row gap-2 items-center", children: [
      /* @__PURE__ */ jsxDEV18(Link5, { to: "/", children: /* @__PURE__ */ jsxDEV18("img", { src: "/images/logo-square.svg", className: "w-8 h-8", alt: "Home" }, void 0, !1, {
        fileName: "app/routes/_articles.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_articles.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18(Link5, { to: "/", children: /* @__PURE__ */ jsxDEV18("img", { src: "/images/logotype.svg", className: "h-6 mt-1", alt: "Home" }, void 0, !1, {
        fileName: "app/routes/_articles.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_articles.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_articles.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("main", { className: "max-w-6xl mx-auto p-4", children: /* @__PURE__ */ jsxDEV18("article", { className: "prose prose-invert sm:prose-lg md:prose-xl prose-a:text-sky-400 hover:prose-a:text-sky-600 prose-h1:font-serif prose-headings:font-serif prose-h1:font-black prose-li:marker:text-white prose-h1:mt-12 prose-h1:mb-12 prose-h1:text-center mx-auto", children: /* @__PURE__ */ jsxDEV18(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/_articles.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_articles.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_articles.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(Footer, {}, void 0, !1, {
      fileName: "app/routes/_articles.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_articles.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta12
});
import { Link as Link6 } from "@remix-run/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var meta12 = () => [
  { title: "Kenny Goff | Designer, developer, and TTRPG game master" },
  {
    name: "description",
    content: "Kenny Goff is a designer and developer. He's a web engineer, TTRPG game master, and runs an indie game and product development studio."
  }
];
function Index() {
  return /* @__PURE__ */ jsxDEV19("div", { className: "md:py-0", children: [
    /* @__PURE__ */ jsxDEV19("header", { className: "max-w-6xl m-auto p-4 md:py-4", children: /* @__PURE__ */ jsxDEV19(Link6, { to: "/", children: /* @__PURE__ */ jsxDEV19("img", { src: "/images/logo-square.svg", className: "w-8 h-8", alt: "Home" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV19("main", { className: "max-w-6xl m-auto p-4", children: [
      /* @__PURE__ */ jsxDEV19("section", { className: "text my-16 sm:my-16 md:my-24 max-w-md", children: [
        /* @__PURE__ */ jsxDEV19("p", { className: "mb-3", children: "Hey! \u{1F44B}" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("h1", { className: "mb-3", children: [
          "I'm ",
          /* @__PURE__ */ jsxDEV19("span", { className: "text-white font-semibold", children: "Kenny Goff" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this),
          ", a creative developer."
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("p", { className: "mb-3", children: [
          "I enjoy building tools to save time and designing games to spend it. I'm a senior web engineer, a TTRPG game master, and a dive bar dart player. I run an independent software company,",
          " ",
          /* @__PURE__ */ jsxDEV19(
            "a",
            {
              href: "https://inwavelabs.com",
              className: "text-white font-semibold underline",
              children: "Inwave Labs"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 36,
              columnNumber: 13
            },
            this
          ),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV19("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxDEV19("h2", { className: "mb-4 font-semibold text-white text-xl", children: "My projects" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxDEV19("div", { children: [
            /* @__PURE__ */ jsxDEV19(
              "img",
              {
                src: "/images/project-5ecampaignwiki.png",
                alt: "Screenshot of 5e Campaign Wiki template",
                className: "rounded-xl mb-6 aspect-video",
                width: "640",
                height: "360"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 49,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV19("h3", { className: "font-bold text-white my-2 text-lg", children: "5e Campaign Wiki for Notion" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 56,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV19("p", { className: "my-2", children: "A Notion template to help you run your 5e campaign. Set up with ready-to-use databases for players, NPCs, session notes, encounters and more. Plan and run your games with ease all within Notion." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV19("div", { className: "flex flex-col gap-2 sm:flex-row mt-4", children: [
              /* @__PURE__ */ jsxDEV19(LinkButton, { href: "https://kennygoff.notion.site/5e-Campaign-Wiki-2234b289a06d47c6967a99a934864c6a", children: "Get 5e Campaign Wiki \u2192" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 66,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV19(
                Link6,
                {
                  className: "text-sm font-bold sm:inline-block text-slate-100 hover:bg-slate-600 active:bg-slate-600 py-2 px-3 bg-slate-500 rounded block text-center",
                  to: "/5e-campaign-wiki-notion-template",
                  children: "Learn more \u2192"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 69,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { children: [
            /* @__PURE__ */ jsxDEV19(
              "img",
              {
                src: "/images/project-5edmscreen.png",
                alt: "Screenshot of 5e DM Screen template",
                className: "rounded-xl mb-6 aspect-video",
                width: "640",
                height: "360"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 78,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV19("h3", { className: "font-bold text-white my-2 text-lg", children: "5e DM Screen for Notion" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 85,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV19("p", { className: "my-2", children: "A DM Screen and 5e quick reference in a Notion template. Quickly look up 5e rules, player stats, and more in this digital DM screen that is easy to extend and modify." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 88,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV19("div", { className: "flex flex-col gap-2 sm:flex-row mt-4", children: [
              /* @__PURE__ */ jsxDEV19(LinkButton, { href: "https://kennygoff.notion.site/5e-DM-Screen-Template-94918eaae3024973831d3eae4d7810b1", children: "Get 5e DM Screen \u2192" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 94,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV19(
                Link6,
                {
                  className: "text-sm font-bold sm:inline-block text-slate-100 hover:bg-slate-600 active:bg-slate-600 py-2 px-3 bg-slate-500 rounded block text-center",
                  to: "/5e-dm-screen-notion-template",
                  children: "Learn more \u2192"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 97,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { children: [
            /* @__PURE__ */ jsxDEV19(
              "img",
              {
                src: "/images/dt-preview.png",
                alt: "Screenshot of pixel art wrestling game, Double Turn",
                className: "rounded-xl mb-6 aspect-video",
                width: "640",
                height: "360"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 106,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV19("h3", { className: "font-bold text-white my-2 text-lg", children: "Double Turn" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 113,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV19("p", { className: "my-2", children: [
              "A pro-wrestling fighting game. I designed and programmed Double Turn with the help of an artist and sound design team. It's out now on",
              " ",
              /* @__PURE__ */ jsxDEV19("a", { href: "https://store.steampowered.com/app/762680/Double_Turn/", children: "Steam" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 118,
                columnNumber: 17
              }, this),
              " ",
              "and ",
              /* @__PURE__ */ jsxDEV19("a", { href: "https://inwave.itch.io/double-turn", children: "itch.io" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 121,
                columnNumber: 21
              }, this),
              "."
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 114,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV19("div", { className: "flex flex-col gap-2 sm:flex-row mt-4", children: [
              /* @__PURE__ */ jsxDEV19(LinkButton, { href: "https://store.steampowered.com/app/762680/Double_Turn/", children: "Buy on Steam \u2192" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 124,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV19(
                "a",
                {
                  className: "text-sm font-bold sm:inline-block text-slate-100 hover:bg-slate-600 active:bg-slate-600 py-2 px-3 bg-slate-500 rounded block text-center",
                  href: "https://doubleturngame.com",
                  children: "Learn more \u2192"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 127,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 123,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV19("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxDEV19("h2", { className: "mb-4 font-semibold text-white text-xl", children: "Articles" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("p", { className: "mb-2", children: [
          "Here's a collection of articles I've written, spanning a few different topics. I treat this much more like a",
          " ",
          /* @__PURE__ */ jsxDEV19(
            "a",
            {
              href: "https://joelhooks.com/digital-garden",
              className: "underline",
              children: "digital garden"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 142,
              columnNumber: 13
            },
            this
          ),
          " ",
          "than a chronological blog, so I'll keep this section updated over time with my favorite posts, musings, ideas, and advice. It's an ever evolving project as is the rest of this site."
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 [grid-template-rows:masonry]", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "border border-slate-600 rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ jsxDEV19("h3", { className: "px-3 py-1 bg-slate-600 font-semibold text-white text-sm", children: "Running D&D and TTRPGs" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 154,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV19("ul", { className: "px-3 py-2 [&>li]:py-1 list-disc ml-4", children: [
              /* @__PURE__ */ jsxDEV19("li", { children: [
                /* @__PURE__ */ jsxDEV19(
                  Link6,
                  {
                    to: "/digital-dice-vs-physical-dice",
                    className: "underline font-semibold",
                    children: "Digital dice vs physical dice"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 159,
                    columnNumber: 19
                  },
                  this
                ),
                " "
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 158,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: /* @__PURE__ */ jsxDEV19(
                Link6,
                {
                  to: "/notion-features-for-running-dnd",
                  className: "underline font-semibold",
                  children: "Helpful Notion features for running D&D"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 170,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 169,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: /* @__PURE__ */ jsxDEV19(
                Link6,
                {
                  to: "/owlbear-rodeo-the-painless-virtual-tabletop",
                  className: "underline font-semibold",
                  children: "Owlbear Rodeo: The painless virtual tabletop"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 178,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 177,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: /* @__PURE__ */ jsxDEV19(
                Link6,
                {
                  to: "/beyond-wave-echo-cave",
                  className: "underline font-semibold",
                  children: "Beyond Wave Echo Cave: Expanding Lost Mines of Phandelver"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 186,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 185,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: /* @__PURE__ */ jsxDEV19(
                Link6,
                {
                  to: "/using-notion-dm-screen",
                  className: "underline font-semibold",
                  children: "Using Notion as a DM Screen"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 194,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 193,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 157,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 153,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "border border-slate-600 rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ jsxDEV19("h3", { className: "px-3 py-1 bg-slate-600 font-semibold text-white text-sm", children: "Miscellaneous" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 204,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV19("ul", { className: "px-3 py-2 [&>li]:py-1 list-disc ml-4", children: [
              /* @__PURE__ */ jsxDEV19("li", { children: /* @__PURE__ */ jsxDEV19(
                Link6,
                {
                  to: "/posts/a-new-freelancers-guide-to-freelancing",
                  className: "underline font-semibold",
                  children: "A new freelancer's guide to freelancing"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 209,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 208,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: /* @__PURE__ */ jsxDEV19(
                Link6,
                {
                  to: "/posts/inwave-labs-4-years",
                  className: "underline font-semibold",
                  children: "Freelance, burnout, and Double Turn: 4 Years of Inwave Labs"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 217,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 216,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV19("li", { children: /* @__PURE__ */ jsxDEV19(
                Link6,
                {
                  to: "/posts/dark-mode-and-stripe-mode",
                  className: "underline font-semibold",
                  children: "Dark mode and Stripe mode"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 225,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 224,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 207,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 203,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV19("section", { children: /* @__PURE__ */ jsxDEV19("div", { className: "p-6 bg-slate-700 rounded-xl my-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:max-w-lg sm:mx-auto", children: [
        /* @__PURE__ */ jsxDEV19(
          "img",
          {
            src: "/images/kg-160.jpg",
            alt: "Photograph of Kenny Goff",
            className: "rounded-full w-20 h-20"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 238,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV19("div", { children: [
          /* @__PURE__ */ jsxDEV19("h2", { className: "font-bold mb-1", children: "Want to chat?" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 244,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19("p", { children: "If you'd like to get in touch, shoot me an email!" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 245,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV19(
            "a",
            {
              className: "text-sm font-semibold mt-4 gap-1 hover:text-sky-400 text-white hover:underline inline-flex",
              href: "mailto:hi@kennygoff.com",
              children: [
                /* @__PURE__ */ jsxDEV19(EnvelopeIcon, { className: "h-5 w-5" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 250,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV19("span", { children: "hi@kennygoff.com" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 251,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 246,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 243,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 237,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 236,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV19(Footer, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 258,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/posts.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts
});
import { Link as Link7, Outlet as Outlet3 } from "@remix-run/react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function Posts() {
  return /* @__PURE__ */ jsxDEV20("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV20("header", { className: "max-w-6xl mx-auto p-4 flex flex-row gap-2 items-center", children: [
      /* @__PURE__ */ jsxDEV20(Link7, { to: "/", children: /* @__PURE__ */ jsxDEV20("img", { src: "/images/logo-square.svg", className: "w-8 h-8", alt: "Home" }, void 0, !1, {
        fileName: "app/routes/posts.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20(Link7, { to: "/", children: /* @__PURE__ */ jsxDEV20("img", { src: "/images/logotype.svg", className: "h-6 mt-1", alt: "Home" }, void 0, !1, {
        fileName: "app/routes/posts.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("main", { className: "max-w-6xl mx-auto p-4", children: /* @__PURE__ */ jsxDEV20("article", { className: "prose prose-invert sm:prose-lg md:prose-xl prose-a:text-sky-400 hover:prose-a:text-sky-600 prose-h1:font-serif prose-headings:font-serif prose-h1:font-black prose-li:marker:text-white prose-h1:mt-12 prose-h1:mb-12 prose-h1:text-center mx-auto", children: /* @__PURE__ */ jsxDEV20(Outlet3, {}, void 0, !1, {
      fileName: "app/routes/posts.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/posts.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20(Footer, {}, void 0, !1, {
      fileName: "app/routes/posts.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => PageNotFound,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { Link as Link8 } from "@remix-run/react";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var loader = () => json(null, { status: 404 });
function PageNotFound() {
  return /* @__PURE__ */ jsxDEV21("div", { className: "max-w-6xl m-auto p-4 md:py-0", children: [
    /* @__PURE__ */ jsxDEV21("main", { children: /* @__PURE__ */ jsxDEV21("section", { className: "text my-16 sm:my-16 md:my-24 max-w-md", children: [
      /* @__PURE__ */ jsxDEV21("h1", { className: "mb-3", children: "Whoops! \u{1F62C}" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21("p", { className: "mb-3", children: "Looks like you stumbled on a page that doesn't exist!" }, void 0, !1, {
        fileName: "app/routes/$.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(
        Link8,
        {
          className: "text-sm font-semibold mt-4 inline-block hover:text-sky-400 text-white hover:underline",
          to: "/",
          children: "Go back home \u2192"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/$.tsx",
          lineNumber: 18,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/$.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(Footer, {}, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QW7PK427.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-PFORKYM3.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-CQJNMW5P.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HI4XAASJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-WLAZBMBY.js", imports: ["/build/_shared/chunk-JHNJUBSN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/5e-campaign-wiki-notion-template": { id: "routes/5e-campaign-wiki-notion-template", parentId: "root", path: "5e-campaign-wiki-notion-template", index: void 0, caseSensitive: void 0, module: "/build/routes/5e-campaign-wiki-notion-template-O6BHZD2N.js", imports: ["/build/_shared/chunk-HEAPHBPE.js", "/build/_shared/chunk-JHNJUBSN.js", "/build/_shared/chunk-T326Y4MP.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/5e-dm-screen-notion-template": { id: "routes/5e-dm-screen-notion-template", parentId: "root", path: "5e-dm-screen-notion-template", index: void 0, caseSensitive: void 0, module: "/build/routes/5e-dm-screen-notion-template-IWXYRSNN.js", imports: ["/build/_shared/chunk-HEAPHBPE.js", "/build/_shared/chunk-JHNJUBSN.js", "/build/_shared/chunk-T326Y4MP.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_articles": { id: "routes/_articles", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_articles-CNTTWPQ7.js", imports: ["/build/_shared/chunk-JHNJUBSN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_articles.beyond-wave-echo-cave": { id: "routes/_articles.beyond-wave-echo-cave", parentId: "routes/_articles", path: "beyond-wave-echo-cave", index: void 0, caseSensitive: void 0, module: "/build/routes/_articles.beyond-wave-echo-cave-B4CEYYUD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_articles.digital-dice-vs-physical-dice": { id: "routes/_articles.digital-dice-vs-physical-dice", parentId: "routes/_articles", path: "digital-dice-vs-physical-dice", index: void 0, caseSensitive: void 0, module: "/build/routes/_articles.digital-dice-vs-physical-dice-OVRLEAMV.js", imports: ["/build/_shared/chunk-T326Y4MP.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_articles.notion-features-for-running-dnd": { id: "routes/_articles.notion-features-for-running-dnd", parentId: "routes/_articles", path: "notion-features-for-running-dnd", index: void 0, caseSensitive: void 0, module: "/build/routes/_articles.notion-features-for-running-dnd-ILP45O6X.js", imports: ["/build/_shared/chunk-T326Y4MP.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop": { id: "routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop", parentId: "routes/_articles", path: "owlbear-rodeo-the-painless-virtual-tabletop", index: void 0, caseSensitive: void 0, module: "/build/routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop-HMAAIEUL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_articles.using-notion-dm-screen": { id: "routes/_articles.using-notion-dm-screen", parentId: "routes/_articles", path: "using-notion-dm-screen", index: void 0, caseSensitive: void 0, module: "/build/routes/_articles.using-notion-dm-screen-2GY66MJV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-RIMY5TCV.js", imports: ["/build/_shared/chunk-YX4PRMQJ.js", "/build/_shared/chunk-JHNJUBSN.js", "/build/_shared/chunk-T326Y4MP.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-VM4MKT5M.js", imports: ["/build/_shared/chunk-JHNJUBSN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/posts.a-new-freelancers-guide-to-freelancing": { id: "routes/posts.a-new-freelancers-guide-to-freelancing", parentId: "routes/posts", path: "a-new-freelancers-guide-to-freelancing", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.a-new-freelancers-guide-to-freelancing-J54XIM3O.js", imports: ["/build/_shared/chunk-GMEE45FN.js", "/build/_shared/chunk-YX4PRMQJ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/posts.dark-mode-and-stripe-mode": { id: "routes/posts.dark-mode-and-stripe-mode", parentId: "routes/posts", path: "dark-mode-and-stripe-mode", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.dark-mode-and-stripe-mode-MQK3I7NM.js", imports: ["/build/_shared/chunk-GMEE45FN.js", "/build/_shared/chunk-YX4PRMQJ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/posts.inwave-labs-4-years": { id: "routes/posts.inwave-labs-4-years", parentId: "routes/posts", path: "inwave-labs-4-years", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.inwave-labs-4-years-ORBR4FE3.js", imports: ["/build/_shared/chunk-GMEE45FN.js", "/build/_shared/chunk-YX4PRMQJ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "062a2bb8", hmr: { runtime: "/build/_shared/chunk-CQJNMW5P.js", timestamp: 1704806398239 }, url: "/build/manifest-062A2BB8.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop": {
    id: "routes/_articles.owlbear-rodeo-the-painless-virtual-tabletop",
    parentId: "routes/_articles",
    path: "owlbear-rodeo-the-painless-virtual-tabletop",
    index: void 0,
    caseSensitive: void 0,
    module: articles_owlbear_rodeo_the_painless_virtual_tabletop_exports
  },
  "routes/posts.a-new-freelancers-guide-to-freelancing": {
    id: "routes/posts.a-new-freelancers-guide-to-freelancing",
    parentId: "routes/posts",
    path: "a-new-freelancers-guide-to-freelancing",
    index: void 0,
    caseSensitive: void 0,
    module: posts_a_new_freelancers_guide_to_freelancing_exports
  },
  "routes/_articles.notion-features-for-running-dnd": {
    id: "routes/_articles.notion-features-for-running-dnd",
    parentId: "routes/_articles",
    path: "notion-features-for-running-dnd",
    index: void 0,
    caseSensitive: void 0,
    module: articles_notion_features_for_running_dnd_exports
  },
  "routes/_articles.digital-dice-vs-physical-dice": {
    id: "routes/_articles.digital-dice-vs-physical-dice",
    parentId: "routes/_articles",
    path: "digital-dice-vs-physical-dice",
    index: void 0,
    caseSensitive: void 0,
    module: articles_digital_dice_vs_physical_dice_exports
  },
  "routes/5e-campaign-wiki-notion-template": {
    id: "routes/5e-campaign-wiki-notion-template",
    parentId: "root",
    path: "5e-campaign-wiki-notion-template",
    index: void 0,
    caseSensitive: void 0,
    module: e_campaign_wiki_notion_template_exports
  },
  "routes/_articles.using-notion-dm-screen": {
    id: "routes/_articles.using-notion-dm-screen",
    parentId: "routes/_articles",
    path: "using-notion-dm-screen",
    index: void 0,
    caseSensitive: void 0,
    module: articles_using_notion_dm_screen_exports
  },
  "routes/_articles.beyond-wave-echo-cave": {
    id: "routes/_articles.beyond-wave-echo-cave",
    parentId: "routes/_articles",
    path: "beyond-wave-echo-cave",
    index: void 0,
    caseSensitive: void 0,
    module: articles_beyond_wave_echo_cave_exports
  },
  "routes/posts.dark-mode-and-stripe-mode": {
    id: "routes/posts.dark-mode-and-stripe-mode",
    parentId: "routes/posts",
    path: "dark-mode-and-stripe-mode",
    index: void 0,
    caseSensitive: void 0,
    module: posts_dark_mode_and_stripe_mode_exports
  },
  "routes/5e-dm-screen-notion-template": {
    id: "routes/5e-dm-screen-notion-template",
    parentId: "root",
    path: "5e-dm-screen-notion-template",
    index: void 0,
    caseSensitive: void 0,
    module: e_dm_screen_notion_template_exports
  },
  "routes/posts.inwave-labs-4-years": {
    id: "routes/posts.inwave-labs-4-years",
    parentId: "routes/posts",
    path: "inwave-labs-4-years",
    index: void 0,
    caseSensitive: void 0,
    module: posts_inwave_labs_4_years_exports
  },
  "routes/_articles": {
    id: "routes/_articles",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: articles_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
