import React from 'react';

import '../css/form.scss';

const initialState = {
  method: '',
  url: '',
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    event.preventDefault();
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id='form'>
        <form id='url-form' >
          <section id='inputs'>
            <label>URL:</label>
            <input type="text" id="url" value={this.state.url} onChange={this.handleChange}></input>
            <button className="action" type="submit" onSubmit={this.handleSubmit}>GO</button>
          </section>
          <ul>
            <li id="get" onClick={() => this.setState({method: 'GET'})}> GET</li>
            <li onClick={() => this.setState({method: 'POST'})}> POST</li>
            <li onClick={() => this.setState({method: 'PUT'})}> PUT</li>
            <li onClick={() => this.setState({method: 'DELETE'})}> DELETE</li>
          </ul>
        </form>
        <section>
          <p>{this.state.method} {this.state.url}</p>
        </section>
      </div>
    );
  }
}

export default Form;