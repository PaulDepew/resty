import React from 'react';

import './css/form.scss';

class Form extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return (
      <div>
        <form id="input-form" >
          <label htmlFor="url-input">URL</label>
          <input id="url-input" type="text">Enter a URL please</input>
          <button type="submit" name="go">GO</button>
          <ul id="options">
            <li onClick={() => this.props.handleMethod('GET')}>GET</li>
            <li onClick={() => this.props.handleMethod('POST')}>POST</li>
            <li onClick={() => this.props.handleMethod('PUT')}>PUT</li>
            <li onClick={() => this.props.handleMethod('DELETE')}>DELETE</li>
          </ul>
        </form>
      </div>
    )(
      <div id="display">
        <h2>
          action with the URL
        </h2>
      </div>,
    );
  }
}

export default Form;