<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="fixed top-0 left-0 bottom-0 right-0 bg-black-20"
    >
      <div
        v-click-outside="close"
        class="fixed top-2 left-1 right-1 pv1 ph2 center z-9999 mw6 ba br2 bw1 bg-white"
      >
        <slot name="header"></slot>
        <slot/>
      </slot>
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
      close() {
        console.log('close');
        this.$emit('update:visible', false);
      },
    },
    directives: {
      'click-outside': {
        bind(el, binding, vnode) {
          el.event = (event) => {
            // here I check that click was outside the el and his childrens
            if (!(el === event.target || el.contains(event.target)) && vnode.context.visible) {
              // and if it did, call method provided in attribute value
              vnode.context[binding.expression](event);
              console.log('clicked outside', vnode.context.visible, vnode.context);
            }
          };
          document.body.addEventListener('click', el.event);
        },
        unbind(el) {
          document.body.removeEventListener('click', el.event);
        },
      },
    },
  };
</script>

