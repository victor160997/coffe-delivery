import { CircleBoxBlaxk } from "../assets/svgs/CircleBoxBlaxk";
import { CircleCoffePurple } from "../assets/svgs/CircleCoffePurple";
import { CircleOrangeCart } from "../assets/svgs/CircleOrangeCart";
import { CircleOrangeTimer } from "../assets/svgs/CircleOrangeTimer";
import { BasePage } from "../components/BasePage.tsx";
import * as Styled from "./home.styles";

export function Home() {
  return (
    <BasePage>
      <>
        <Styled.MainContainer>
          <div>
            <Styled.TitleArea>
              <h1>
                Encontre o café perfeito <br />
                para qualquer hora do dia
              </h1>
              <span>
                Com o coffe delivery você recebe seu café onde estiver, a <br />
                qualquer hora
              </span>
            </Styled.TitleArea>
            <Styled.Items>
              <div>
                <span>
                  <CircleOrangeCart />
                  Compra simples e segura
                </span>
              </div>
              <div>
                <span>
                  <CircleOrangeTimer />
                  Entrega rápida e rastreada
                </span>
              </div>
              <div>
                <span>
                  <CircleBoxBlaxk />
                  Embalagem mantém o café intacto
                </span>
              </div>
              <div>
                <span>
                  <CircleCoffePurple />O café chega fresquinho até você
                </span>
              </div>
            </Styled.Items>
          </div>
          <img src="/pngs/capa.png" alt="logo de café na capa" />
        </Styled.MainContainer>
      </>
    </BasePage>
  );
}
