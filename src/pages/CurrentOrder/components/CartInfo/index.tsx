import { CartInfoContainer, MoviesContainer, CartInfoHeader } from './styles';

import { HalfMovieCard } from '../../../../components/HalfMovieCard';

export const CartInfo = () => {
  return (
    <CartInfoContainer>
      <CartInfoHeader>
        <span>Imagem</span>
        <span>Nome</span>
        <span>Qtd</span>
        <span>Preço</span>
      </CartInfoHeader>
      <MoviesContainer>
        <HalfMovieCard />
        <HalfMovieCard />
      </MoviesContainer>
      <div>
        <span>Total:</span>
        <strong>R$ 80,00</strong>
      </div>
      <button>Finalizar</button>
    </CartInfoContainer>
  );
};
