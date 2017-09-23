<template>
  <div class="hover-underline bb bw2 b--black">
    <a v-if="!router" class="athelas flex pv3 ph4 ttu tracked nowrap white link dim pointer" :href="link">
      <slot/>
    </a>
    <router-link v-if="!!router" to="link"><slot/></router-link>
  </div>
</template>

<script>
  export default {
    name: 'LibMenuItem',
    inheritAttrs: false,
    props: {
      link: {
        type: String,
      },
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
  .hover-underline {
    transition: border 0.5s ease;
    &:hover {
      border-color: white;
    }
  }
</style>

