import LibProgress from './components/LibProgress';

export default {
  install(Vue) {
    Vue.mixin({
      components: {
        LibProgress,
      },
    });
  },
};
