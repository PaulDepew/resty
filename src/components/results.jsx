import React from 'react';

import '../css/results.scss';


const List = (props) => {
  let header = JSON.stringify(props.header, null,4);
  let results = JSON.stringify(props.pokemon, null,4);
  if(!Object.keys(props.pokemon).length){
    return(
      <p>Please submit the form</p>
    );
  } else {
    return (
      <div id="results">
        <pre>
          <code><h2>HEADER:</h2> {header}</code>
        </pre>
        <pre>
          <code><h2>COUNT:</h2> {props.count}</code>
        </pre>
        <pre>
          <code><h2>RESULTS:</h2> {results}</code>
        </pre>
      </div>
    );
  
  }
};


export default List;