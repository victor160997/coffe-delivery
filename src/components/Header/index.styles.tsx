import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 84.95px;
    height: 40px;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
`;

export const RightContentHeader = styled.div`
  display: flex;
  gap: 12px;
`;

export const Location = styled.div`
  width: 143px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  background: #ebe5f9;
  border-radius: 6px;
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #4b2995;
  }
`;
