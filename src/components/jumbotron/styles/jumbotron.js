import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Pane = styled.div`
  width: 50%;
  padding: 20px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;
export const Item = styled.div`
  display: flex;
  border-bottom: 8px dashed coral;
  padding: 50px 5%;
  color: black;
  overflow: hidden;
`;

export const Container = styled.section`
  background-color: white;
  padding-top: 180px;

  @media (max-width: 1000px) {
    margin-bottom: 100px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 0.9;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const FigCaption = styled.p`
  text-align: center;
  color: grey;
  font-weight: 2em;
  font-style: italic;
`;
