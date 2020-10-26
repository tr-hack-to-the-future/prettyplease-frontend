import React from "react";

const Emoji = props => (
  <span
    className="emoji"
    style={{
      paddingright: "10px"
    }}
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
export default Emoji;
