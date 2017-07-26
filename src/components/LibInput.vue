<template>
  <div>
    <label :for="name"><div v-if="icon" :class="['fa', iconName]"></div></label>
    <input :name="name" :type="type" />
  </div>
</template>

<script>
  import { getStatusStyle, getSizeStyle, getIconName } from '../utils/styleHelpers.js';

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
    },
    data() {
      return {};
    },
    computed: {
      iconName() { return getIconName(this.icon); },
      statusStyle() { return getStatusStyle(this.status); },
      sizeStyle() { return getSizeStyle(this.size); },
    },
    methods: {},
};
</script>
