import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {time: new Date()}
  }


  render(){
  return (
    <div>
      <h1> Time : {this.state.time.toLocaleTimeString()}</h1>

    </div>
  );
}
}

export default App;
