import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";

// @ts-check
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import metaTags from "astro-meta-tags";
import react from "@astrojs/react";
import remarkCapitalizeTitles from "@fujocoded/remark-capitalize-titles";
import robotsTxt from "astro-robots-txt";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightSidebarTopics from "starlight-sidebar-topics";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.bobaboard.com",
  base: "/",

  integrations: [
    favicons(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: ["/search", "/_astro/"],
          crawlDelay: 5,
        },
        {
          userAgent: "Googlebot",
          allow: "/",
          disallow: ["/_astro/"],
          crawlDelay: 5,
        },
        {
          userAgent: "CCBot",
          disallow: "/",
        },
        {
          userAgent: "GPTBot",
          disallow: "/",
        },
        {
          userAgent: "ChatGPT-User",
          disallow: "/",
        },
        {
          userAgent: "Slurp",
          crawlDelay: 30,
        },
      ],
    }),
    metaTags(),
    starlight({
      logo: { src: "./public/favicon.svg" },
      title: "BobaBoard Docs",
      social: [
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/bobaboard.bsky.social",
        },
        {
          icon: "mastodon",
          label: "Mastodon",
          href: "https://tech.lgbt/@bobaboard@blorbo.social",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/BobaBoard/boba-docs",
        },
        {
          icon: "twitter",
          label: "Twitter",
          href: "https://twitter.com/BobaBoard",
        },
      ],
      lastUpdated: true,
      customCss: ["./src/styles/global.css"],
      plugins: [
        starlightImageZoom(),
        // Generate the OpenAPI documentation pages.
        starlightOpenAPI([
          {
            base: "api",
            schema: "./src/data/backend-open-api.json",
            sidebar: { label: "REST API" },
            operations: { badges: true },
          },
        ]),
        starlightSidebarTopics(
          [
            {
              label: "Project Guide",
              link: "/project/intro",
              icon: "information",
              items: [
                {
                  label: "Introduction",
                  link: "/project/intro",
                },
                {
                  label: "Roadmap",
                  autogenerate: { directory: "/project/roadmap" },
                },
                {
                  label: "Features",
                  autogenerate: {
                    directory: "/project/features/",
                  },
                },
                {
                  label: "WIPs",
                  collapsed: true,
                  autogenerate: { directory: "/project/wips" },
                },
                {
                  label: "Mockups",
                  autogenerate: { directory: "/project/mockups" },
                },
              ],
            },
            {
              label: "Development Guide",
              link: "/development/intro",
              icon: "seti:powershell",
              items: [
                {
                  label: "Codebase Overview",
                  link: "/development/intro",
                },
                {
                  label: "Contribute",
                  autogenerate: { directory: "/development/contribute" },
                },
                {
                  label: "Boba-Editor",
                  autogenerate: { directory: "/development/boba-editor" },
                },
                {
                  label: "Boba-Backend",
                  items: [
                    {
                      label: "Getting Started",
                      link: "/development/boba-backend/getting-started",
                    },
                    {
                      label: "Backend Development Overview",
                      link: "/development/boba-backend/backend-development-overview",
                    },
                    {
                      label: "APIs",
                      autogenerate: {
                        directory: "/development/boba-backend/apis",
                      },
                    },
                    {
                      label: "Features",
                      autogenerate: {
                        directory: "/development/boba-backend/features",
                      },
                    },
                    {
                      label: "Permissions",
                      autogenerate: {
                        directory: "/development/boba-backend/permissions",
                      },
                    },
                    {
                      label: "Testing",
                      link: "/development/boba-backend/testing",
                    },
                    {
                      label: "Using Postman",
                      link: "/development/boba-backend/using-postman",
                    },
                  ],
                },
                {
                  label: "Boba-Frontend",
                  autogenerate: { directory: "/development/boba-frontend" },
                },
                {
                  label: "Boba-Docs",
                  link: "/development/boba-docs",
                },
                {
                  label: "Testing",
                  autogenerate: { directory: "/development/testing" },
                },
                {
                  label: "Development Philosophy",
                  link: "/development/philosophy",
                },
                {
                  label: "Knowledge Base",
                  autogenerate: { directory: "/development/knowledge-base" },
                },
                {
                  label: "Legacy Overview",
                  badge: { text: "Deprecated", variant: "danger" },
                  collapsed: true,
                  autogenerate: { directory: "/development/legacy-pages" },
                },
                {
                  label: "WIPs",
                  collapsed: true,
                  autogenerate: { directory: "/development/wips" },
                },
              ],
            },
            {
              label: "Volunteering Guide",
              link: "/volunteering/experience/intro",
              icon: "heart",
              items: [
                {
                  label: "The Volunteer Experience™",
                  autogenerate: { directory: "/volunteering/experience" },
                },
                {
                  label: "The BobaBoard Team(s)",
                  link: "/volunteering/team",
                },
                {
                  label: "General Info",
                  autogenerate: { directory: "/volunteering/general" },
                },
                {
                  label: "Coding Team",
                  items: [
                    {
                      label: "Using GitHub",
                      autogenerate: {
                        directory: "/volunteering/coding/github",
                      },
                    },
                    {
                      label: "Joining a sprint",
                      link: "/volunteering/coding/sprints",
                    },
                  ],
                },
                {
                  label: "Communications Team",
                  autogenerate: { directory: "/volunteering/communications" },
                },
                {
                  label: "Community Team",
                  autogenerate: { directory: "/volunteering/community" },
                },
              ],
            },
            {
              label: "User Guide",
              link: "/users/intro",
              icon: "laptop",
              items: [
                {
                  label: "BobaBoard Basics",
                  link: "/users/intro/",
                },
                {
                  label: "Development Status",
                  link: "/users/status/",
                },
                {
                  label: "General BobaBoard Etiquette",
                  link: "/users/etiquette/",
                },
                {
                  label: "How to Use BobaBoard",
                  autogenerate: { directory: "/users/how-to" },
                },
                {
                  label: "Galaxy & Realm Admins",
                  link: "/users/admins/",
                },
                {
                  label: "V0: The Alpha",
                  autogenerate: { directory: "/users/v0" },
                },
                {
                  label: "Fandom Coders",
                  autogenerate: { directory: "/users/fandom-coders" },
                },
                {
                  label: "Self-Hosting",
                  autogenerate: { directory: "/users/self-hosting" },
                },
                {
                  label: "DMCA Policy",
                  link: "/users/dmca-policy",
                },
              ],
            },
            {
              label: "REST API",
              id: "api",
              link: "api",
              icon: "seti:db",
              items: [...openAPISidebarGroups],
            },
          ],
          {
            topics: {
              api: ["/api/**", "/api/**/*"],
            },
          }
        ),
      ],
      components: {
        SocialIcons: "./src/components/SocialLinks.astro",
      },
    }),
    icon(),
    react(),
    mdx({
      remarkPlugins: [
        [
          remarkCapitalizeTitles,
          {
            componentNames: ["Aside"],
          },
        ],
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
