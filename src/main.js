import LibProgress from './components/LibProgress';
import LibButton from './components/LibButton';
import LibButtonGroup from './components/LibButtonGroup';
import LibMenu from './components/LibMenu';
import LibMenuItem from './components/LibMenuItem';

export default {
  install(Vue) {
    Vue.mixin({
      components: {
        LibProgress,
        LibButton,
        LibButtonGroup,
        LibMenu,
        LibMenuItem,
      },
    });
  },
};
