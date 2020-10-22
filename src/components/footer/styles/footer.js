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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 1px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575 !important;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none !important;
  display: flex;

  &:hover {
    color: black !important;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
  padding-left: 82px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
  text-align: center;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
