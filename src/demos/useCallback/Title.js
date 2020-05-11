import React from "react";

function Title({ text }) {
  console.log("Rendered Title", text);
  return <h1>{text}</h1>;
}

function verify(prevProps, newProps) {
  if (
    prevProps.thisObj.name === newProps.thisObj.name &&
    prevProps.thisObj.ch === newProps.thisObj.ch
  ) {
    return true;
  }

  return false;
}

export default React.memo(Title, verify);
