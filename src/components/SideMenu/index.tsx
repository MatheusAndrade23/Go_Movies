import {
  SideMenuContainer,
  MenuTitle,
  CardsContainer,
  CompleteOrderButton,
  CartInfo,
  ListEmpty,
} from './styles';

import { HalfMovieCard } from '../HalfMovieCard';
import { MovieProps } from '../../pages/Home';

import { useContext } from 'react';
import { OrdersContext } from '../../providers/OrdersProvider';

interface SideMenuProps {
  show: boolean;
  type: string;
}

export const SideMenu = ({ show, type }: SideMenuProps) => {
  const { emptyFavoritesList, favorites, cart, totalPrice, emptyCart } =
    useContext(OrdersContext);

  const sideMenuConfig =
    type === 'cart' ? cartSideMenuConfig : favoritesSideMenuConfig;

  const { title, movieCardModel, cartInfo } = sideMenuConfig;

  const handleEmptyFavoritesList = () => {
    emptyFavoritesList();
  };

  const handleEmptyCart = () => {
    emptyCart();
  };

  return (
    <SideMenuContainer show={show}>
      <div>
        <MenuTitle>
          <h3>{title}</h3>
          {type === 'cart' ? (
            <button action-title="Esvaziar Carrinho" onClick={handleEmptyCart}>
              Esvaziar
            </button>
          ) : (
            <button
              action-title="Esvaziar Favoritos"
              onClick={handleEmptyFavoritesList}
            >
              Esvaziar
            </button>
          )}
        </MenuTitle>

        {type === 'cart' &&
          (cart.length === 0 ? (
            <ListEmpty>
              <h3>Carrinho Vazio</h3>
            </ListEmpty>
          ) : (
            <CardsContainer>
              {cart.map((movie: MovieProps) => (
                <HalfMovieCard
                  key={movie.id}
                  model={movieCardModel}
                  size="small"
                  {...movie}
                />
              ))}
            </CardsContainer>
          ))}

        {type === 'favorites' &&
          (favorites.length === 0 ? (
            <ListEmpty>
              <h3>Lista de Favoritos Vazia</h3>
            </ListEmpty>
          ) : (
            <CardsContainer>
              {favorites.map((movie: MovieProps) => (
                <HalfMovieCard
                  key={movie.id}
                  model={movieCardModel}
                  size="small"
                  {...movie}
                />
              ))}
            </CardsContainer>
          ))}
      </div>
      {cartInfo && (
        <div>
          <CartInfo>
            <p>Total:</p>
            <strong>{`R$ ${totalPrice.toString().replace('.', ',')}`}</strong>
          </CartInfo>
          <CompleteOrderButton href="/current-order">
            Finalizar Compra
          </CompleteOrderButton>
        </div>
      )}
    </SideMenuContainer>
  );
};

const favoritesSideMenuConfig = {
  title: 'Meus Favoritos',
  movieCardModel: 'secondary',
  cartInfo: false,
};

const cartSideMenuConfig = {
  title: 'Meu Carrinho',
  cartInfo: true,
  movieCardModel: 'standard',
};
