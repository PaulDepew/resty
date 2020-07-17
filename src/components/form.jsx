import React from 'react';

import '../css/form.scss';

const initialState = {
  method: '',
  url: '',
  archive: [],
};

localStorage.setItem('archive', JSON.stringify(initialState.archive));

console.log(JSON.parse(localStorage.getItem('archive')));

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleUrl = this.handleUrl.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleUrl(event) {
    event.preventDefault();
    this.setState({url: event.target.value});
  }

  handleMethod(event, value) {
    event.preventDefault();
    this.setState({method: value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    let url = this.state.url;
    let method = this.state.method;

    let data = {};

    switch(method){
    case 'GET':
      data = await fetch(`${url}`);
      break;
    case 'POST':
      data = await fetch(`${url}`, {
        method: {method},
        body: JSON.stringify({
          name: 'POKEMON',
          url: 'THISISAURL',
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
      );
      break;
    case 'PUT':
      data = await fetch(`${url}`, {
        method: {method},
        body: JSON.stringify({
          name: 'POKEMON',
          url: 'THISISAURL',
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
      );
      break;
    case 'DELETE':
      data = await fetch(`${url}`, {
        method: {method},
      },
      );
      break;
    default:
      break;
    }
    
    let jsonData = await data.json();
    
    let header = data.headers;

    let count = jsonData.count;

    let pokemon = jsonData.results;

    let archiveElement = {
      method: this.state.method,
      url: this.state.url, 
      response: {
        header,
        count,
        data: pokemon,
      }, 
      time: new Date().toDateString(),
    };

    this.props.handler(count, pokemon, header);

    let archive = await JSON.parse(localStorage.getItem('archive'));
    archive.push(archiveElement);
    localStorage.setItem('archive', JSON.stringify(archive));
      
  }

  render() {
    return (
      <div id='form'>
        <form id='url-form' >
          <section id='inputs'>
            <label>URL:</label>
            <input type="text" id="url" value={this.state.url} onChange={this.handleUrl}></input>
            <button type="submit" className="action" onClick={(event)=> this.handleSubmit(event)}>GO</button>
          </section>
          <ul>
            <li id="get" onClick={(event)=> this.handleMethod(event, 'GET')}> GET</li>
            <li onClick={(event)=> this.handleMethod(event, 'POST')}> POST</li>
            <li onClick={(event)=> this.handleMethod(event, 'PUT')}> PUT</li>
            <li onClick={(event)=> this.handleMethod(event, 'DELETE')}> DELETE</li>
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