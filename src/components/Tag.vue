<template>
  <div
    :class="[
      backgroundColour,
      colour,
      sizeStyle,
      'dib pv1 ph2 sans-serif br2'
    ]"
  >
    <slot/>
  </div>
</template>

<script>
  import { getStatusColour, getSizeStyle } from '../utils/styleHelpers.js';
  export default {
    name: 'LibTag',
    components: {},
    props: {
      status: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: '',
      },
    },
    data() {
      return {};
    },
    computed: {
      colour() {
        return getStatusColour(this.status);
      },
      backgroundColour() {
        const colour = getStatusColour(this.status, 'washed');
        return `bg-${colour}`;
      },
      sizeStyle() { return getSizeStyle(this.size); },
    },
    methods: {},
};
</script>
