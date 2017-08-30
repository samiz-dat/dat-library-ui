<template>
  <div>
    <a v-if="!router" class="athelas flex pv3 ph4 ttu tracked nowrap pink link dim pointer" :href="link">
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
</style>

