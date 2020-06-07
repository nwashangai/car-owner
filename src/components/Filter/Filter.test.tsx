// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// fixtures
import { filters } from '../../pages/fixtures';

// components
import Filter from '.';

describe('The Filter component', () => {
  it('displays Filter', () => {
    const wrapper = mount(<Filter filter={filters[0]} />);

    const child = wrapper.find('.filter__countries');
    expect(child).toMatchSnapshot();
    expect(child.length).toBe(1);
  });
});
