import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 100 };
  }

  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count - 5 }));
  }

  render() {
    return (
      <div>
        <h1>Número: {this.state.count}</h1>
        <button onClick={this.handleDecrement}>Quitar -5</button>
      </div>
    );
  }
}

export default App;