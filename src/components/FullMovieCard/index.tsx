import {
  FullMovieCardContainer,
  ImageContainer,
  MovieInfoContainer,
  FavoriteButton,
  MoviePoster,
} from './styles';

import { useContext } from 'react';
import { OrdersContext } from '../../providers/OrdersProvider';

import { MovieProps } from '../../pages/Home';

import { AiFillHeart, AiOutlineHeart, AiFillStar } from 'react-icons/ai';

export const FullMovieCard = ({
  title,
  id,
  vote_average,
  poster_path,
}: MovieProps) => {
  const {
    addMovieToFavorites,
    removeMovieFromFavorites,
    favoritesId,
    addMovieToCart,
  } = useContext(OrdersContext);

  const isFavorite = favoritesId.includes(id);

  const handleManageFavorites = () => {
    if (isFavorite) {
      removeMovieFromFavorites(id);
    } else {
      addMovieToFavorites({
        title,
        id,
        vote_average,
        poster_path,
      });
    }
  };

  const handleAddMovieToCart = () => {
    addMovieToCart({
      title,
      id,
      vote_average,
      poster_path,
    });
  };

  const srcImg = `https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`;

  return (
    <FullMovieCardContainer>
      <FavoriteButton
        title={isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        onClick={handleManageFavorites}
      >
        {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </FavoriteButton>
      <MoviePoster>
        <ImageContainer srcImgBackground={srcImg} />
        <img src={srcImg} />
      </MoviePoster>
      <MovieInfoContainer>
        <h4>{title}</h4>
        <div>
          <AiFillStar />
          <strong>{vote_average}</strong>
          <span>Gênero</span>
        </div>
        <p>R$ 9,99</p>
      </MovieInfoContainer>
      <button onClick={handleAddMovieToCart}>Adicionar</button>
    </FullMovieCardContainer>
  );
};
