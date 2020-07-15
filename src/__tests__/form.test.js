import React from 'react';
import {shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../components/form.js';

describe('Testing of our Form', () =>{
  it('Should render the application', ()=> {
    let app = shallow(<Form />);
    expect(app.find('button').exists()).toBe(true);
  });

  it('Should update the state with the methods', ()=>{
    let app = mount(<Form />);
    let methodButton = app.find('#get');
    expect(methodButton.exists()).toBeTruthy();
    expect(app.state('method')).toBe('');
    methodButton.simulate('click');
    expect(app.state('method')).toBe('GET');
  });

  it('Should update the state with the URL', ()=>{
    let newUrl = 'This is a test';
    let app = mount(<Form />);
    let urlButton = app.find('#url');
    expect(urlButton.exists()).toBeTruthy();
    expect(app.state('url')).toBe('');
    urlButton.simulate('change', {target: { value: newUrl}});
    expect(app.state('url')).toBe(newUrl);
  });
});

