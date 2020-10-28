import React from "react";

const Emoji = props => (
  <span
    className="emoji"
    style={{
      paddingRight: "5px",
      border: "1px bold black"
    }}
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
export default Emoji;
