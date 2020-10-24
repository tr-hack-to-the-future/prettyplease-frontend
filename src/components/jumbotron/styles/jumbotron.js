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
  border-bottom: 1px dashed coral;
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
  font-family: "Avenir", sans-serif;
  font-size: 50px;
  line-height: 0.9;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  text-align: justify;
  font-size: 22px;
  line-height: 1.4;
  padding-bottom: 35px;
  padding-top: 25px;

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

export const ButtonLink = styled.a`
  color: white;
  width: 200px;
  font-size: 1.2em;
  padding: 10px;
  background-color: crimson;
  border-radius: 50px;
  text-align: center;
  margin-left: 73px;
  text-decoration: none !important;

  &:hover {
    color: grey;
    cursor: pointer;
  }
`;
