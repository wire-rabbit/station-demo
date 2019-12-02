import React from 'react';

const Container = props => (
  <div data-test="component-container" className="ui container">
    {props.children}
  </div>
);

export default Container;
