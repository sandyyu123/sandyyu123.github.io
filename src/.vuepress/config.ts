import { defineUserConfig } from "vuepress";
import path from "node:path";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Sandy's Personal Website",
  description: "Welcome to my website, I'm Sandy. Here, you'll find my notes and blogs on various topics. I'm into coding, swimming, and hitting the beach. Explore with me as I share insights on coding and bits of my beachside adventures. Hope you find something cool here!",

  theme,
  head: [
    [
      "link", {
        rel: "shortcut icon",
        // href: "/favicon.ico",
        href: "/mylogo1.jpg",
      }
    ],
    ],

  // Enable it with pwa
  // shouldPrefetch: false,
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  },
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
});
