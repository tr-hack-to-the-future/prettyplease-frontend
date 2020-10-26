import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding-top: 180px;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;
export const Pane = styled.div`
  width: 100%;
  padding: 20px;
  @media (max-width: 1000px) {
    width: 50%;
    padding: 45px;
    text-align: center;
  }
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;

export const Text = styled.p`
  font-size: 40px;
  color: #757575;
  margin-bottom: 40px;
  text-align: center;
`;
export const ButtonLink = styled.a`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
