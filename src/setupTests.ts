// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// ATTN VLad - you need this for enzyme package
// npm install -D enzyme enzyme-adapter-react-16 react-addons-test-utils   @types/enzyme @types/enzyme-adapter-react-16
// yarn install
Enzyme.configure({
    adapter: new Adapter(),
});