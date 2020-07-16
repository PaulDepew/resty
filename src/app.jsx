// Instantiate React
import React from 'react';

// Import React components
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Form from './components/form.jsx';
import Results from './components/results.jsx';

// Import SCSS styling
import './css/app.scss';

class App extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: [],
      headers:{},
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(count, results, headers){
    this.setState({count, results, headers});
  }

  render(){
    
    return (
      <div>
        <Header/>

        <Form handler={this.handleForm}/>

        <Results pokemon={this.state.results} header={this.state.headers}
        count={this.state.count} />

        <Footer />
      </div>
    );
  }
}

export default App;