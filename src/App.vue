<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap-trial/SplitText";
// import { useWindowSize, useElementSize } from "@vueuse/core";
import CoverSection from "./components/CoverSection.vue";
import AboutSection from "./components/AboutSection.vue";
import WishesSection from "./components/WishesSection.vue";
import GallerySection from "./components/GallerySection.vue";
import MomentsSection from "./components/MomentsSection.vue";
import AllWishes from "./components/AllWishes.vue";
import FooterApp from "./components/F.vue";
import Header from "./components/Header.vue";

gsap.registerPlugin(ScrollTrigger);

// const { height: windowHeight } = useWindowSize();
// const content = ref();
// const { height: contentHeight } = useElementSize(content);
// const progress = ref(0);
// let animation: gsap.core.Timeline;
// let isScrolling = false;
// const STEPS = 1; // 12
// let step = 0;

// Создаём анимацию с использованием GSAP
function createAnimation() {
  // const childSplit = new SplitText(".name-background h1", {
  //   type: "lines",
  //   linesClass: "split-child",
  // });
  // .to(".smooth-content", {
  //   yPercent: gsapScroll, // Анимация перемещения контента вверх
  //   duration: 1, // Полная длительность
  // });
}
// function calculate(pixels: number) {
//   return (pixels / contentHeight.value) * 100;
// }

// Следим за изменением прогресса
// watch(progress, (value) => {
//   animation.progress(value / STEPS);
// });

// let isTransition = false;

// const clamp = (n: number, min = -Infinity, max = Infinity) =>
//   Math.min(Math.max(min, n), max);

// Управление скроллом
// const handleScroll = (deltaY: number) => {
//   const fraction = clamp(
//     progress.value + (deltaY / contentHeight.value) * 1,
//     0,
//     STEPS
//   );
//   if (isTransition || fraction === 0) return;
//   console.log("fraction", fraction);
//   if (fraction > 0) {
//     // down
//     // snap(progress.value + fraction);
//     progress.value += deltaY / contentHeight.value;
//   }
//   if (fraction < 0) {
//     // up
//     progress.value -= deltaY / contentHeight.value;
//   }
// };

// const snap = (_step: number) => {
//   if (isTransition) return;

//   isTransition = true;
//   const duration = 0;
//   const ease = "power1.inOut";
//   gsap.to(progress, {
//     value: _step,
//     duration,
//     ease,
//     onComplete: () => {
//       const isSafari = /^((?!chrome|android).)*safari/i.test(
//         navigator.userAgent
//       );
//       if (isSafari) {
//         setTimeout(() => {
//           isScrolling = false;
//         }, 500);
//       }
//       isTransition = false;
//     },
//   });
// };

onMounted(() => {
  createAnimation();

  // useEventListener(
  //   window,
  //   "wheel",
  //   (e) => {
  //     handleScroll(e.deltaY);
  //   },
  //   { passive: true }
  // );
});
import { useHead } from 'unhead'

useHead({
  title: 'Happy Birthday'
})
</script>

<template>
  <div id="smooth-wrapper" class="smooth-wrapper">
    <div id="smooth-content" ref="content" class="smooth-content">
      <Header />
      <CoverSection />
      <AboutSection />
      <WishesSection />
      <GallerySection />
      <MomentsSection />
      <AllWishes />
      <FooterApp />
    </div>
  </div>
</template>

<style lang="scss">
.smooth-wrapper {
  // position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // overflow: hidden;
}

.smooth-content {
  width: 100%;
  // height: 200%; /* Длина контента больше высоты окна */
}

body {
  margin: 0;
  // overflow: hidden; /* Скрываем стандартную прокрутку */
}
</style>
