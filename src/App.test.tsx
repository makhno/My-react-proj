import React from 'react';
import ReactDOM from 'react-dom';
import App, {label} from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(1).toBe(1);
});

it('renders the heading', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('h1').text()).toBe("Hello REACT");
});

it('renders the paragraph', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('p').text()).toBe("Nice TDD");
});

it('generates a label', () => {
  const l = label('React');
  expect(l).toBe("Hello REACT");
});

