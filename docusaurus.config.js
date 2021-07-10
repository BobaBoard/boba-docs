/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "BobaBoard Docs",
  tagline: "Dinosaurs are cool",
  url: "https://bobadocs.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/badlyresizedab.ico",
  organizationName: "essential-randomness",
  projectName: "bobadocs",
  themeConfig: {
    navbar: {
      title: "BobaBoard",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "users/welcome",
          position: "left",
          label: "Users Guide",
        },
        {
          type: "doc",
          docId: "product/intro",
          position: "left",
          label: "Product Guide",
        },
        {
          type: "doc",
          docId: "engineering/intro",
          position: "left",
          label: "Engineering Guide",
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
            {
              label: "User Guide",
              to: "/docs/users/welcome",
            },
            {
              label: "Engineering Guide",
              to: "/docs/engineering/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
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
            routePath: "/api/",
            specUrl: "http://localhost:4200/open-api.json",
          },
        ],
        theme: {
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
