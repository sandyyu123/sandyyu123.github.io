<script setup>
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import Particles from "./Particles/index.vue";
</script>

<template>
  <BlogHero>
    <template #heroBg="heroBg">
      <div
        v-if="heroBg.image"
        :class="['vp-blog-mask', { light: heroBg.imageDark }]"
        :style="[
          {
            background: `url(${heroBg.image}) center/cover no-repeat`,
          },
          heroBg.bgStyle,
        ]"
      />
      <div
        v-if="heroBg.imageDark"
        class="vp-blog-mask dark"
        :style="[
          {
            background: `url(${heroBg.imageDark}) center/cover no-repeat`,
          },
          heroBg.bgStyle,
        ]"
      />
      <Particles />
    </template>
  </BlogHero>
</template>
