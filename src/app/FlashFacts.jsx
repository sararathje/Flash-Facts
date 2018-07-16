import React from 'react';
import Option from './Option.jsx';

class App extends React.Component {
  // Sara: We can clean this up later, but for right now, this how it be.
	render() {
    return (
      <div id="flash-facts">
        <div id="options">
          <Option type="Math Facts"/>
          <Option type="Sight Words"/>
        </div>
      </div>
    );
  }
}

export default App;
