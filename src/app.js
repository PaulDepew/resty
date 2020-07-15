// Instantiate React
import React from 'react';

// Import React components
import Header from './components/header';
import Footer from './components/footer.js';
import Form from './components/form.js';

// Import SCSS styling
import './css/app.scss';

class App extends React.Component { 

  render(){
    
    return (
      <div>
        <Header/>

        <Form />

        <Footer />
      </div>
    );
  }
}

export default App;