<template>
  <Button :class="[backgroundColour, colour, sizeStyle, borderColour, 'link dim br2 ba bw1 pointer']" :type="type">
    <div v-if="icon" :class="['fa', iconName]"></div>
    <span v-if="$slots.default" :class="['content', icon ? 'ml2' : '']"><slot></slot></span>
  </Button>
</template>

<script>
  import { getStatusColour, getSizeStyle, getIconName } from '../utils/styleHelpers.js';

  export default {
    name: 'LibButton',
    components: {},
    props: {
      action: {
        type: Function,
      },
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
    },
    data() {
      return {};
    },
    computed: {
      iconName() { return getIconName(this.icon); },
      colour() {
        if (this.filled) {
          return 'white';
        }
        return getStatusColour(this.status);
      },
      backgroundColour() {
        if (this.filled) {
          return `bg-${getStatusColour(this.status)}`;
        }
        return 'bg-white';
      },
      borderColour() {
        return `b--${getStatusColour(this.status)}`;
      },
      sizeStyle() { return getSizeStyle(this.size); },
    },
    methods: {},
};
</script>

<style lang="scss">
  .pointer {
    cursor: pointer;
  }
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
    .link {
      .fa {
        display: inline-block;
        & + .content {
          margin-left: 0.25em;
        }
      }
    }
  }
</style>

