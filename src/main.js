import LibProgress from './components/LibProgress';
import LibButton from './components/LibButton';
import LibButtonGroup from './components/LibButtonGroup';

export default {
  install(Vue) {
    Vue.mixin({
      components: {
        LibProgress,
        LibButton,
        LibButtonGroup,
      },
    });
  },
};
