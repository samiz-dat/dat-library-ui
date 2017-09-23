<template>
  <popper
    class="lib-select"
    trigger="click"
    :forceShow="visible"
    v-on:show="opened = true"
    v-on:hide="opened = false"
  >
    <lib-input
      cursor="pointer"
      :value="selected"
      :size="size"
      slot="reference"
      placeholder="select"
      :icon="opened ? 'angle-up' : 'angle-down'"
      readonly
    ></lib-input>
    <div
      class="mt1 ba bw1 b--black bg-white br2 w-100"
      :class="[sizeStyle]"
    >
      <slot></slot>
    </div>
  </popper>
</template>

<script>
  import Popper from 'vue-popperjs';
  import Input from './Input';

  import { getSizeStyle } from '../utils/styleHelpers.js';

  export default {
    name: 'LibSelect',
    components: {
      Popper,
      LibInput: Input,
    },
    props: {
      value: {},
      size: String,
    },
    data() {
      return {
        visible: false,
        opened: false,
        selected: undefined,
      };
    },
    computed: {
      sizeStyle() { return getSizeStyle(this.size); },
    },
    methods: {
      select(value, label) {
        this.selected = label;
        this.visible = true;
        this.$nextTick(() => {
          this.visible = false;
        });
        this.$emit('input', value);
      },
    },
};
</script>

