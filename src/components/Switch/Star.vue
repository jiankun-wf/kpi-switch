<script setup lang="ts">
defineProps<{
  show: boolean;
}>();
</script>

<template>
  <transition name="looming">
    <i v-show="show" class="iconfont icon-xingxing3 star-item"></i>
  </transition>
</template>

<style lang="less" scoped>
.looming-enter-active,
.looming-leave-active {
  transition-property: opacity, transform;
  transition-duration: var(--transition-1500);
  transition-delay: var(--star-delay);
}

.looming-enter-from {
  transform: scale(0);
  opacity: 0;
}

.looming-leave-to {
  transform: scale(0);
  opacity: 0;
}
// 星星眼
.star-item {
  position: absolute;
  top: var(--star-top);
  right: var(--star-right);
  font-size: var(--star-size);
  color: var(--star-color);
  line-height: 1;
  width: var(--star-size);
  height: var(--star-size);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
