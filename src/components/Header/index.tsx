import { HeaderContainer, SearchContainer, Menu } from './styles';

import { useState, useContext } from 'react';
import { OrdersContext } from '../../providers/OrdersProvider';

import { SideMenu } from '../SideMenu';

import { BsSearch } from 'react-icons/bs';
import { IoIosCart } from 'react-icons/io';
import { ImHistory } from 'react-icons/im';
import { AiFillHeart } from 'react-icons/ai';

export const Header = () => {
  const { favorites, cart } = useContext(OrdersContext);

  const [search, setSearch] = useState('');
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

  const getSearchValue = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <HeaderContainer>
      <a href="/">
        <h1>GoMovies</h1>
      </a>
      <SearchContainer>
        <input type="text" placeholder="Pesquisa" onChange={getSearchValue} />
        <button
          action-title="Pesquisar"
          onClick={() => (window.location.href = `/search/${search}`)}
        >
          <BsSearch />
        </button>
      </SearchContainer>
      <Menu>
        <button
          action-title="Acessar os Favoritos"
          onClick={handleChangeFavoritesMenuVisibility}
        >
          <AiFillHeart />
          {favorites.length > 0 && <strong>{favorites.length}</strong>}
        </button>
        <button
          action-title="Acessar o Carrinho"
          onClick={handleChangeCartMenuVisibility}
        >
          <IoIosCart />
          {cart.length > 0 && <strong>{cart.length}</strong>}
        </button>
        <button
          action-title="Acessar o Histórico"
          onClick={() => (window.location.href = `/history`)}
        >
          <ImHistory />
        </button>
      </Menu>
      <SideMenu show={showCartMenu} type="cart" />
      <SideMenu show={showFavoritesMenu} type="favorites" />
    </HeaderContainer>
  );
};
