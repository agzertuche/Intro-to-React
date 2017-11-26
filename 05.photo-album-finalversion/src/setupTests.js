/* eslint-disable */
import raf from './tempPolyfills'
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import LocalStorageMock from './localStorageMock';
import renderer from 'react-test-renderer';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.localStorage = new LocalStorageMock();
global.renderer = renderer;

/* eslint-enable */
