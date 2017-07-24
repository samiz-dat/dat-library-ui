<template>
  <pass-props class="lib-menu" :hello="router">
    <slot />
  </pass-props>
</template>

<script>
  import PassProps from './PassProps';

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

