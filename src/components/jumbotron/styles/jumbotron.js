import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div``;

export const Container = styled.section``;

export const Title = styled.h1``;

export const Subtitle = styled.h2`
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
