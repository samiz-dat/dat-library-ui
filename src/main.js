import LibProgress from './components/LibProgress';
import LibButton from './components/LibButton';
import LibButtonGroup from './components/LibButtonGroup';
import LibTag from './components/LibTag';
import LibMenu from './components/LibMenu';
import LibMenuItem from './components/LibMenuItem';
import LibNotification from './components/LibNotification';
import LibLoader from './components/LibLoader';
import LibInput from './components/LibInput';


export default {
  install(Vue) {
    const Notification = Vue.extend(LibNotification);
    Vue.mixin({
      components: {
        LibProgress,
        LibInput,
        LibButton,
        LibButtonGroup,
        LibMenu,
        LibMenuItem,
        LibNotification,
        LibLoader,
        LibTag,
      },
      methods: {
        $alert(options) {
          return new Notification({
            el: document.createElement('div'),
            propsData: options,
          });
        },
      },
    });
  },
};
