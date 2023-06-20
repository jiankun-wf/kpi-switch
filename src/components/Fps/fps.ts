import { shallowRef } from "vue";

export const useFps = () => {
  let momentFps = 0;
  const fps = shallowRef(0);
  let now = performance.now();
  const renderFps = () => {
    const nextFrame = performance.now();
    if (nextFrame - now <= 1000) {
      momentFps++;
    } else {
      now = performance.now();
      fps.value = momentFps;
      momentFps = 0;
    }
    requestAnimationFrame(renderFps);
  };

  renderFps();

  return { fps };
};

export const useFps2 = () => {
  const fps = shallowRef(0);
  let now = performance.now();
  const renderFps = () => {
    const nextFrame = performance.now();
    fps.value = 1000 / (nextFrame - now);
    now = nextFrame;
    requestAnimationFrame(renderFps);
  };

  requestAnimationFrame(renderFps);
  return { fps };
};
