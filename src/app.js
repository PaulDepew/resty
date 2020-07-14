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
      words: "Default",
      url: "URL",
      method: ""
    };
  }

  handleMethod(method){
    this.setState({method});
  }


  render(){
    
    return (
      <div>
        <Header
          words = {this.state.words}
          handleState={this.handleStateWords} />

        <Form 
          urls = {this.state.url}
          handleMethod={this.handleMthod}
          handleSubmit={this.handleSubmit}
          method={this.state.method}
        />

        <Footer />
      </div>
    );
  }
}

export default App;