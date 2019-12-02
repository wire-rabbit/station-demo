import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { getComponentByTestAttr } from './testUtils';
import App from '../src/components/App/App.component';

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    const appComponent = getComponentByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
  });
});
