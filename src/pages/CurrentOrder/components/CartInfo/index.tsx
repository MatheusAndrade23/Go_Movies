import {
  CartInfoContainer,
  MoviesContainer,
  CartInfoHeader,
  EmptyCartContainer,
} from './styles';

import { HalfMovieCard } from '../../../../components/HalfMovieCard';

import { useContext } from 'react';
import { OrdersContext } from '../../../../providers/OrdersProvider';

export const CartInfo = () => {
  const { cart, totalPrice } = useContext(OrdersContext);

  const isButtonDisabled = cart.length === 0;

  return (
    <CartInfoContainer>
      <CartInfoHeader>
        <span>Imagem</span>
        <span>Nome</span>
        <span>Qtd</span>
        <span>Preço</span>
      </CartInfoHeader>
      {cart.length === 0 ? (
        <EmptyCartContainer>
          <h3>O carrinho está vazio!</h3>
        </EmptyCartContainer>
      ) : (
        <MoviesContainer>
          {cart.map((movie) => (
            <HalfMovieCard key={movie.id} {...movie} />
          ))}
        </MoviesContainer>
      )}
      <div>
        <span>Total:</span>
        <strong>{`R$ ${totalPrice.toString().replace('.', ',')}`}</strong>
      </div>
      <button
        type="submit"
        form="orderForm"
        disabled={isButtonDisabled}
        title={
          isButtonDisabled ? 'Adicione filmes ao carrinho!' : 'Finalizar pedido'
        }
      >
        Finalizar
      </button>
    </CartInfoContainer>
  );
};
