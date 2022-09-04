import { HeaderContainer, SearchContainer, Menu } from './styles';

import { useState } from 'react';

import { SideMenu } from '../SideMenu';

import { BsSearch } from 'react-icons/bs';
import { IoIosCart } from 'react-icons/io';
import { ImHistory } from 'react-icons/im';
import { AiFillHeart } from 'react-icons/ai';

export const Header = () => {
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [showFavoritesMenu, setShowFavoritesMenu] = useState(false);

  const handleChangeCartMenuVisibility = () => {
    setShowFavoritesMenu(false);
    setShowCartMenu((state) => !state);
  };

  const handleChangeFavoritesMenuVisibility = () => {
    setShowCartMenu(false);
    setShowFavoritesMenu((state) => !state);
  };

  return (
    <HeaderContainer>
      <a href="/">
        <h1>GoMovies</h1>
      </a>
      <SearchContainer>
        <input type="text" placeholder="Pesquisa" />
        <button action-title="Pesquisar">
          <BsSearch />
        </button>
      </SearchContainer>
      <Menu>
        <button
          action-title="Acessar os Favoritos"
          onClick={handleChangeFavoritesMenuVisibility}
        >
          <AiFillHeart />
        </button>
        <button
          action-title="Acessar o Carrinho"
          onClick={handleChangeCartMenuVisibility}
        >
          <IoIosCart />
          <strong>3</strong>
        </button>
        <button action-title="Acessar o Histórico">
          <ImHistory />
        </button>
      </Menu>
      <SideMenu show={showCartMenu} {...cartSideMenuConfig} />
      <SideMenu show={showFavoritesMenu} {...favoritesSideMenuConfig} />
    </HeaderContainer>
  );
};

const favoritesSideMenuConfig = {
  title: 'Meus Favoritos',
  movieCardModel: 'secondary',
};

const cartSideMenuConfig = {
  title: 'Meus Carrinho',
  cartInfo: true,
};
