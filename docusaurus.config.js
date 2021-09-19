/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "BobaBoard Docs",
  tagline: "Welcome to BobaBoard's (very WIP) documentation!",
  url: "https://bobadocs.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/badlyresizedab.ico",
  organizationName: "essential-randomness",
  projectName: "bobadocs",
  plugins: ["custom-webpack-plugin"],
  themeConfig: {
    navbar: {
      title: "BobaBoard",
      logo: {
        alt: "My Site Logo",
        src: "img/bobadab.png",
      },
      items: [
        // {
        //   type: "doc",
        //   docId: "users/welcome",
        //   position: "left",
        //   label: "Users Guide",
        // },
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
          href: "https://github.com/essential-randomness/bobadocs",
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
            // {
            //   label: "User Guide",
            //   to: "/docs/users/welcome",
            // },
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
              to: "docs/volunteering/intro",
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
              href: "https://github.com/essential-randomness",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BobaBoard.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/essential-randomness/bobadocs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/essential-randomness/bobaboard/edit/main/website/blog/",
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
