<template>
  <transition name="fade">
    <div v-show="visible" class="fixed top-2 left-1 right-1 pv1 ph2 center z-9999 mw6 ba br2 bw1 bg-white">
      <slot/>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'LibDialog',
    components: {
    },
    props: {
      visible: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {};
    },
    computed: {
    },
    methods: {
    },
  };
</script>

