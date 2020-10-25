import React from "react";
import { Container, Pane, Text, ButtonLink } from "./styles/featurette";

export default function Featurette({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Featurette.Pane = function FeaturettePane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Featurette.Text = function FeaturetteText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Featurette.ButtonLink = function FeaturetteButtonLink({
  children,
  ...restProps
}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
