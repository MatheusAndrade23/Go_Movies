import {
  FullMovieCardContainer,
  ImageContainer,
  MovieInfoContainer,
} from './styles';

import { AiFillHeart, AiOutlineHeart, AiFillStar } from 'react-icons/ai';

export const FullMovieCard = () => {
  const isFavorite = true;

  return (
    <FullMovieCardContainer>
      <ImageContainer>
        <img src="https://images.pexels.com/photos/13265635/pexels-photo-13265635.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      </ImageContainer>
      <MovieInfoContainer>
        <h4>Nome do Filme</h4>
        <div>
          <AiFillStar />
          <strong>7</strong>
          <span>Gênero</span>
        </div>
        <p>R$ 79,99</p>
      </MovieInfoContainer>
      <button>Adicionar</button>
    </FullMovieCardContainer>
  );
};
