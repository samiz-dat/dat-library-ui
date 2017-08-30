import LibProgress from './components/LibProgress';
import LibButton from './components/LibButton';
import LibButtonGroup from './components/LibButtonGroup';
import LibMenu from './components/LibMenu';
import LibMenuItem from './components/LibMenuItem';
import LibNotification from './components/LibNotification';

export default {
  install(Vue) {
    const Notification = Vue.extend(LibNotification);
    Vue.mixin({
      components: {
        LibProgress,
        LibButton,
        LibButtonGroup,
        LibMenu,
        LibMenuItem,
        LibNotification,
      },
      methods: {
        $alert(message) {
          const propsData = {
            title: 'test',
            message,
          };
          console.log('alert', message);
          return new Notification({
            el: document.createElement('div'),
            propsData,
          });
        },
      },
    });
  },
};
