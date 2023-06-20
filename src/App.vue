<template>
  <div class="screen">
    <Fps />
    <Switch />
  </div>
</template>

<script setup lang="ts">
import { default as Switch } from "./components/Switch/index.vue";
import { default as Fps } from "./components/Fps/index.vue";
</script>

<style lang="less">
.screen {
  background-color: #2d6da2;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
