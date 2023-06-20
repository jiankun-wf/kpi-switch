<script setup lang="ts">
const emit = defineEmits<{
  (e: "toggle"): void;
}>();

const toggle = () => {
  emit("toggle");
};
</script>

<template>
  <div class="eath" @click.stop="toggle"></div>
</template>

<style lang="less" scoped>
.eath {
  position: absolute;
  left: var(--eath-left);
  width: var(--eath-size);
  height: var(--eath-size);
  z-index: 13;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  background-color: var(--eath-color);
  box-shadow: var(--eath-shadow);
  transition-property: background-color, left;
  transition-duration: var(--transition-1500);
  transition-delay: var(--eath-delay);
  border-radius: 50%;
}
</style>
