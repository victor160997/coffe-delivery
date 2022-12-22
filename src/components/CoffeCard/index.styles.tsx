import styled from "styled-components";

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  background: #f3f2f2;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardSubContainer = styled.div`
  position: relative;
  top: -15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 20px 20px;
`;

export const TagContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0 16px 0;
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  width: 81px;
  height: 21px;
  background: #f1e9c9;
  border-radius: 100px;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    text-transform: uppercase;
    color: #c47f17;
  }
`;

export const CoffeName = styled.h3`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: #403937;
  margin-bottom: 8px;
`;

export const Description = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: #8d8686;
  margin-bottom: 33px;
`;

export const PriceCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 4px 0 4px;
`;

export const Price = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 1000;
    font-size: 26px;
    line-height: 130%;
    text-align: right;
    color: #574f4d;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  gap: 4px;
  width: 72px;
  height: 38px;
  background: #e6e5e5;
  border-radius: 6px;
  margin-right: 6px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    color: #272221;
  }
`;
