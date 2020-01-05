import React, { useState } from "react";
import "./Button.scss";

export function Button(props) {
  const [state, setState] = useState(true);
  return (
    <button className="btn" onClick={() => setState(!state)} {...props}>
      {state ? props.children : "Goodbye"}
    </button>
  );
}
