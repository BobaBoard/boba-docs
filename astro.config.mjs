import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";

// @ts-check
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import react from "@astrojs/react";
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
      editLink: {
        baseUrl: "https://github.com/BobaBoard/boba-docs/edit/main/",
      },
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
						operations: { badges: true }
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
                  label: "Project Guide",
                  autogenerate: { directory: "project" },
                },
              ],
            },
            {
              label: "Development Guide",
              link: "/development/intro",
              icon: "seti:powershell",
              items: [
                {
                  label: "Development Guide",
                  autogenerate: { directory: "development" },
                },
              ],
            },
            {
              label: "Volunteering Guide",
              link: "/volunteering/experience/intro",
              icon: "heart",
              items: [
                {
                  label: "Volunteering Guide",
                  autogenerate: { directory: "volunteering" },
                },
              ],
            },
            {
              label: "User Guide",
              link: "/users/intro",
              icon: "laptop",
              items: [
                { label: "User Guide", autogenerate: { directory: "users" } },
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
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
