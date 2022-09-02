import { HeaderContainer, SearchContainer, Menu } from './styles';

import { BsSearch } from 'react-icons/bs';
import { IoIosCart } from 'react-icons/io';
import { ImHistory } from 'react-icons/im';
import { AiFillHeart } from 'react-icons/ai';

export const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <h1>GoMovies</h1>
      </a>
      <SearchContainer>
        <input type="text" placeholder="Pesquisa" />
        <button title="Pesquisar">
          <BsSearch />
        </button>
      </SearchContainer>
      <Menu>
        <button title="Acessar os Favoritos">
          <AiFillHeart />
        </button>
        <button title="Acessar o Carrinho">
          <IoIosCart />
          <strong>3</strong>
        </button>
        <a href="/history" title="Acessar o histórico">
          <ImHistory />
        </a>
      </Menu>
    </HeaderContainer>
  );
};
