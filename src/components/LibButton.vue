<template>
  <Button
    @click="handleClick"
    :class="[
      backgroundColour,
      colour,
      sizeStyle,
      borderColour,
      {'pointer': !active},
      'link bg-animate br2 ba bw1'
    ]"
    :type="type"
  >
    <div v-if="icon" :class="['fa', iconName]"></div>
    <span v-if="$slots.default" :class="['content', { ml2: icon }]">
      <slot/>
    </span>
  </Button>
</template>

<script>
  import { getStatusColour, getSizeStyle, getIconName } from '../utils/styleHelpers.js';
  export default {
    name: 'LibButton',
    components: {},
    props: {
      type: {
        type: String,
        default: 'text',
      },
      icon: {
        type: String,
      },
      status: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: '',
      },
      filled: {
        type: Boolean,
        default: false,
      },
      active: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {};
    },
    computed: {
      iconName() { return getIconName(this.icon); },
      colour() {
        const colour = getStatusColour(this.status);
        if (!this.active) {
          return (this.filled) ? `white hover-${colour}` : `${colour} hover-white`;
        }
        return (this.filled) ? colour : 'white';
      },
      backgroundColour() {
        const colour = getStatusColour(this.status);
        if (!this.active) {
          return (this.filled) ? `bg-${colour} hover-bg-white` : `bg-white hover-bg-${colour}`;
        }
        return (this.filled) ? 'bg-white' : `bg-${colour}`;
      },
      borderColour() {
        return `b--${getStatusColour(this.status)}`;
      },
      sizeStyle() { return getSizeStyle(this.size); },
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e);
      },
    },
};
</script>

<style lang="scss">
  div.lib-button-group {
    font-size: 0;
    .link {
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
      &:first-of-type:not(:only-child) {
        border-bottom-right-radius: 0rem;
        border-top-right-radius: 0rem;
      }
      &:last-of-type:not(:only-child) {
        border-bottom-left-radius: 0rem;
        border-top-left-radius: 0rem;
      }
    }
  }
</style>

