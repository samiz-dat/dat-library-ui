<template>
  <transition name="fade">
    <div v-show="loading" class="flex fixed absolute--fill justify-center items-center bg-black white">
      <div class="pulse">
        <icon class="path-white w5"></icon>
        <h1 class="athelas tc ttu tracked white">Loading...</h1>
      </div>
    </div>
  </transition>
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
    computed: {},
    methods: {},
};
</script>

<style lang="scss">
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

