// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import Tag from '.';

describe('The Tag component', () => {
  it('displays Tag', () => {
    const wrapper = mount(<Tag color="red" />);

    const child = wrapper.find('.tag');
    expect(child).toMatchSnapshot();
    expect(child.length).toBe(1);
  });
});
