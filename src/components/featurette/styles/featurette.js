import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  padding: 70px 20px;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 70px 20px 70px 30px;
  }
`;
export const Pane = styled.div``;
export const Text = styled.p``;
export const ButtonLink = styled.a``;
