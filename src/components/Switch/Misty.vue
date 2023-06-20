<script setup lang="ts">
defineProps<{
  width: string;
  zIndex?: number;
}>();
</script>

<template>
  <div class="misty-item" :style="{ width, zIndex }"></div>
</template>

<style lang="less" scoped>
.misty-item {
  position: absolute;
  background-color: var(--misty-color);
  left: var(--left);
  border-radius: var(--border-radius);
  transition: all var(--transition-1500);
  top: 0;
  bottom: 0;
}
</style>
