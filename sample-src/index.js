import Vue from 'vue';
import Sample from './Sample';
import DatLibUI from '../dist/bundle.js';
import '../dist/bundle.css';

Vue.use({ install(v, options) {
  v.mixin({
    components: {
      LibProgress: DatLibUI.LibProgress,
    },
  });
}});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Sample/>',
  components: { Sample },
  render: h => h(Sample),
});
