// var React = require('react');
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (<div>
      <button onClick={()=>{this.setState({name:'Velopert'});}}>click me</button>
      <h1>Hello!!!sdasd!! {this.state.name}</h1>
    </div>);
  }
}

export default App;
// module.export = App;
