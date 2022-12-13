import React from "react";
import { Header } from "../Header";
import * as Styled from "./index.styles";

interface OwnProps {
  children: JSX.Element;
}

export const BasePage: React.FunctionComponent<OwnProps> = ({
  children,
}: OwnProps) => {
  return (
    <>
      <Header />
      <Styled.BodyPage>
        <Styled.Subcontainer>{children}</Styled.Subcontainer>
      </Styled.BodyPage>
    </>
  );
};
