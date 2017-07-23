<template>
  <div :class="['lib-progress', sizeStyle]">
    <div :class="['progress', progressColour]" :style="progressStyle"><div v-if="text">{{percentageRounded}}%</div></div>
  </div>
</template>

<script>
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
      progressColour() {
        const lower = this.status.toLowerCase();
        switch (lower) {
          case 'success':
          case 'warning':
          case 'danger':
          case 'primary':
            return lower;
          default:
            return 'normal';
        }
      },
      percentageRounded() {
        const p = +this.percentage;
        if (p <= 0) return 0;
        if (p >= 100) return 100;
        return Math.round(p);
      },
      sizeStyle() {
        const lower = this.size.toLowerCase();
        switch (lower) {
          case 'thin':
            return 'thin';
          case 'thick':
            return 'thick';
          default:
            return undefined;
        }
      },
    },
    methods: {},
};
</script>

<style lang="scss" scoped>

  @import '../main.scss';

  .lib-progress {
    font-size: 1.0rem;
    height: 1.0rem;
    width: 100%;
    overflow: hidden;
    border: thin #222 solid;
    border-radius: 1em;
    background-color: #eee;

    &.thin {
      font-size: 0.5rem;
      height: 0.5rem;
    }
    &.thick {
      font-size: 1.5rem;
      height: 1.5rem;
    }
  }
  .progress {
    display: flex;
    height: 100%;
    border-radius: 1em;
    transition: width ease-in-out 0.1s;
    align-items: center;
    justify-content: flex-end;
    & > div {
      font-size: 0.6em;
      text-align: right;
      padding: 0 0.5em;
    }
  }
  .success {
    background-color: $success;
    color: white;
  }
  .primary {
    background-color: $primary;
    color: white;
  }
  .warning {
    background-color: $warning;
    color: white;
  }
  .danger {
    background-color: $danger;
    color: white;
  }
  .normal {
    background-color: $normal;
    color: white;
  }
</style>

