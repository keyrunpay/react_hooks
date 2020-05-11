import React from "react";

function Count({ text, value }) {
  console.log("Rendered", text, value);

  return (
    <p>
      {text}
      {value}
    </p>
  );
}

export default React.memo(Count);
