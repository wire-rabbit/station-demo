import React from 'react';
import Enzyme, {shallow} from 'enzyme';

import {getComponentByTestAttr} from './testUtils';
import Table from '../src/components/Table/Table.component';

const setup = (props = {}) => shallow(<Table {...props} />);
const headerCells = ['alpha', 'beta', 'gamma'];
const dataRows = [
  {status: null, cells: ['Peter', 'Paul', 'Joan']},
  {status: 'positive', cells: ['Jane', 'Mary', 'Scott']},
  {status: 'negative', cells: ['April', 'Dennis', 'Lucy']},
];

describe('Table', () => {
  let wrapper;

  it('should render without crashing', () => {
    wrapper = setup();
    const tableComponent = getComponentByTestAttr(wrapper, 'component-table');
    expect(tableComponent.length).toBe(1);
  });

  it('should render a header row', () => {
    wrapper = setup({headerCells});
    const header = wrapper.find(`th`);
    expect(header.length).toBe(3);
    expect(wrapper.text()).toMatch('alpha');
  });

  it('should render data rows with status classes', () => {
    wrapper = setup({dataRows});
    const rows = wrapper.find(`tr`);
    expect(rows.length).toBe(dataRows.length);
    const negatives = wrapper.find('.negative');
    expect(negatives.length).toBeGreaterThan(0);
  });
});
