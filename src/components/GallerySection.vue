<script setup lang="ts">
import { onMounted } from "vue";
import SectionWrapper from "./SectionWrapper.vue";
// import { SplitText } from "gsap-trial/SplitText";
import { gsap } from "gsap";

// const photos = [
//   {
//     url: "https://picsum.photos/600/400",
//     description: "Her radiant smile brightens every room she enters",
//   },
//   {
//     url: "https://picsum.photos/601/400",
//     description: "A natural leader with a compassionate heart",
//   },
//   {
//     url: "https://picsum.photos/602/400",
//     description: "Always ready for new adventures",
//   },
// ];
onMounted(() => {
  // const childSplit = new SplitText(".gallery-section .title span", {
  //   type: "lines",
  //   linesClass: "split-child",
  // });
  gsap.from(".gallery-section .title span", {
    duration: 1,
    yPercent: 120,
    ease: "power4",
    stagger: 0.3,
    rotate: 10,
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top center",
      toggleActions: "play none none reverse",
      markers: true,
    },
  });
});
</script>

<template>
  <SectionWrapper
    class="gallery-section"
    :left-words="['20 / 01', 'ANNA SHAPOVA', '20 / 01', 'BEAUTIFUL']"
    :right-words="['GALLERY', '20 / 01', 'GLORIOUS', '20 / 01']"
    :block-height="450"
  >
    <template #default>
      <div class="gallery-content">
        <div class="subtitle">SHE IS</div>
        <div class="title">
          <span>AWESOME</span>
        </div>
        <div class="text">
          Её улыбка, как первое утро весны, озаряет всё вокруг и заставляет
          сердце биться быстрее. Каждый её взгляд — это тайна, которую хочется
          разгадать, и вдохновение, которое невозможно забыть. В её присутствии
          мир становится ярче, а мгновения — по-настоящему бесценными.
        </div>
        <div class="gallery">
          <div class="card">
            <div class="inside-border">
              <span>PHOTO</span>
            </div>
          </div>
          <div class="card">
            <div class="inside-border">
              <span>PHOTO</span>
            </div>
          </div>
          <div class="card">
            <div class="inside-border">
              <span>PHOTO</span>
            </div>
          </div>
          <div class="card">
            <div class="inside-border">
              <span>PHOTO</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionWrapper>
</template>

<style lang="scss">
.gallery-section {
  background-color: var(--background-color);
  --border-color: var(--primary-color);

  .subtitle {
    font-size: 56px;
    margin-bottom: 0px;
  }
  .title {
    font-size: 280px;
    line-height: 100%;
    margin-bottom: 0px;
    overflow: hidden;
  }
  .text {
    font-size: 20px;
    margin-bottom: 100px;
    max-width: 400px;
    text-align: center;
    margin-top: 60px;
    line-height: 140%;
    font-weight: 600;
    font-family: "Oswald";
  }
}

.gallery-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--primary-color);
  padding-top: 100px;

  .gallery {
    position: sticky;
    top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    width: 100%;

    max-width: 900px;
    grid-template-areas:
      "card1 card2 card3"
      "card1 card4 card3";

    &:last-child {
      grid-column: 1;
    }
  }
  .card {
    border: 1px solid var(--primary-color);
    padding: 16px;
    position: relative;
    min-height: 400px;
    max-height: 400px;

    &:nth-child(1) {
      grid-area: card1;
      margin-top: 200px;
    }
    &:nth-child(2) {
      grid-area: card2;
    }
    &:nth-child(3) {
      grid-area: card3;
      margin-top: 200px;
    }
    &:nth-child(4) {
      grid-area: card4;
    }

    .inside-border {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 20px;
      display: flex;
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
        linear-gradient(#000 2px, #0000 0) 50% -1px / calc(100% - 80px + 1px) 100%
          repeat-y;
      &:before {
        content: "";
        position: absolute;
        inset: 0;
        background: var(--primary-color);
        -webkit-mask: var(--mask);
        mask: var(--mask);
      }
    }
  }
}
</style>
