<script setup lang="ts">
defineProps<{
  width: string;
  height: string;
  top: string;
  right: string;
  rotate: string;
  zIndex?: number;
}>();
</script>

<template>
  <div
    class="cloud"
    :style="{
      width,
      height,
      top,
      right,
      transform: `rotate(${rotate})`,
      zIndex,
    }"
  ></div>
</template>

<style lang="less" scoped>
.cloud {
  position: absolute;
  border-radius: var(--wrapper-radius);
  transition-property: background-color;
  transition-duration: var(--transition-2000);
  box-shadow: var(--shadow);
  background-color: var(--cloud-color);
}
</style>
