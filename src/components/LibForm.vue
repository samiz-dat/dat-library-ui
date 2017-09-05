<template>
  <form
    method="post"
    v-on:submit.stop.prevent="handleSubmit"
  >
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'LibForm',
    components: {},
    props: {},
    data() {
      return {};
    },
    computed: {},
    methods: {
      handleSubmit(event) {
        this.$emit('submit', event);
      },
    },
};
</script>
