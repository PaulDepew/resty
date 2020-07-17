// Instantiate React
import React from 'react';

// Import React components
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Form from './components/form.jsx';
import Results from './components/results.jsx';
import History from './components/history.jsx';

// Import SCSS styling
import './css/app.scss';

// Import React Router
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

class App extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: [],
      headers:{},
      archive: [],
    };
    this.handleForm = this.handleForm.bind(this);
    this.setHistory= this.setHistory.bind(this);
  }

  async setHistory(){
    let archiveStorage = await JSON.parse(localStorage.getItem('archive'));
    this.setState({archive: archiveStorage});
  }

  handleForm(count, results, headers){
    this.setHistory();
    this.setState({count, results, headers});
  }

  render(){
    
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <nav>
            <ul id="navbar">
              <li>
                <NavLink activeClassName='selected' exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName='selected' exact to="/history"> History</NavLink>
              </li>
            </ul>
           
          </nav>
          <Route exact path="/">
            <Form handler={this.handleForm}/>

            <Results pokemon={this.state.results} header={this.state.headers}
              count={this.state.count} />
          </Route>
          <Route exact path="/history">
            <History 
              archive={this.state.archive} 
            />
          </Route>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;