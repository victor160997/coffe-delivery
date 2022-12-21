import styled from "styled-components";
import "../../public/pngs/background.png";

export const MainContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3rem 0 3rem 0;
  /* background-image: url("../../public/pngs/background.png");
  background-size: cover;
  background-repeat: no-repeat; */
  img {
    width: 476px;
    height: 360px;
  }
`;

export const TitleArea = styled.div`
  h1 {
    font-family: "Baloo 2", cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: #272221;
    margin-bottom: 16px;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #403937;
    font-stretch: 100;
  }
  margin-bottom: 66px;
`;

export const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  div {
    min-width: 292px;
    span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
    }
  }
`;

export const CoffesContainer = styled.section`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 32px;
`;
