import Vue from 'vue';
import Sample from './Sample';
import DatLibUI from '../index.js';
import '../dist/styles.css';


Vue.use(DatLibUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Sample/>',
  components: { Sample },
  render: h => h(Sample),
});
