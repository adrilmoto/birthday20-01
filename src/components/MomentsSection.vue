<script setup lang="ts">
import { ref, onMounted } from "vue";
import SectionWrapper from "./SectionWrapper.vue";
import { gsap } from "gsap";
// import { SplitText } from "gsap-trial/SplitText";

const moments = ref([
  {
    date: "2022",
    title: "TURKEY",
    description:
      "Nobunaga's decisive victory against the much larger Imagawa clan marked a turning point in his rise to power, demonstrating his military genius and establishing his reputation as a formidable warlord",
    image: "https://picsum.photos/603/400",
    isOpen: false,
  },
  {
    title: "2023 FRANCE",
    description: "Surprise party with all friends",
    image: "https://picsum.photos/604/400",
    isOpen: false,
  },
  {
    title: "2024 ITALY",
    description: "A proud moment of achievement",
    image: "https://picsum.photos/605/400",
    isOpen: false,
  },
  {
    title: "2024 TAILAND",
    description: "A proud moment of achievement",
    image: "https://picsum.photos/605/400",
    isOpen: false,
  },
  {
    title: "2025 NETHERLANDS",
    description: "A proud moment of achievement",
    image: "https://picsum.photos/605/400",
    isOpen: false,
  },
]);

const toggleMoment = (index: number) => {
  // const prevIndex = moments.value.findIndex((m) => m.isOpen);
  // console.log(prevIndex);
  // if (prevIndex >= 0 && index !== prevIndex) {
  //   moments.value[prevIndex].isOpen = false;
  // }
  moments.value[index].isOpen = !moments.value[index].isOpen;
};

onMounted(() => {
  gsap.from(".moments-section-title", {
    duration: 1,
    yPercent: 120,
    ease: "power4",
    stagger: 0.3,
    rotate: 10,
    scrollTrigger: {
      trigger: ".moments-section",
      start: "top center",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });
});
</script>

<template>
  <SectionWrapper
    class="moments-section"
    :left-words="['20 / 01', 'ANNA SHAPOVA', '20 / 01', 'SPECIAL MOMENTS']"
    :right-words="['ANNA SHCHAPOVA', '20 / 01', 'SPECIAL MOMENTS', '20 / 01']"
    :block-height="340"
  >
    <template #default>
      <div class="moments-content">
        <div class="subtitle">HER</div>
        <div class="title">
          <div class="moments-section-title">MOMENTS</div>
        </div>
        <div class="text">
          Путешествия — это моменты, когда её глаза сияют от восторга, а сердце
          наполняется жаждой открытий. Каждая страна, каждый город оставляет в
          её душе отпечаток, превращаясь в бесценные воспоминания и вдохновение.
          Эти истории — не просто о местах, они о том, как она находит красоту в
          каждом шаге и превращает каждый момент в настоящее чудо
        </div>
        <div class="accordion-section">
          <div
            v-for="(moment, index) in moments"
            :key="index"
            class="moment-item"
            :class="{ 'is-open': moment.isOpen }"
          >
            <div class="moment-header" @click="toggleMoment(index)">
              <h3>{{ moment.date }} {{ moment.title }}</h3>
              <div class="cross">
                <span class="vert" />
                <span class="hors" />
              </div>
            </div>
            <div class="moment-content">
              <div class="moment-content-container">
                <p class="moment-content-description">
                  {{ moment.description }}
                </p>
                <img :src="moment.image" :alt="moment.title" />
                <img :src="moment.image" :alt="moment.title" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionWrapper>
</template>

<style lang="scss">
.moments-section {
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
    max-width: 500px;
    text-align: center;
    margin-top: 60px;
    font-family: "Oswald";
  }
}

.moments-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--primary-color);
  padding: 100px 0;

  .accordion-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--background-color);

    .moment-item {
      // background-color: white;
      width: 100%;
      border-bottom: 1px solid var(--primary-color);
      overflow: hidden;
      transition: all 200ms;
      background-color: none;

      .cross {
        position: relative;
        width: 40px;
        height: 40px;
        --cross-color: var(--primary-color);
        transition: all 400ms;
        display: flex;
        align-items: center;
        justify-content: center;
        .vert {
          width: 2px;
          height: 40px;
          background-color: var(--cross-color);
          position: absolute;
          transition: 400ms;
          transform-origin: center;
        }
        .hors {
          width: 40px;
          height: 2px;
          background-color: var(--cross-color);
          position: absolute;
        }
      }

      .moment-header {
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        color: var(--primary-color);
        transition: all 300ms;

        &:hover {
          background-color: var(--primary-color);
          color: var(--background-color);
          .cross {
            --cross-color: var(--background-color);
          }
        }

        h3 {
          margin: 0;
          font-size: 42px;
          text-transform: capitalize !important;
          font-family: "PPNikkeiLine";
        }

        .toggle-icon {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }
      }

      .moment-content {
        background-color: var(--primary-color);
        color: var(--background-color);
        padding: 0;

        max-height: 0px;
        overflow: hidden;
        transition: max-height 1s ease-in-out;

        &-container {
          display: flex;
          flex-direction: row;
          padding: 1.5rem;
          gap: 40px;
          width: 100%;
        }
        &-description {
          width: 400px;
        }

        img {
          width: 100%;
          max-width: 700px;
          aspect-ratio: 1/1;
          object-fit: cover;
          border: 1px solid var(--background-color);
        }
      }

      &.is-open .toggle-icon {
        --cross-color: var(--background);
      }

      &.is-open .moment-header {
        background-color: var(--primary-color);
        color: var(--background-color);
      }

      &.is-open .cross {
        --cross-color: var(--background-color);
        .vert {
          transform: rotate(90deg);
          transform-origin: center;
        }
      }

      &.is-open .moment-content {
        max-height: 900px;
        transition: max-height 1s ease-in-out;
      }
    }
  }
}
</style>
