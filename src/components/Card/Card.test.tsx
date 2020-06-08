// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import Card from './';

describe('The Card component', () => {
  const props = {
    header: 'header',
    classes: 'my-class'
  };

  it('displays card with child props', () => {
    const wrapper = mount(
      <Card {...props}>
        <div className="my-child">child component</div>
      </Card>
    );

    const child = wrapper.find('.my-child');
    expect(child).toMatchSnapshot();
    expect(child.props().className).toBe('my-child');
  });
});
