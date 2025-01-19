<script setup lang="ts">
import { onMounted } from "vue";
import SectionWrapper from "./SectionWrapper.vue";
// import { SplitText } from "gsap-trial/SplitText";
import { gsap } from "gsap";

const photos = [
  {
    url: "/gallery.jpg",
    description: "Her radiant smile brightens every room she enters",
  },
  {
    url: "/gallery4.jpg",
    description: "A natural leader with a compassionate heart",
  },
  {
    url: "/gallery2.jpg",
    description: "Always ready for new adventures",
  },
  {
    url: "/gallery3.jpg",
    description: "Always ready for new adventures",
  },
];
onMounted(() => {
  // const childSplit = new SplitText(".gallery-section .title span", {
  //   type: "lines",
  //   linesClass: "split-child",
  // });
  gsap.from(".gallery-title-span", {
    duration: 1,
    yPercent: 120,
    ease: "power4",
    stagger: 0.3,
    rotate: 10,
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top center",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });
  gsap.from(".left-photo", {
    xPercent: 105,
    duration: 1,
    scrollTrigger: {
      trigger: ".gallery-content",
      start: "top top",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".right-photo", {
    xPercent: -105,
    duration: 1,
    scrollTrigger: {
      trigger: ".gallery-content",
      start: "top top",
      toggleActions: "play none none reverse",
    },
  });

  // gsap.to(".name-photo-anim", {
  //   y: (index) => index * 100,
  //   stagger: 0,
  //   ease: "power1.inOut", // No easing for smooth scrolling
  //   scrollTrigger: {
  //     trigger: ".gallery", // The element that will trigger the effect
  //     start: "top top", // Start the animation when the top of the container reaches the top of the viewport
  //     end: "bottom", // End the animation when the bottom of the container reaches the top of the viewport
  //     scrub: true, // Makes the animation follow the scroll
  //     pin: true, // Keeps the text pinned while scrolling
  //     markers: true,
  //   },
  // });
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
          <div class="gallery-title-span">AWESOME</div>
        </div>
        <div class="text">
          Её улыбка, как первое утро весны, озаряет всё вокруг и заставляет
          сердце биться быстрее. Каждый её взгляд — это тайна, которую хочется
          разгадать, и вдохновение, которое невозможно забыть. В её присутствии
          мир становится ярче, а мгновения — по-настоящему бесценными.
        </div>
        <div class="gallery">
          <div
            v-for="(photo, index) in photos"
            class="card"
            :class="{ 'left-photo': index === 0, 'right-photo': index === 2 }"
          >
            <div class="inside-border">
              <img :src="photo.url" />
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
  padding: 0 100px;
  // padding-bottom: 1000px;

  .gallery {
    position: sticky;
    top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    width: 100%;

    max-width: 1200px;
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
    max-height: 600px;
    z-index: 999;

    &.left-photo {
      z-index: 10;
    }

    &.right-photo {
      z-index: 10;
    }

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
      // padding: 20px;
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
      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        --mask: radial-gradient(40px at 40px 40px, #0000 98%, #000) -40px -40px;
        -webkit-mask: var(--mask);
        mask: var(--mask);
      }
    }
  }
}
</style>
