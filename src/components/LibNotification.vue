<template>
  <transition
    :name="transition"
    mode="in-out"
    appear
    name="fade"
    @after-leave="afterLeave"
  >
  <div class="" v-if="show">
    <button class="" @click="closedByUser()"></button>
    <h2 class="" v-if="title">{{ title }}</h2>
    <div v-if="html" v-html="message"></div>
    <div v-else>{{ message }}</div>
  </div>
</transition>
</template>

<script>
import Vue from 'vue';
export default {
  props: {
    title: String,
    message: String,
    duration: {
      type: Number,
      default: 4500,
    },
    container: {
      type: String,
      default: '.notifications',
    },
    html: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      $_parent_: null,
      show: true,
    };
  },
  created() {
    console.log('notification created');
    let parent = this.$parent;
    if (!parent) {
      const container = document.querySelector(this.container);
      if (!container) {
        // Lazy creating `div.notifications` container.
        const className = this.container.replace('.', '');
        const Notifications = Vue.extend({
          name: 'Notifications',
          render(h) {
            return h('div', {
              class: {
                [`${className}`]: true,
              },
            });
          },
        });
        parent = new Notifications().$mount();
        document.body.appendChild(parent.$el);
      } else {
        parent = container.__vue__; // eslint-disable-line
      }
      // Hacked.
      this.$_parent_ = parent;
    }
  },
  mounted() {
    if (this.$_parent_) {
      this.$_parent_.$el.appendChild(this.$el);
      this.$parent = this.$_parent_;
      delete this.$_parent_;
    }
    if (this.duration > 0) {
      this.timer = setTimeout(() => this.close(), this.duration);
    }
  },
  destroyed() {
    console.log('notification removed');
    this.$el.remove();
  },
  computed: {},
  methods: {
    closedByUser() {
      this.$emit('closed-by-user');
      clearTimeout(this.timer);
      this.show = false;
    },
    close() {
      this.$emit('closed-automatically');
      clearTimeout(this.timer);
      this.show = false;
    },
    afterLeave() {
      this.$destroy();
    },
  },
};
</script>

<style lang="css">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
