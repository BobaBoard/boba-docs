const path = require("path");
const excalidrawMdxPlugin = require("excalidraw-mdx-plugin/plugin");
const excalidrawMdxRemark = require("excalidraw-mdx-plugin");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "BobaBoard Docs",
  tagline: "Welcome to BobaBoard's (very WIP) documentation!",
  url: "https://bobadocs.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/badlyresizedab.ico",
  organizationName: "BobaBoard",
  projectName: "boba-docs",
  plugins: [excalidrawMdxPlugin],
  clientModules: [require.resolve("./src/global.ts")],
  themeConfig: {
    respectPrefersColorScheme: true,
    image: "img/preview.png",
    navbar: {
      title: "BobaBoard",
      logo: {
        alt: "My Site Logo",
        src: "img/bobadab.png",
      },
      items: [
        {
          type: "doc",
          docId: "product/intro",
          position: "left",
          label: "Product Guide",
        },
        {
          to: "docs/engineering/intro",
          position: "left",
          label: "Engineering Guide",
          activeBaseRegex: "docs/engineering",
        },
        {
          type: "doc",
          docId: "volunteering/intro",
          position: "left",
          label: "Volunteering Guide",
        },
        {
          type: "doc",
          docId: "users/intro",
          position: "left",
          label: "User Guide",
        },
        {
          href: "https://github.com/BobaBoard/boba-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Product Guide",
              to: "/docs/product/intro",
            },
            {
              label: "Engineering Guide",
              to: "/docs/engineering/intro",
            },
            {
              label: "Volunteering Guide",
              to: "/docs/volunteering/intro",
            },
            {
              label: "User Guide",
              to: "/docs/users/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Web",
              href: "https://www.bobaboard.com/",
            },
            {
              label: "Tumblr",
              href: "https://bobaboard.tumblr.com/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/BobaBoard",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Ms. Boba",
              href: "https://twitter.com/essentialrandom",
            },
            {
              label: "Insider Newsletter",
              href: "https://essentialrandomness.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/BobaBoard",
            },
            {
              label: "Attributions",
              to: "/attributions",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BobaBoard.`,
    },
    algolia: {
      appId: "86NF1IYBIX",
      apiKey: "d4b1e3a5db4a6b2cc820865825fdc10b",
      indexName: "bobaboard",
      contextualSearch: true,
      replaceSearchResultPathname: {
        from: "/docs/", // or as RegExp: /\/docs\//
        to: "/",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          editUrl:
            "https://github.com/BobaBoard/boba-docs/edit/main/docusaurus/",
          admonitions: {
            tag: ":::",
            keywords: [
              "TODO",
              "OPEN QUESTION",
              "GOTCHA",
              "secondary",
              "info",
              "success",
              "danger",
              "note",
              "tip",
              "warning",
              "important",
              "caution",
            ],
          },
          beforeDefaultRemarkPlugins: [excalidrawMdxRemark],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/BobaBoard/boba-docs/edit/main/docusaurus/blog/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("@bobaboard/boba-editor/dist/main.css"),
          ],
        },
      },
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            routePath: "docs/engineering/rest-api/",
            specUrl:
              process.env.API_SPEC ||
              "https://backend-dot-bobaboard.uc.r.appspot.com/open-api.json",
          },
        ],
        theme: {
          // See options at https://github.com/Redocly/redoc#redoc-options-object
          redocOptions: {
            expandSingleSchemaField: true,
            expandResponses: "200",
            pathInMiddlePanel: true,
            requiredPropsFirst: true,
            hideHostname: true,
          },
        },
      },
    ],
  ],
};
