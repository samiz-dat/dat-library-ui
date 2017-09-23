import Progress from './components/Progress';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Tag from './components/Tag';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import Notification from './components/Notification';
import Loader from './components/Loader';
import Input from './components/Input';
import Form from './components/Form';
import Checkbox from './components/Checkbox';
import CheckboxGroup from './components/CheckboxGroup';

export default {
  install(Vue) {
    const LibNotification = Vue.extend(Notification);
    Vue.mixin({
      components: {
        LibProgress: Progress,
        LibInput: Input,
        LibButton: Button,
        LibButtonGroup: ButtonGroup,
        LibMenu: Menu,
        LibMenuItem: MenuItem,
        LibNotification,
        LibLoader: Loader,
        LibTag: Tag,
        LibForm: Form,
        LibCheckbox: Checkbox,
        LibCheckboxGroup: CheckboxGroup,
      },
      methods: {
        $alert(options) {
          return new LibNotification({
            el: document.createElement('div'),
            propsData: options,
          });
        },
      },
    });
  },
};
