import React from 'react';

import './css/form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id='form'>
        <form onSubmit={this.handleSubmit}>
          <label>URL:</label>
          <input type="text" id="url" name="url"onChange={this.handleChange}></input>
          <button className="action" type="submit" >GO</button>
          <ul>
            <li onClick={() => this.setState({method: 'GET'})}> GET</li>
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