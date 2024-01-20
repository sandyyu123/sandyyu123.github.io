<script setup>
import { onMounted } from "vue";
async function loadDependancies() {
    await import("./lib/EasePack.min.js");
    await import("./lib/TweenLite.min.js");
    await import("./lib/particles.js");
}
onMounted(loadDependancies);
</script>
<template>
    <div id="particles-wrapper">
        <canvas id="particles-canvas"></canvas>
    </div>
</template>

<style lang="less">
#particles-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    // background-color: #000000;  // 黑色
    // background-color: transparent; // 透明背景
    // opacity: 0.5;
}
</style>