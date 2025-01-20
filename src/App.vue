<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap-trial/SplitText";
import { useEventListener } from "@vueuse/core";
import CoverSection from "./components/CoverSection.vue";
import AboutSection from "./components/AboutSection.vue";
import WishesSection from "./components/WishesSection.vue";
import GallerySection from "./components/GallerySection.vue";
// import MomentsSection from "./components/MomentsSection.vue";
import AllWishes from "./components/AllWishes.vue";
import FooterApp from "./components/F.vue";
import Header from "./components/Header.vue";
import { useHead } from "unhead";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // createAnimation();

  useEventListener(
    window,
    "scroll",
    (e) => {
      e.preventDefault();
    },
    { passive: true }
  );
});

useHead({
  title: "Happy Birthday",
});
</script>

<template>
  <div id="smooth-wrapper" class="smooth-wrapper">
    <div id="smooth-content" ref="content" class="smooth-content">
      <Header />
      <CoverSection />
      <AboutSection />
      <WishesSection />
      <GallerySection />
      <!-- <MomentsSection /> -->
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
