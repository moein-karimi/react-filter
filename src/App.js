import React, { Component } from 'react';
import Items from './Items'; // load up the information of Items

class App extends Component {
  render() {
    const list = [];
    Items.map(item => list.push(item.name));

    return <div>{list}</div>;
  }
}

export default App;
