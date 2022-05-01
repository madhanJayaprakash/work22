import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './components/Header';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For App', () => {
 
  it('should render button', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
  });


})

