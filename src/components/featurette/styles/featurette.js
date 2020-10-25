import styled from "styled-components";

export const Container = styled.div`
  //   display: flex;
  //   background-color: white;
  //   padding-top: 500px;
  //   justify-content: space-between;
  //   flex-direction: column
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: row-reverse;
  }
`;
export const Inner = styled.div``;
export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
  text-align: center;
`;
export const ButtonLink = styled.a`
  color: pink;
  width: 200px;
`;
