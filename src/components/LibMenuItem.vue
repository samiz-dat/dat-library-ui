<template>
  <div>
    {{hello}}
  </div>
</template>

<script>
  export default {
    name: 'LibMenu',
    components: {},
    props: {
      hello: {
        type: String,
        default: 'damn',
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

