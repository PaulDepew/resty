import React from 'react';


class History extends React.Component{
  
  render() {
  
    // console.log(this.props.archive)
    return ( 
      <div>
        <h1>History</h1>
        <ul>
          {this.props.archive.map((element, index) => {
            let display = JSON.stringify(element, null, 4);
            return (
              <li key={index}>{display}</li>
            );
          },
          )}
        </ul>
      </div>
      
    );
    
  }
}


export default History;