<script setup lang="ts">
import { computed } from "vue";
const date = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <div class="footer">KUKUSANNET DESIGN © {{ date }}</div>
</template>

<style lang="scss">
.footer {
  color: var(--primary-color);
  background-color: var(--background-color);
  font-size: 20px;
  display: flex;
  width: 100%;
  padding: 40px;
  justify-content: center;
  align-items: center;
}
</style>
