// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import Color from '.';

describe('The Color component', () => {
  it('displays color', () => {
    const wrapper = mount(<Color color="red" />);

    const child = wrapper.find('.color');
    expect(child).toMatchSnapshot();
    expect(child.length).toBe(1);
  });
});
