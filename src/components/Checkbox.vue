<template>
  <div>
    <label class="dib ba br2 bw1 w2 h2 bg-moon-gray v-btm">
      <div class="flex w-100 h-100 items-center justify-center">
        <div v-if="isChecked" :class="['fa', 'fa-check']"/>
      </div>
      <input
        v-model="model"
        class="dn absolute top--2 left--2 w0 h0"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        :name="name"
        :readonly="readonly"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </label>
  <span><slot></slot></span>
  </div>
</template>

<script>
  // import { getStatusColour } from '../utils/styleHelpers.js';

  export default {
    name: 'LibCheckbox',
    components: {},
    props: {
      value: {},
      name: String,
      label: {},
      checked: Boolean,
      // status: String,
      // size: String,
      icon: String,
      disabled: Boolean,
      readonly: Boolean,
    },
    created() {
      if (this.checked) this.addToStore();
    },
    data() {
      return {
        selfModel: false,
      };
    },
    computed: {
      model: {
        get() {
          return this.store !== undefined ? this.store : this.selfModel;
        },
        set(val) {
          if (this.isGroup) {
            console.log('group', val);
            this.group.$emit('input', val);
          } else {
            console.log('not group', val);
            this.$emit('input', val);
            this.selfModel = val;
          }
        },
      },
      isChecked() {
        if (typeof this.model === 'boolean') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > -1;
        }
        return false;
      },
      // statusStyle() { return getStatusColour(this.status); },
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.name !== 'LibCheckboxGroup') {
            parent = parent.$parent;
          } else {
            this.group = parent;
            return true;
          }
        }
        return false;
      },
      store() {
        return this.isGroup ? this.group.value : this.value;
      },
    },
    methods: {
      addToStore() {
        if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
          this.model.push(this.label);
        } else {
          this.model = true;
        }
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      handleBlur(event) {
        this.$emit('blur', event);
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
