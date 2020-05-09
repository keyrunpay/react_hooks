import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  increament = () => [
    this.setState((prevState) => ({ count: prevState.count + 1 })),
  ];

  render() {
    return (
      <React.Fragment>
        <p>Count From Class: {this.state.count}</p>
        <button onClick={this.increament}>Increament</button>
      </React.Fragment>
    );
  }
}

function CounterHook() {
  const [state, setState] = React.useState({ count: 0 });
  const increament = () => [
    setState((prevState) => ({ count: prevState.count + 1 })),
  ];

  return (
    <React.Fragment>
      <p>Count From Hook: {state.count}</p>
      <button onClick={increament}>Increament</button>
    </React.Fragment>
  );
}

export { Counter, CounterHook };
