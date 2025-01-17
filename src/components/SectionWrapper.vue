<script setup lang="ts">
const props = defineProps({
  leftWords: {
    type: Array,
    required: true,
  },
  rightWords: {
    type: Array,
    required: true,
  },
  blockHeight: {
    type: Number,
    default: 300,
  },
});
</script>
<template>
  <section class="section-wrapper">
    <div class="left-line line">
      <span
        v-for="word in props.leftWords"
        :style="{ minHeight: props.blockHeight + 'px' }"
        >{{ word }}</span
      >
    </div>
    <div class="content">
      <slot />
    </div>

    <div class="right-line line">
      <span
        v-for="word in props.rightWords"
        :style="{ minHeight: props.blockHeight + 'px' }"
        >{{ word }}</span
      >
    </div>
  </section>
</template>
<style lang="scss">
.section-wrapper {
  display: flex;
  // position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  flex-direction: row;

  justify-content: center;
  border-bottom: 1px solid var(--primary-color);

  .section-center {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1600px;

    overflow: hidden;
    position: relative;
  }

  .content {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }

  .line {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-transform: capitalize;
    color: var(--border-color);
    font-family: "PPNikkeiLine" serif;
    span {
      height: auto;
      width: 150px;
      font-size: 18px;
      white-space: nowrap;
      text-transform: capitalize;
      text-align: center;
      pointer-events: none;
    }
  }

  .left-line {
    span {
      transform: rotate(-90deg) translateY(calc(50% - 18px));
    }
  }
  .right-line {
    span {
      transform: rotate(90deg) translateY(calc(50% - 18px));
    }
  }
}
</style>
