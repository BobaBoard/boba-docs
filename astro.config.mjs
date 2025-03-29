// @ts-check
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import robotsTxt from "astro-robots-txt";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightSidebarTopics from "starlight-sidebar-topics";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.bobaboard.com",
  base: "/",
  integrations: [favicons(), robotsTxt({
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
  }), metaTags(), starlight({
    logo: { src: "./public/favicon.svg" },
    title: "BobaBoard Docs",
    social: {
      blueSky: "https://bsky.app/profile/bobaboard.bsky.social",
      mastodon: "https://tech.lgbt/@bobaboard@blorbo.social",
      github: "https://github.com/BobaBoard/boba-docs",
      twitter: "https://twitter.com/BobaBoard",
    },
    editLink: {
      baseUrl: "https://github.com/BobaBoard/boba-docs/edit/main/",
    },
    lastUpdated: true,
    sidebar: [
      {
        label: "Development",
        autogenerate: { directory: "development" },
      },
              {
        label: "Project Guide",
        autogenerate: { directory: "project" },
      },
              {
        label: "User Guide",
        autogenerate: { directory: "users" },
      },
              {
        label: "Volunteering",
        autogenerate: { directory: "volunteering" },
      },
              {
        label: "Extra",
        autogenerate: { directory: "extra" },
      },
    ],
    customCss: ["./src/tailwind.css"],
    plugins: [starlightImageZoom()],
    components: {
      SocialIcons: "./src/components/SocialLinks.astro",
    },
  }), tailwind({ applyBaseStyles: false }), icon(), react()],
});