<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
// import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FallingLeaves from "./FallingLeaves.vue";
import SectionWrapper from "./SectionWrapper.vue";
// @ts-ignore
import MainAnya from "./MainAnya.vue";
// import { useWindowScroll } from "@vueuse/core";

gsap.registerPlugin(ScrollTrigger);

const name = "Anna"; // Replace with actual name
const secondName = "Shapova";
// const { x, y } = useWindowScroll();

onMounted(() => {
  gsap.from(".name-background-anim", {
    duration: 1.5,
    yPercent: 100,
    ease: "power4",
    stagger: 0.3,
    delay: 0.4,
  });
  gsap.from(".portrait", {
    yPercent: 10,
    duration: 1.5,
    delay: 0.6,
  });

  // gsap.to(".name-background-anim", {
  //   y: 0,
  //   ease: "none", // No easing for smooth scrolling
  //   scrollTrigger: {
  //     trigger: ".name-background", // The element that will trigger the effect
  //     start: "top center", // Start the animation when the top of the container reaches the top of the viewport
  //     end: "bottom", // End the animation when the bottom of the container reaches the top of the viewport
  //     scrub: true, // Makes the animation follow the scroll
  //     pin: true, // Keeps the text pinned while scrolling
  //     markers: true,
  //   },
  // });

  // gsap.to(".portrait", {
  //   y: (index) => index * 250,
  //   ease: "none", // No easing for smooth scrolling
  //   scrollTrigger: {
  //     trigger: ".name-background",
  //     start: "top top", // Start the animation when the top of the container reaches the top of the viewport
  //     end: "bottom", // End the animation when the bottom of the container reaches the top of the viewport
  //     scrub: true, // Makes the animation follow the scroll
  //     pin: true, // Keeps the text pinned while scrolling
  //   },
  // });
});

const words = ["20 / 01", "ANNA SHCHAPOVA", "BIRTHDAY", "20 / 01"];
</script>

<template>
  <SectionWrapper
    class="cover-section"
    :left-words="words"
    :right-words="words"
  >
    <template #default>
      <div class="cover-content">
        <div class="name-background">
          <div class="name-background-overflow">
            <div class="name-background-anim">{{ name }}</div>
          </div>
          <div class="name-background-overflow">
            <div class="name-background-anim">{{ secondName }}</div>
          </div>
        </div>

        <div class="portrait-container">
          <MainAnya class="portrait" />
        </div>
        <FallingLeaves
          :count="30"
          :colors="['#ff8787', '#ff6b6b', '#fa5252']"
          :min-size="20"
          :max-size="35"
        />
      </div>
    </template>
  </SectionWrapper>
</template>

<style lang="scss" scoped>
.cover-section {
  background-color: var(--primary-color);
  position: relative;
  --border-color: var(--background-color);
  overflow: hidden;
}
.cover-content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;
  height: 100vh;
}

.name-background-anim {
  // display: flex;
  text-align: center;
}

.name-background {
  position: absolute;

  top: 10vh;
  font-weight: bold;
  color: var(--background-color);
  text-transform: uppercase;
  z-index: 1;
  line-height: 100%;
  text-align: center;
  left: 50%;
  width: 100%;
  transform: translate(-50%);
  overflow: hidden;

  .name-background-overflow {
    overflow: hidden;
    // border: 1px solid red;
    font-size: 20vw;
    height: 20vw;
    line-height: 100%;
    font-family: "Anton", serif;
  }
}

.portrait-container {
  position: absolute;
  z-index: 2;
  width: 100%;
  bottom: 0;
  height: 80%;
  .portrait {
    width: 100%;
    height: 100%;
    // background-size: contain;
    // background-image: url("/queen.png");
    // background-repeat: no-repeat;
    // background-position: center bottom;
    // box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
}
</style>
