import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import {getComponentByTestAttr} from './testUtils';
import Container from '../src/components/Container/Container.component';

describe('Container', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Container />);
    const containerComponent = getComponentByTestAttr(
      wrapper,
      'component-container',
    );
    expect(containerComponent.length).toBe(1);
  });

  it('should render child content', () => {
    const wrapper = shallow(<Container>Test</Container>);
    const containerComponent = getComponentByTestAttr(
      wrapper,
      'component-container',
    );
    expect(containerComponent.text()).toMatch('Test');
  });
});
