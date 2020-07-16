import React from 'react';
import {shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Results from '../components/results.jsx';

describe('Testing of our Results', () =>{
  it('Should render the application', ()=> {
    let app = shallow(<Results />);
    expect(app.find('#count').exists()).toBe(true);
  });

  it('Should return the correct count', ()=>{
    let app = mount(<Results pokemon={[{name: 'bulbasaur'}, {name:'charaizard' }]} header={[]}
      count='7'/>);
    let count = app.find('#count');
    expect(count.text()).toBe('COUNT: 7');
  });

});
