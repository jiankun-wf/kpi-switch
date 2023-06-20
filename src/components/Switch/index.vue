<template>
  <div :class="['theme-switch', isDark && 'is-dark']">
    <div class="switch-wrapper">
      <div class="switch-wrapper-inner">
        <!-- 开关的圆形 -->
        <div class="eath-context">
          <Eath @toggle="toggleDark" />
        </div>
        <!-- 朦胧层 -->
        <div class="misty-context">
          <Misty
            v-for="(misty, index) in Mistys"
            :key="index"
            :width="misty.width"
            :z-index="misty.zIndex"
            :style="isDark ? misty.darkStyle : misty.style"
          />
        </div>
        <!-- 蓝云 -->
        <div class="blue-cloud-context">
          <Cloud
            v-for="(cloud, index) in BlueClouds"
            :key="index"
            v-bind="cloud"
          ></Cloud>
        </div>
        <!-- 白云 -->
        <div class="white-cloud-context">
          <Cloud
            v-for="(cloud, index) in WhiteClouds"
            :key="index"
            v-bind="cloud"
          ></Cloud>
        </div>
        <!-- 星星 -->
        <div class="star-context">
          <Star
            v-for="(star, index) in CountingStars"
            :key="index"
            :style="{
              ...star.staticStyle,
              ...(isDark ? star.darkStyle : star.style),
            }"
            :show="isDark"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, unref } from "vue";
import { default as Cloud } from "./Cloud.vue";
import { default as Misty } from "./Misty.vue";
import { default as Star } from "./Star.vue";
import { default as Eath } from "./Eath.vue";
import { WhiteClouds, BlueClouds, Mistys, CountingStars } from "./options";

const isDark = ref(false);

const toggleDark = () => {
  isDark.value = !unref(isDark);
};
</script>

<style scoped lang="scss">
.theme-switch {
  --wrapper-radius: 120px;
  --black-opacity-2: rgba(0, 0, 0, 0.2);
  --black-opacity-5: rgba(0, 0, 0, 0.5);
  --white-opacity-2: rgba(255, 255, 255, 0.2);
  --white-opacity-3: rgba(255, 255, 255, 0.3);
  --cloud-color: rgba(255, 255, 255, 1);
  --wrapper-color: #2d6da2;
  --transition-2000: 2000ms;
  --transition-1500: 1500ms;
  --transition-500: 500ms;
  --transition-600: 600ms;
  --transition-700: 700ms;
  --transition-800: 800ms;
  --transition-900: 900ms;
  --transition-1000: 1000ms;
  --transition-1100: 1100ms;
  --height: 240px;
  --width: 600px;
  height: var(--height);
  width: var(--width);
  border-radius: var(--wrapper-radius);
  position: relative;
  box-sizing: border-box;
  margin: 50px auto;
  .switch-wrapper {
    position: absolute;
    inset: 0;
    border-radius: var(--wrapper-radius);
    box-shadow: inset 0 2px 15px var(--black-opacity-2) inset 0 2px 2px
      var(--black-opacity-2) inset 0 -2px 2px var(--black-opacity-2);
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      transition: background-color var(--transition-1500);
      background-color: var(--wrapper-color);
      border-radius: var(--wrapper-radius);
      box-shadow: inset 0px 10px 10px 6px var(--black-opacity-2),
        inset 0px 5px 5px 3px var(--black-opacity-2),
        inset 0px 5px 5px 5px var(--black-opacity-2),
        0px 5px 5px 3px var(--white-opacity-2),
        0px 5px 5px 3px var(--white-opacity-2);
    }
    .switch-wrapper-inner {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--wrapper-radius);

      .eath-context {
        --eath-size: calc(var(--height) / 1.24);
        --eath-left: 5%;
        --eath-delay: 150ms;
        --eath-color: #fec428;
        --eath-shadow: inset 0px 2px 5px 6px var(--white-opacity-3),
          inset -1px 5px 5px 3px var(--white-opacity-2),
          inset -5px -5px 10px 0px var(--black-opacity-5),
          8px 8px 10px 0px var(--black-opacity-5);
      }

      .white-cloud-context {
        --cloud-color: #f1fafc;
        --shadow: inset 0px 2px 5px 2px var(--white-opacity-3),
          inset -1px 5px 5px 2px var(--white-opacity-2),
          inset -5px -5px 5px 2px var(--black-opacity-5),
          8px 8px 5px 0px var(--black-opacity-5);
      }
      .blue-cloud-context {
        --cloud-color: #a3c5e0;
        --shadow: inset 0px 2px 5px 2px var(--white-opacity-3),
          inset -1px 5px 5px 2px var(--white-opacity-2),
          inset -5px -5px 5px 2px var(--black-opacity-5),
          8px 8px 5px 0px var(--black-opacity-5);
      }
      .star-context {
        --star-color: #fff;
      }
    }
  }

  &.is-dark {
    .switch-wrapper {
      &::after {
        background-color: #1c1f2c;
      }
      .switch-wrapper-inner {
        .eath-context {
          --eath-left: 62%;
          --eath-color: #c3c9d1;
          --eath-delay: 0ms;
        }
        .white-cloud-context {
          --cloud-color: #c6c6c6;
        }

        .blue-cloud-context {
          --cloud-color: #6c8395;
        }
      }
    }
  }
}
</style>
