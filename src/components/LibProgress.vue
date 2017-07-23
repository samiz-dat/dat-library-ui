<template>
  <div class="lib-progress">
    <div :class="['progress', progressColour]" :style="progressStyle"><div>{{percentageRounded}}%</div></div>
  </div>
</template>

<script>
  export default {
    name: 'LibProgress',
    components: {},
    props: {
      percentage: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        default: '',
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
        if (this.percentage <= 0) return 0;
        if (this.percentage >= 100) return 100;
        return Math.round(this.percentage);
      },
    },
    methods: {},
};
</script>

<style lang="scss" scoped>

  @import '../main.scss';

  .lib-progress {
    height: 0.5rem;
    width: 100%;
    overflow: hidden;
    border: thin #222 solid;
    border-radius: 1rem;
    background-color: #eee;
  }
  .progress {
    display: flex;
    height: 100%;
    border-radius: 1rem;
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

