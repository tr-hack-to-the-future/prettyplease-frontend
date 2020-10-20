import React, { useState } from "react";

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
