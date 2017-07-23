<template>
  <div :class="['lib-button', statusStyle, typeStyle, sizeStyle]">
    <div v-if="icon" :class="['fa', iconName]"></div>
    <span v-if="$slots.default" class="content"><slot></slot></span>
  </div>
</template>

<script>
  export default {
    name: 'LibProgress',
    components: {},
    props: {
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
      type: {
        type: String,
      },
    },
    data() {
      return {};
    },
    computed: {
      iconName() {
        return `fa-${this.icon}`;
      },
      typeStyle() {
        return this.type === 'primary' ? 'solid' : 'outline';
      },
      statusStyle() {
        const lower = this.status.toLowerCase();
        switch (lower) {
          case 'success':
          case 'warning':
          case 'danger':
          case 'primary':
            return lower;
          default:
            return 'normal';
        }
      },
      sizeStyle() {
        const lower = this.size.toLowerCase();
        switch (lower) {
          case 'small':
            return 's';
          case 'x-small':
            return 'xs';
          case 'large':
            return 'l';
          case 'x-large':
            return 'xl';
          default:
            return undefined;
        }
      },
    },
    methods: {},
};
</script>

<style lang="scss">
  div.lib-button-group {
    font-size: 0;
    &:first-child {

    }

    div.lib-button {
      margin:0;
      border-radius: 0;
      &:last-of-type {
        border-bottom-right-radius: 0.2em;
        border-top-right-radius: 0.2em;
      }
      &:first-of-type {
        border-bottom-left-radius: 0.2em;
        border-top-left-radius: 0.2em;
      }
    }
  }
</style>

<style lang="scss" scoped>
  @import '../main.scss';

  div.lib-button {
    font-size: 1rem;
    transition: color ease-in-out 0.2s, background-color ease-in-out 0.2s, border-color ease-in-out 0.2s,;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 0.2em;
    padding: 0.3em;
    margin-right: 0.5em;
    border: solid 1px black;
    &:hover {
      cursor: pointer;
    }

    &.xl {
      font-size: 1.5rem;
    }
    &.l {
      font-size: 1.2rem;
    }
    &.s {
      font-size: 0.8rem;
    }
    &.xs {
      font-size: 0.65rem;
    }

    &.solid {
      border-color: $normal;
      background-color: $normal;
      color: white;
      &.success {
        border-color: $success;
        background-color: $success;
      }
      &.warning {
        border-color: $warning;
        background-color: $warning;
      }
      &.danger {
        border-color: $danger;
        background-color: $danger;
      }
      &.primary {
        border-color: $primary;
        background-color: $primary;
      }
      &.normal {
        border-color: $normal;
        background-color: $normal;
      }
      &.success:hover {
          background-color: transparentize($success, 0.3);
      }
      &.warning:hover {
          background-color: transparentize($warning, 0.3);
      }
      &.danger:hover {
          background-color: transparentize($danger, 0.3);
      }
      &.primary:hover {
          background-color: transparentize($primary, 0.3);
      }
      &.normal:hover {
          background-color: transparentize($normal, 0.3);
      }
    }

    &.outline {
      background-color: white;
      color: $normal;
      border-color: $normal;
      &.normal:hover {
        background-color: $normal;
        color: white;
      }
      &.success:hover {
        color: $success;
        border-color: $success;
      }
      &.warning:hover {
        color: $warning;
        border-color: $warning;
      }
      &.danger:hover {
        color: $danger;
        border-color: $danger;
      }
      &.primary:hover {
        color: $primary;
        border-color: $primary;
      }
    }

    &:last-of-type {
      margin-right: 0.0em;
    }

    .fa {
      display: inline-block;
      & + .content {
        margin-left: 0.25em;
      }

    }
  }
</style>

