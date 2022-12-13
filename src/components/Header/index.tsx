import { CartSquareOrange } from "../../assets/svgs/CartSquareOrange";
import { LocationPurpleIcon } from "../../assets/svgs/LocationPurpleIcon";
import * as Styled from "./index.styles";

export function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.SubContainer>
        <img src="/pngs/logo.png" alt="logo coffe delivery" />
        <Styled.RightContentHeader>
          <Styled.Location>
            <LocationPurpleIcon />
            <span>Porto Alegre, RS</span>
          </Styled.Location>
          <CartSquareOrange />
        </Styled.RightContentHeader>
      </Styled.SubContainer>
    </Styled.HeaderContainer>
  );
}
