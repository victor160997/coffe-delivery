import { useCallback, useState } from "react";
import { CartPurple } from "../../assets/svgs/CartPurple";
import { LessPurple } from "../../assets/svgs/LessPurple";
import { PlusPurple } from "../../assets/svgs/PlusPurple";
import { CoffeDTO } from "../../interfaces/coffes/CoffeDTO";
import * as Styled from "./index.styles";

interface OwnProps {
  coffe: CoffeDTO;
}

export function CoffeCard({ coffe }: OwnProps) {
  const [quantity, setQuantity] = useState<number>(0);

  const addCoffe = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const lessCoffe = useCallback(() => {
    if (quantity > 0) setQuantity(quantity - 1);
  }, [quantity]);

  return (
    <Styled.CardContainer>
      <Styled.CardSubContainer>
        <img src="/src/assets/pngs/coffeImg.png" alt="imagem de café" />
        <Styled.TagContainer>
          {coffe.tags.map((tag) => (
            <Styled.Tag key={tag.name}>
              <span>{tag.name}</span>
            </Styled.Tag>
          ))}
        </Styled.TagContainer>
        <Styled.CoffeName>{coffe.name}</Styled.CoffeName>
        <Styled.Description>{coffe.description}</Styled.Description>
        <Styled.PriceCart>
          <Styled.Price>
            <span>{`R$ ${(coffe.priceInCents / 100)
              .toFixed(2)
              .replace(".", ",")}`}</span>
            <Styled.CartContainer>
              <Styled.AddContainer>
                <div onClick={() => addCoffe()}>
                  <PlusPurple />
                </div>
                <p>{quantity}</p>
                <div onClick={() => lessCoffe()}>
                  <LessPurple />
                </div>
              </Styled.AddContainer>
              <CartPurple />
            </Styled.CartContainer>
          </Styled.Price>
        </Styled.PriceCart>
      </Styled.CardSubContainer>
    </Styled.CardContainer>
  );
}
