<template>
  <pass-props node="div" class="bg-near-black white flex flex-row flex-wrap justify-start" :router="router">
    <slot/>
  </pass-props>
</template>

<script>
  import PassProps from 'vue-pass-props';

  export default {
    name: 'LibMenu',
    components: {
      PassProps,
    },
    props: {
      router: {
        type: Object,
      },
    },
    data() {
      return {};
    },
    computed: {},
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>

