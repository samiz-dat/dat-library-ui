import LibProgress from './components/LibProgress';
import LibButton from './components/LibButton';

export default {
  install(Vue) {
    Vue.mixin({
      components: {
        LibProgress,
        LibButton,
      },
    });
  },
};
