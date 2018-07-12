'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import style from './css/main.styl';

class App extends React.Component {
  render() {
    return (
      <div>Henlo, you stinky bird</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
