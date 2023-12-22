import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Mr.Hope's Personal Website",
  description: "Welcome to my website, I'm Mr. Hope. Here, you'll find my notes and blogs on various topics. I'm into coding, swimming, and hitting the beach. Explore with me as I share insights on coding and bits of my beachside adventures. Hope you find something cool here!",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
