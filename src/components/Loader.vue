<template>
  <div class="relative">
    <transition name="fade">
      <div v-if="loading && isGlobal" class="flex fixed absolute--fill justify-center items-center bg-black-fade-75 white z-max">
        <div class="pulse tc ">
          <icon class="path-white w4"></icon>
          <h1 class="athelas tc ttu tracked white">Loading</h1>
        </div>
      </div>
      <div v-if="loading && !isGlobal" class="flex absolute absolute--fill justify-center items-center bg-white-fade-75 black">
        <div class="fa fa-spinner fa-pulse fa-3x fa-fw"></div>
      </div>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
  import icon from '../assets/icon-outline.svg';

  export default {
    name: 'LibLoader',
    components: {
      icon,
    },
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {};
    },
    computed: {
      isGlobal() {
        return !this.$slots.default;
      },
    },
    methods: {},
};
</script>

<style lang="scss">

  .bg-black-fade-75 {
    background-color: rgba(0,0,0,0.75);
  }

  .bg-white-fade-75 {
    background-color: rgba(255,255,255,0.75);
  }

  svg.path-white {
    path {
      stroke: white;
    }
  }

  .pulse {
    animation: pulseAnimation 2s infinite;
    animation-delay: 0.5s;
    animation-timing-function: ease-in-out;
  }

  @keyframes pulseAnimation {
    0%   { opacity:1; }
    50%  { opacity:0; }
    100% { opacity:1; }
  }
</style>

