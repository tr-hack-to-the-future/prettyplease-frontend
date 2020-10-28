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
    flex-direction: column-reverse;
  }
`;
export const Pane = styled.div`
  width: 50%;
  padding: 20px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 45px;
    text-align: center;
  }
`;
export const Item = styled.div`
  display: flex;
  padding: 50px 5%;
  color: black;
  overflow: hidden;
`;

export const Container = styled.section`
  padding-top: 138px;
  @media (max-width: 1000px) {
    margin-bottom: 100px;
  }
`;

export const Title = styled.h1`
  font-family: "Avenir", sans-serif;
  font-weight: bold;
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  text-align: justify;
  font-size: 1.85rem;
  line-height: 1;
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
  font-weight: 1.5rem;
  font-style: italic;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 100px 80px 100px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 45px;
    text-align: center;
    fon-size: 1px;
  }
`;
export const Text = styled.p`
  font-size: 1.8em;
  margin: 50px;
  line-height: 1.1;
  font-style: bold;
  text-align: justify;

  @media (max-width: 1000px) {
    font-size: 1.2em;
    margin: 0 10px 20px 10px;
  }
`;

export const ButtonLink = styled.a`
  color: white;
  background: crimson;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;

  border-radius: 50px;
  margin: 1rem;
  transition: all 0.1s;

  &:hover {
    color: white;
    text-decoration: none !important;
  }
  @media (max-width: 600px) {
    margin-left: 1px;
    padding-bottom: 15px;
  }
`;
