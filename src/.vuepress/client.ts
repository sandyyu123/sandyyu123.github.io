import { defineClientConfig } from "@vuepress/client";
import Particles from "./components/Particles/Particles.vue";

export default defineClientConfig({
    enhance({ app, router, siteData }) {},
    setup() {},
    layouts: {},
    rootComponents: [Particles],
})

// pnpm add -D less
