import React, { useEffect } from "react";

function FuncCounter({ visible }) {
  const [state, setState] = React.useState(0);

  useEffect(() => {
    console.log("Visible changed to: ", visible);
    //changes in props visible
  }, [visible]);

  useEffect(() => {
    //componentDidMount
    console.log("CounterFunc Mounted");

    return () => {
      //componetWillUmount
      console.log("I am gonna be destroyed, funcCounter");
    };
  }, []);

  React.useEffect(() => {
    //componentDidUpdate
    console.log("CounterFunc Update", state);
  });

  const increament = () => {
    setState((pS) => pS + 1);
  };

  return (
    <React.Fragment>
      <p>Count From Function: {state}</p>
      <button onClick={increament}>Increament</button>
    </React.Fragment>
  );
}

class CounterClass extends React.Component {
  state = {
    count: 0,
  };

  increament = () => [
    this.setState((prevState) => ({ count: prevState.count + 1 })),
  ];

  componentDidMount() {
    console.log("CounterClass Mounted");
  }

  componentDidUpdate() {
    console.log("CounterClass Updated", this.state.count);
  }

  componentWillUnmount() {
    console.log("I am gonna be destroyed, classCounter");
  }

  render() {
    return (
      <React.Fragment>
        <p>Count From Class: {this.state.count}</p>
        <button onClick={this.increament}>Increament</button>
      </React.Fragment>
    );
  }
}

export { CounterClass, FuncCounter };
