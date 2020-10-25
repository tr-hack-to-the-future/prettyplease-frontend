import React from "react";
import { Container, Inner, Pane, Text, ButtonLink } from "./styles/featurette";

export default function Featurette({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Featurette.Inner = function FeaturetteInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Featurette.Text = function FeaturetteText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Featurette.Pane = function FeaturettePane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Featurette.ButtonLink = function FeaturetteButtonLink({
  children,
  ...restProps
}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
