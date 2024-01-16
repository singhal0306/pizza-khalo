import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <React.Fragment>
    <Spinner animation="border" role="status" style={{height: '80px', width: '80px'}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      <p>Loading...</p>
    </React.Fragment>
  );
}

export default Loader;