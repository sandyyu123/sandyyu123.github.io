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
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    //background-color: #000000;  // 黑色
    background-color: transparent; // 透明背景
}
</style>