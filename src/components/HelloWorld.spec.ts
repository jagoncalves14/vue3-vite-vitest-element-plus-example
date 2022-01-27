import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';
import ElementPlus from 'element-plus';

describe('Hello World component', () => {
  it('should mount correctly', () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [ElementPlus],
      },
      props: {
        msg: 'Welcome'
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
