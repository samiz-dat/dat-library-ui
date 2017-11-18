<template>
  <div class="dib relative">
    <div class="absolute white pa1 br-pill sans-serif translate-tr z-999 lineheight-0 pa2 ph1" :class="[bgColour, sizeStyle]">{{sanitizedValue}}</div>
    <slot/>
  </div>
</template>

<script>
  import VueTypes from 'vue-types';
  import { getStatusColour, getSizeStyle } from '../utils/styleHelpers.js';
  export default {
    name: 'LibBadge',
    components: {},
    props: {
      value: VueTypes.oneOfType([String, Number]),
      max: VueTypes.number.def(99),
      status: VueTypes.string.def('danger'),
      size: VueTypes.string.def('xx-small'),
    },
    data() {
      return {};
    },
    computed: {
      sanitizedValue() {
        if (typeof this.value === 'number' && (this.value > this.max)) {
          return `${this.max}+`;
        }
        return this.value;
      },
      bgColour() { return `bg-${getStatusColour(this.status)}`; },
      sizeStyle() { return getSizeStyle(this.size); },
    },
};
</script>

<style lang="scss">
  .lineheight-0 {
    line-height: 0;
  }
  .translate-tr {
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
</style>

