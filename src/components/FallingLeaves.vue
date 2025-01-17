<template>
  <div class="falling-leaves">
    <div v-for="leaf in leaves" :key="leaf.id" class="leaf" ref="leavesRef">
      <!-- 🍂 -->
      <!-- Replace with a leaf image if needed -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const leavesRef = ref(null);
const leaves = ref(
  Array.from({ length: 40 }, (_, i) => ({
    id: i,
  }))
);

function animateLeaves() {
  const _leaves = leavesRef.value as any;
  _leaves.forEach((leaf: any) => {
    const startX = Math.floor(Math.random() * 100); // Start position
    const endX = startX + (Math.random() * 20 - 10); // Slight horizontal drift
    const duration = Math.random() * 20 + 5;

    // const delay = Math.random() * 5; // Staggered start

    gsap.fromTo(
      leaf,
      {
        x: `${startX}vw`,
        y: "-10vh",
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5, // Random size
        ease: "",
      },
      {
        x: `${endX}vw`,
        y: "140vh",
        rotation: `+=${Math.random() * 360}`, // Continuous rotation
        duration: duration,
        delay: 0,
        repeat: -1, // Infinite loop
        ease: "power1.inOut", // Smooth easing
      }
    );
  });
}
onMounted(() => {
  animateLeaves();
});
</script>

<style scoped>
.falling-leaves {
  position: absolute;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: 99;
  left: 0;
}

.leaf {
  position: absolute;
  background: var(--primary-color);
  will-change: transform;
  font-size: 2rem;
  width: 140px;
  height: 140px;
  /* opacity: 0.8; */
  border-radius: 0 120px;
  clip-path: polygon(100% 69%, 63% 66%, 70% 99%, 0 100%, 0 0, 100% 0);
}
</style>
