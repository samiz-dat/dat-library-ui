<template>
  <!-- //<div :class="['lib-progress', sizeStyle]"> -->
  <div :class="['lib-progress', height, 'w-100 f5 br4 overflow-hidden bg-light-gray ba b--dark-gray']">
    <div
      :class="[progressColour, 'progress', 'flex items-center justify-end h-100 br4 lh-solid']"
      :style="progressStyle"
    >
      <div v-if="text" class="f7 tr pv0 ph2 white">{{percentageRounded}}%</div>
    </div>
  </div>
</template>

<script>
  import { getStatusColour } from '../utils/styleHelpers';
  export default {
    name: 'LibProgress',
    components: {},
    props: {
      percentage: {
        type: [Number, String],
        required: true,
      },
      status: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: '',
      },
      text: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {};
    },
    computed: {
      progressStyle() {
        return {
          width: `${this.percentageRounded}%`,
        };
      },
      progressColour() { return `bg-${getStatusColour(this.status)}`; },
      percentageRounded() {
        const p = +this.percentage;
        if (p <= 0) return 0;
        if (p >= 100) return 100;
        return Math.round(p);
      },
      height() {
        const lower = this.size.toLowerCase();
        switch (lower) {
          case 'thin':
            return 'h0_5';
          case 'thick':
            return 'h2';
          default:
            return 'h1';
        }
      },
    },
    methods: {},
};
</script>

<style lang="scss">
  //selectively import tachyons
  @import '../../node_modules/tachyons-sass/tachyons.scss';
</style>
<style lang="scss" scoped>
  .h0_5 {
    height: 0.5rem;
  }
  .progress {
    transition: width linear 0.1s;
  }
</style>

