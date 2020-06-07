// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// fixtures
import { record } from '../../pages/fixtures';

// components
import Record from '.';

describe('The Record component', () => {
  it('displays Record', () => {
    const wrapper = mount(<Record record={record} />);

    const child = wrapper.find('.record__details');
    expect(child).toMatchSnapshot();
    expect(child.length).toBe(1);
  });
});
