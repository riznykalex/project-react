import React, { Component } from 'react';
import Component1 from './functional/component1';
import Container1 from './containers/container1';

class App extends Component  {


  render() {

    const var1 = {
      key1: 'Some Data'
    }
    return (
      <div className="App">

          React
          <Container1 nickname="Mo" />
          <Component1 name="moe" age= {25} />

      </div>
    );
  }


  }

export default App;
