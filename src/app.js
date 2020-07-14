// Instantiate React
import React from 'react';

// Import React components
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';

// Import SCSS styling
import './css/app.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      words: 'Default',
      url: 'URL',
      method: '',
    };
  }

  handleMethod(method){
    this.setState({method});
  }

  handleSubmit(url){
    this.setState({url});
  }


  render(){
    
    return (
      <div>
        <Header/>

        <Form 
          url = {this.state.url}
          handleMethod={this.handleMethod}
          handleSubmit={this.handleSubmit}
          method={this.state.method}
        />

        <Footer />
      </div>
    );
  }
}

export default App;