<template>
  <div class="dib ba bw1">
    <label v-if="left && (icon || label)" :for="name">
      <div v-if="icon" :class="['fa', iconName]"></div>
      {{label}}
    </label>
    <input
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :pattern="pattern"
      :disabled="disabled"
      :readonly="readonly"
    />
    <label
      v-if="!left && (icon || label)"
      :for="name"
    >
      <div v-if="icon" :class="['fa', iconName]"></div>
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
    },
    data() {
      return {};
    },
    computed: {
      iconName() { return getIconName(this.icon); },
      statusStyle() { return getStatusColour(this.status); },
      sizeStyle() { return getSizeStyle(this.size); },
    },
    methods: {},
};
</script>
