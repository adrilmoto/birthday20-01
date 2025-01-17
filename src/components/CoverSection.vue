<script setup lang="ts">
import { watch, onMounted } from "vue";
import gsap from "gsap";
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FallingLeaves from "./FallingLeaves.vue";
import SectionWrapper from "./SectionWrapper.vue";
import { useWindowScroll } from "@vueuse/core";

gsap.registerPlugin(ScrollTrigger, SplitText);

const name = "Anna"; // Replace with actual name
const secondName = "Shapova";
const { x, y } = useWindowScroll();

onMounted(() => {
  const childSplit = new SplitText(".name-background h1", {
    type: "lines",
    linesClass: "split-child",
  });

  gsap.from(childSplit.lines, {
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
        <span class="name-background">
          <h1 style="overflow: hidden">
            <span>{{ name }} </span>
          </h1>
          <h1 style="overflow: hidden">
            <span>{{ secondName }}</span>
          </h1>
        </span>

        <div class="portrait-container">
          <div class="portrait" />
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
}
.cover-content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100vh;
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

  span {
    font-family: "Anton", serif;
  }
  h1 {
    overflow: hidden;
    font-size: 20vw;
    height: 20vw;
    line-height: 100%;
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
    background-size: contain;
    background-image: url("src/assets/queen.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    // box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
}
</style>
