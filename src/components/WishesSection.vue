<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import SectionWrapper from "./SectionWrapper.vue";

onMounted(() => {
  gsap.from(".wish-card", {
    scrollTrigger: {
      trigger: ".wishes-section",
      start: "top center",
    },
    y: 100,
    // opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
});
</script>

<template>
  <SectionWrapper
    class="wishes-section"
    :left-words="['20 / 01', 'ANNA SHAPOVA']"
    :right-words="['WISHES', '20 / 01']"
    :block-height="400"
  >
    <template #default>
      <div class="wishes-content">
        <div class="wishes-container">
          <div class="logo" />
          <span class="title wish-card"
            >Oda Nobunaga is known as the first great unifier of japan - a
            daimyō who overthrew the ashikaga shogunate and ended years of
            feudal wars in japan</span
          >
          <span class="text"
            >He is said to be a tall, thin, and scantily bearded man. He is
            highly ambitious which made him ruthless but he is also said to be a
            realistic leader, admired for his ability to make difficult
            decisions.</span
          >
        </div>
      </div>
    </template>
  </SectionWrapper>
</template>

<style lang="scss" scoped>
.wishes-section {
  background-color: var(--background-color);
  --border-color: var(--primary-color);

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
  }
}

.wishes-content {
  padding: 20px;
}

.logo {
  width: 200px;
  height: 100px;
  background: var(--primary-color);
}

.wishes-container {
  // border: 1px solid var(--primary-color);
  height: 760px;
  position: relative;
  padding: 40px;
  font-family: "Oswald", serif;
  color: var(--primary-color);
  box-sizing: border-box;
  gap: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  --mask: radial-gradient(
        40px at 40px 40px,
        #0000 calc(98% - 1px),
        #000 calc(100% - 1px) 98%,
        #0000
      ) -40px -40px,
    linear-gradient(90deg, #000 2px, #0000 0) -1px 50% /100%
      calc(100% - 80px + 1px) repeat-x,
    linear-gradient(#000 2px, #0000 0) 50% -1px / calc(100% - 80px + 1px) 100% repeat-y;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--primary-color);
    -webkit-mask: var(--mask);
    mask: var(--mask);
  }

  .title {
    font-weight: 600;
    font-size: 56px;
    max-width: 800px;
    line-height: 96%;
    font-family: "PPNikkeiLine";
    text-transform: capitalize;
  }
  .text {
    max-width: 500px;
    line-height: 140%;
    font-weight: 400;
    font-size: 20px;
  }
}

.wishes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
