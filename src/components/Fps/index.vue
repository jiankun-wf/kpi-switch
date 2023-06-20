<script setup lang="ts">
import { useFps } from "./fps";

const { fps } = useFps();
</script>

<template>
  <div
    style="color: #fff; font-size: 16px; font-weight: 600; text-align: center"
  >
    帧数：{{ fps }}
  </div>
</template>

<style lang="less" scoped></style>
