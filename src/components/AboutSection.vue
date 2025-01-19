<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "./SectionWrapper.vue";
import CoverImage from "./CoverImage.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".block", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top center",
      toggleActions: "play none none reverse",
    },

    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
  });
});

const blocks = ref([
  {
    title: "position",
    text: "Designer'ka",
  },
  {
    title: "birth",
    text: "20/01/1999",
  },
  {
    title: "capital",
    text: "Surgut",
  },
  {
    title: "timeline",
    text: "1999 - 2199",
  },
  {
    title: "control",
    text: "Roman",
  },
  // {
  //   title: "",
  //   text: "",
  // },
  // {
  //   title: "",
  //   text: "",
  // },
  // {
  //   title: "",
  //   text: "",
  // },
]);
</script>

<template>
  <SectionWrapper
    class="about-section"
    :left-words="['BIODATA']"
    :right-words="['20 / 01']"
    :block-height="400"
  >
    <template #default>
      <div class="about-content">
        <CoverImage class="logo" />
        <!-- <p>
            A beautiful soul with a heart of gold, Sarah brings light and joy to
            everyone around her. Her infectious smile and warm personality make
            every moment spent with her truly special.
          </p> -->
        <div class="grid">
          <div v-for="block in blocks" class="block">
            <div class="block-title">{{ block.title }}</div>
            <div class="block-text">{{ block.text }}</div>
          </div>
        </div>
      </div>
    </template>
  </SectionWrapper>
</template>

<style lang="scss">
.about-section {
  background-color: var(--background-color);
  --border-color: var(--primary-color);
  z-index: 99999;

  .about-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    height: 400px;
    padding: 0 20px;
    z-index: 99999;
    .logo {
      // background: var(--primary-color);
      min-width: 280px;
      max-width: 380px;
      height: 400px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 100px;
      width: 100%;
      max-width: 900px;
      gap: 30px;
    }

    .block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      line-height: 38px;
      &-title {
        font-size: 18px;
      }
      &-text {
        font-size: 38px;
        font-weight: 600;
        font-family: "PPNikkeiLine";
      }
    }
  }
}
</style>
