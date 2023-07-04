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
  organizationName: "BobaBoard ",
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
              href: "https://github.com/essential-randomness",
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
					sidebarCollapsed: false,
          editUrl:
            "https://github.com/essential-randomness/bobadocs/edit/main/",
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
            // TODO: figure out how to get these to work again as they did (likely swizzling)
            // customTypes: {
            //   TODO: {
            //     keyword: "TODO",
            //     ifmClass: "info",
            //     svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-27 0 512 512.00001"><path d="m399.996094 0h-341.996094c-31.980469 0-58 26.019531-58 58v369.996094c0 16.542968 13.457031 30 30 30h131.332031c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-131.332031c-5.515625 0-10-4.484375-10-10v-369.996094c0-20.953125 17.046875-38 38-38h298.234375c-8.855469 10.1875-14.238281 23.472656-14.238281 38v322.265625c0 9.226563-7.503906 16.730469-16.730469 16.730469-7.210937 0-13.589844-4.597656-15.875-11.4375l-15.070313-45.21875c-4.253906-12.765625-16.15625-21.339844-29.609374-21.339844-17.210938 0-31.210938 14-31.210938 31.207031v7.789063h-51.832031c-5.523438 0-10 4.480468-10 10 0 5.523437 4.476562 10 10 10h51.832031v49.75c0 14.765625 2.878906 29.164062 8.558594 42.789062l14.710937 35.308594c1.601563 3.839844 5.316407 6.15625 9.234375 6.15625 1.28125 0 2.585938-.246094 3.839844-.769531 5.101562-2.125 7.511719-7.980469 5.386719-13.078125l-14.710938-35.308594c-4.65625-11.175781-7.019531-22.984375-7.019531-35.09375v-77.539062c0-6.183594 5.027344-11.210938 11.210938-11.210938 4.832031 0 9.109374 3.078125 10.636718 7.664062l15.070313 45.21875c5.007812 15.019532 19.011719 25.113282 34.847656 25.113282 20.253906 0 36.730469-16.476563 36.730469-36.730469v-171.449219l13.363281 13.335938c23.84375 23.796875 36.972656 55.457031 36.972656 89.140625v106.300781c0 27.535156-6.238281 55.238281-18.035156 80.117188-2.367187 4.988281-.238281 10.953124 4.75 13.320312s10.953125.242188 13.320313-4.75c13.058593-27.539062 19.964843-58.207031 19.964843-88.6875v-106.300781c0-39.035157-15.214843-75.71875-42.84375-103.296875l-27.492187-27.441406v-9.554688h66c16.542968 0 30-13.457031 30-30v-83c0-31.980469-26.015625-58-58-58zm38 141c0 5.511719-4.484375 10-10 10h-66v-93c0-20.953125 17.046875-38 38-38s38 17.046875 38 38zm0 0"/><path d="m205 437.996094c-2.632812 0-5.210938 1.070312-7.070312 2.929687-1.859376 1.863281-2.929688 4.441407-2.929688 7.070313 0 2.632812 1.070312 5.210937 2.929688 7.070312 1.859374 1.859375 4.4375 2.929688 7.070312 2.929688 2.628906 0 5.207031-1.070313 7.070312-2.929688 1.859376-1.859375 2.929688-4.4375 2.929688-7.070312 0-2.628906-1.070312-5.207032-2.929688-7.070313-1.863281-1.859375-4.441406-2.929687-7.070312-2.929687zm0 0"/><path d="m137.667969 74c0-11.027344-8.972657-20-20-20h-44c-11.03125 0-20 8.972656-20 20v44c0 11.027344 8.96875 20 20 20h44c11.027343 0 20-8.972656 20-20zm-20 44h-44v-44h44l.011719 44s-.003907 0-.011719 0zm0 0"/><path d="m137.667969 194c0-11.027344-8.972657-20-20-20h-44c-11.03125 0-20 8.972656-20 20v44c0 11.027344 8.96875 20 20 20h44c11.027343 0 20-8.972656 20-20zm-20 44h-44v-44h44l.011719 44s-.003907 0-.011719 0zm0 0"/><path d="m117.667969 294h-44c-11.03125 0-20 8.96875-20 20v43.996094c0 11.03125 8.96875 20 20 20h44c11.027343 0 20-8.96875 20-20v-43.996094c0-11.03125-8.972657-20-20-20zm0 63.996094h-44v-43.996094h44l.011719 43.996094s-.003907 0-.011719 0zm0 0"/><path d="m296.332031 138c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-68.9375c-5.523437 0-10 4.476562-10 10s4.476563 10 10 10zm0 0"/><path d="m181.667969 138c2.632812 0 5.210937-1.070312 7.070312-2.929688 1.859375-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070313-5.210938-2.929688-7.070312c-1.859375-1.859376-4.4375-2.929688-7.070312-2.929688-2.640625 0-5.210938 1.070312-7.070313 2.929688-1.867187 1.859374-2.929687 4.441406-2.929687 7.070312s1.0625 5.210938 2.929687 7.070312c1.859375 1.859376 4.429688 2.929688 7.070313 2.929688zm0 0"/><path d="m181.664062 258h114.667969c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-114.667969c-5.519531 0-10 4.476562-10 10s4.480469 10 10 10zm0 0"/></svg>',
            //   },
            //   "OPEN QUESTION": {
            //     keyword: "OPEN QUESTION",
            //     ifmClass: "secondary",
            //     svg: '<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"><g><path d="m268.408 270.507c35.151 0 63.75-28.599 63.75-63.75s-28.599-63.75-63.75-63.75-63.75 28.599-63.75 63.75 28.599 63.75 63.75 63.75zm0-97.5c18.609 0 33.75 15.141 33.75 33.75s-15.141 33.75-33.75 33.75-33.75-15.141-33.75-33.75c0-18.61 15.141-33.75 33.75-33.75z"/><path d="m463.78 269.483-25.076-16.467-55.548 84.584-91.298-30.634-.007.021c-7.347-2.568-15.231-3.982-23.443-3.982-22.112 0-41.904 10.126-54.982 25.984l-.02-.017-62.425 72.473-66.581-51.331-18.316 23.76 89.084 68.68 41.991-48.749v118.195h142.5v-137.743c0-7.174-1.076-14.099-3.058-20.634l58.939 19.776zm-154.122 212.517h-82.5v-107.743c0-22.745 18.505-41.25 41.25-41.25s41.25 18.505 41.25 41.25z"/><path d="m452.654 60.042c-1.712-32.994-28.947-59.362-62.005-60.029-32.119-.632-59.652 22.809-64.082 54.553-.405 2.9-.611 5.871-.611 8.828h30c2.286-21.144 17.192-33.762 34.089-33.387 17.407.351 31.749 14.227 32.65 31.59.48 9.271-2.762 18.07-9.132 24.779-6.374 6.714-14.974 10.411-24.215 10.411h-15v40.3h30v-12.119c11.727-2.875 22.555-9.07 30.972-17.936 12.089-12.734 18.246-29.423 17.334-46.99z"/><path d="m374.348 167.089h30v30h-30z"/><path d="m145.008 244.742c-2.017 21.008-17.125 33.735-34.089 33.387-17.408-.351-31.75-14.227-32.651-31.59-.481-9.271 2.762-18.07 9.132-24.779 6.374-6.714 14.974-10.411 24.215-10.411h15v-40.3h-30v12.119c-11.727 2.875-22.555 9.071-30.972 17.937-12.09 12.733-18.246 29.422-17.334 46.989 1.712 32.994 28.948 59.362 62.006 60.029 31.545 0 59.711-23.236 64.083-54.559.405-2.905.61-5.873.61-8.821h-30z"/><path d="m96.614 111.047h30v30h-30z"/></g></svg>',
            //   },
            //   GOTCHA: {
            //     keyword: "GOTCHA",
            //     ifmClass: "warning",
            //     svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333     c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333     z"/><path d="M341.333,213.333c23.573,0,42.667-19.093,42.667-42.667C384,147.093,364.907,128,341.333,128     c-23.573,0-42.667,19.093-42.667,42.667C298.667,194.24,317.76,213.333,341.333,213.333z"/><path d="M170.667,213.333c23.573,0,42.667-19.093,42.667-42.667c0-23.573-19.093-42.667-42.667-42.667     C147.093,128,128,147.093,128,170.667C128,194.24,147.093,213.333,170.667,213.333z"/><path d="M240.915,326.248c-26.463,26.464-71.367,26.464-97.83,0c-8.331-8.331-21.839-8.331-30.17,0     c-8.331,8.331-8.331,21.839,0,30.17c43.126,43.126,115.044,43.126,158.17,0c26.463-26.464,71.367-26.464,97.83,0     c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17C355.959,283.123,284.041,283.123,240.915,326.248z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
            //   },
            // },
          },
          beforeDefaultRemarkPlugins: [excalidrawMdxRemark],
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
