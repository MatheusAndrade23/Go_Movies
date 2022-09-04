import {
  SideMenuContainer,
  MenuTitle,
  CardsContainer,
  CompleteOrderButton,
  CartInfo,
} from './styles';

import { HalfMovieCard } from '../HalfMovieCard';

interface SideMenuProps {
  show: boolean;
  title: string;
  movieCardModel?: string;
  cartInfo?: boolean;
}

export const SideMenu = ({
  show,
  title,
  movieCardModel = 'standard',
  cartInfo = false,
}: SideMenuProps) => {
  return (
    <SideMenuContainer show={show}>
      <div>
        <MenuTitle>
          <h3>{title}</h3>
          {movieCardModel === 'standard' ? (
            <button action-title="Esvaziar Carrinho">Esvaziar</button>
          ) : (
            <button action-title="Esvaziar Favoritos">Esvaziar</button>
          )}
        </MenuTitle>
        <CardsContainer>
          <HalfMovieCard model={movieCardModel} size="small" />
        </CardsContainer>
      </div>
      {cartInfo && (
        <div>
          <CartInfo>
            <p>Total:</p>
            <strong>R$ 19,00</strong>
          </CartInfo>
          <CompleteOrderButton href="/current-order">
            Finalizar Compra
          </CompleteOrderButton>
        </div>
      )}
    </SideMenuContainer>
  );
};
