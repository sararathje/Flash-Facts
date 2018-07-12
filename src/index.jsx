'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>Henlo, you stinky bird</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// var React = require('react');

// React.render('hello', document.getElementById('app'));
