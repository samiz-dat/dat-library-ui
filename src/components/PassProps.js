import _ from 'lodash';

export default {
  render(createElement) {
    const slots = this.$slots.default;
    slots.forEach((item) => {
      if (item.componentOptions === undefined) {
        return;
      }
      // const parentProps = props.reduce();
      item.componentOptions.propsData = _.assign(item.componentOptions.propsData, _.omit(this.$attrs, ['node', 'id']));
    });
    return createElement(this.$attrs.node || 'div', slots);
  },
};
