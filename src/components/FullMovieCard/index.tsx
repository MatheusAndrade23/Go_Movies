import {
  FullMovieCardContainer,
  ImageContainer,
  MovieInfoContainer,
  FavoriteButton,
  MoviePoster,
} from './styles';

import { MovieProps } from '../../pages/Home';

import { AiFillHeart, AiOutlineHeart, AiFillStar } from 'react-icons/ai';

export const FullMovieCard = ({
  title,
  id,
  vote_average,
  poster_path,
}: MovieProps) => {
  const isFavorite = true;

  return (
    <FullMovieCardContainer>
      <FavoriteButton
        title={isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      >
        {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </FavoriteButton>
      <MoviePoster>
        <ImageContainer
          srcImgBackground={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
        />
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
        />
      </MoviePoster>
      <MovieInfoContainer>
        <h4>{title}</h4>
        <div>
          <AiFillStar />
          <strong>{vote_average}</strong>
          <span>Gênero</span>
        </div>
        <p>R$ 79,99</p>
      </MovieInfoContainer>
      <button>Adicionar</button>
    </FullMovieCardContainer>
  );
};
