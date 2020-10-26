import React from "react";
import {
  Container,
  Item,
  Inner,
  Title,
  SubTitle,
  FigCaption,
  Image,
  ButtonLink,
  Text,
  Section,
  Pane
} from "./styles/jumbotron";

export default function Jumbotron({ children, ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Item = function JumbotronItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
Jumbotron.Inner = function JumbotronInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.FigCaption = function JumbotronFigCaption({
  children,
  ...restProps
}) {
  return <FigCaption {...restProps}>{children}</FigCaption>;
};

Jumbotron.Section = function JumbotronSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};
Jumbotron.Text = function JumbotronText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Jumbotron.ButtonLink = function JumbotronButtonLink({
  children,
  ...restProps
}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
