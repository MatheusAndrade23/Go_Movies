import { HalfMovieCardContainer } from './styles';

import { IoCartSharp } from 'react-icons/io5';
import { IoMdTrash } from 'react-icons/io';

interface HalfMovieCardProps {
  model?: string;
  size?: string;
}

export const HalfMovieCard = ({
  model = 'standard',
  size = 'normal',
}: HalfMovieCardProps) => {
  return (
    <HalfMovieCardContainer model={model} size={size}>
      <img src="https://images.pexels.com/photos/13265635/pexels-photo-13265635.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <span>Nome do Filme</span>
      {model === 'standard' && <span>1</span>}
      <span>R$ 9,99</span>
      {model === 'secondary' && (
        <button action-title="Adicionar ao Carrinho">
          <IoCartSharp />
        </button>
      )}
      <button action-title="Remover do Carrinho">
        <IoMdTrash />
      </button>
    </HalfMovieCardContainer>
  );
};
