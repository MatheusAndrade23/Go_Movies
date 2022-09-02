import { HalfMovieCardContainer } from './styles';

import { IoMdTrash } from 'react-icons/io';

export const HalfMovieCard = () => {
  return (
    <HalfMovieCardContainer>
      <img src="https://images.pexels.com/photos/13265635/pexels-photo-13265635.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <span>Nome do Filme</span>
      <span>1</span>
      <span>R$ 9,99</span>
      <button>
        <IoMdTrash />
      </button>
    </HalfMovieCardContainer>
  );
};
