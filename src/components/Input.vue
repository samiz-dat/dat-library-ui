<template>
  <div class="lib-input flex flex-row flex-nowrap items-stretch justify-start ba bw1 br2 overflow-hidden" :class="[cursor]">
    <label
      v-if="left && (icon || label)"
      :class="[sizeStyle, labelStyle, 'br']"
      :for="name"
      @click="handleClick"
    >
      <div v-if="icon" :class="['fa', iconName, { pr2: label }]"></div>
      {{label}}
    </label>
    <input
      :class="[sizeStyle, 'items-center flex-grow-2 bn ph2 pv1', cursor]"
      :value="currentValue"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :pattern="pattern"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      autocomplete="off"
    />
    <label
      :class="[sizeStyle, labelStyle, 'bl']"
      v-if="!left && (icon || label)"
      :for="name"
      @click="handleClick"
    >
      <div v-if="icon" :class="['fa', iconName, { pr2: label }]"></div>
      {{label}}
    </label>
  </div>
</template>

<script>
  import { getStatusColour, getSizeStyle, getIconName } from '../utils/styleHelpers.js';

  export default {
    name: 'LibInput',
    components: {},
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text',
      },
      name: {
        type: String,
        default: 'text',
      },
      label: String,
      left: Boolean,
      status: String,
      size: String,
      placeholder: String,
      icon: String,
      pattern: String,
      disabled: Boolean,
      readonly: Boolean,
      cursor: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        currentValue: this.value,
        labelStyle: 'sans-serif items-center flex-grow-0 flex-shrink-1 ph2 pv1 nowrap',
      };
    },
    watch: {
      value(val, oldValue) {
        if (val !== oldValue) this.setCurrentValue(val);
      },
    },
    computed: {
      iconName() { return getIconName(this.icon); },
      statusStyle() { return getStatusColour(this.status); },
      sizeStyle() { return getSizeStyle(this.size); },
    },
    methods: {
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.currentValue = value;
      },
      handleInput() {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      handleBlur(event) {
        this.$emit('blur', event);
      },
      handleClick(event) {
        this.$emit('click', event);
      },
    },
};
</script>

<style type="text/css">
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-shrink-1 {
    flex-shrink: 1;
  }
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow-1 {
    flex-grow: 1;
  }
  .flex-grow-2 {
    flex-grow: 2;
  }
</style>
