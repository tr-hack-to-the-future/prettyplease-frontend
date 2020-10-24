import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Pane = styled.div`
  width: 50%;
`;
export const Item = styled.div`
  display: flex;
  border-bottom: 8px dashed coral;
  padding: 50px 5%;
  color: damson;
  overflow: hidden;
`;

export const Container = styled.section`
  background-color: beige;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
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
  max-width: 50%;
  height: auto;
`;
