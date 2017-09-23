<template>
  <li
    @click.stop="selectOptionClick"
    class="lib-option list sans-serif bg-animate striped--light-gray pointer ph2 pv1"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script>
  import _ from 'lodash';
  export default {
    name: 'LibOption',
    props: {
      value: {
        required: true,
      },
      label: [String, Number],
    },
    data() {
      return {};
    },
    computed: {
      isObject() {
        return _.isObject(this.value);
      },
      currentLabel() {
        return this.label || (this.isObject ? '' : this.value);
      },
      currentValue() {
        return this.value || this.label || '';
      },
      parent() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.name !== 'LibSelect') {
            parent = parent.$parent;
          } else {
            return parent;
          }
        }
        return undefined;
      },
    },
    methods: {
      selectOptionClick() {
        if (this.parent && this.parent.select) {
          this.parent.select(this.currentValue, this.currentLabel);
        }
      },
    },
    created() {},
    beforeDestroy() {},
  };
</script>

<style lang="scss">
  li.lib-option {
    &:hover,
    &:active {
      background-color: black;
      color: white;
    }
  }
</style>
