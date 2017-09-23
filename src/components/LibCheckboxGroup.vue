<template>
  <div class="lib-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'LibCheckboxGroup',
    props: {
      value: {},
    },
    components: {},
    data() {
      return {};
    },
    watch: {
      value(value) {
        console.log('value changed');
        this.$emit('input', value);
      },
    },
    computed: {},
    methods: {},
};
</script>

