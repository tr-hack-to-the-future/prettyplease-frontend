import styled from "styled-components";

export const Container = styled.section`
  display: flex;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.div`
  color: black;
  margin-bottom: 10px;
  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: black;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #f7f6f5;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  max-width: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 1.85rem;
  font-weight: normal;
  line-height: normal;
  background: #f7f6f5;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
