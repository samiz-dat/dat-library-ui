import Vue from 'vue';
import Example from './Example';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Example/>',
  components: { Example },
  render: h => h(Example),
});
