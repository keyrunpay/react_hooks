import React from "react";

function Button({ forWhat, onClick, n }) {
  console.log("Rendered Button", forWhat);
  return <button onClick={() => onClick(n)}>Increase {forWhat}</button>;
}

export default React.memo(Button);
