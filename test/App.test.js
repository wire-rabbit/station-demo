import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import { getComponentByTestAttr } from './testUtils';
import App from '../src/components/App/App.component';

describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    const appComponent = getComponentByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
  });
});
