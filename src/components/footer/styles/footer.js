import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  padding: 70px 20px;
  margin: auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 1px;
`;

export const Link = styled.a``;

export const Title = styled.p``;

export const Text = styled.p``;

export const Break = styled.div``;
