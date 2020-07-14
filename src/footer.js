import React from 'react';

import './css/footer.scss';

class Footer extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return (
      <p>
        &copy Paul Depew 2020
      </p>
    );
  }
}

export default Footer;