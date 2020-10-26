import React from "react";

const Emoji = props => (
  <span
    className="emoji"
    style={{ paddingRight: "5px" }}
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    paddingRight="40px"
  >
    {props.symbol}
  </span>
);
export default Emoji;
