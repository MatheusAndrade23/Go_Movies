import { HalfMovieCardContainer, MovieTitle } from './styles';

import { IoCartSharp } from 'react-icons/io5';
import { IoMdTrash } from 'react-icons/io';

import { useContext } from 'react';
import { OrdersContext } from '../../providers/OrdersProvider';

interface HalfMovieCardProps {
  model?: string;
  size?: string;
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export const HalfMovieCard = ({
  model = 'standard',
  size = 'normal',
  title,
  id,
  poster_path,
  vote_average,
}: HalfMovieCardProps) => {
  const { removeMovieFromFavorites, removeMovieFromCart, addMovieToCart } =
    useContext(OrdersContext);

  const srcImg = `https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`;

  const handleRemoveMovieFromFavorites = () => {
    removeMovieFromFavorites(id);
  };

  const handleRemoveMovieFromCart = () => {
    removeMovieFromCart(id);
  };

  const handleAddMovieToCart = () => {
    addMovieToCart({
      title,
      id,
      vote_average,
      poster_path,
    });
  };

  return (
    <HalfMovieCardContainer model={model} size={size}>
      <img src={srcImg} alt={title} />
      <MovieTitle>{title}</MovieTitle>
      {model === 'standard' && <span>1</span>}
      <span>R$ 9,99</span>
      {model === 'secondary' && (
        <button
          action-title="Adicionar ao Carrinho"
          onClick={handleAddMovieToCart}
        >
          <IoCartSharp />
        </button>
      )}
      {model === 'secondary' ? (
        <button
          action-title="Remover dos Favoritos"
          onClick={handleRemoveMovieFromFavorites}
        >
          <IoMdTrash />
        </button>
      ) : (
        <button
          action-title="Remover do Carrinho"
          onClick={handleRemoveMovieFromCart}
        >
          <IoMdTrash />
        </button>
      )}
    </HalfMovieCardContainer>
  );
};
