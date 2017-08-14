<template>
  <li>
    <a v-if="!router" :href="link"><slot/></a>
    <router-link v-if="!!router" to="link"><slot/></router-link>
  </li>
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

