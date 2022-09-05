import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';

import { MovieProps } from '../../pages/Home';

export interface OrderProps {
  cart: MovieProps[];
  totalPrice: number;
  date: string;
  id: string;
  address: string;
  CEP: string;
  name: string;
  email: string;
  phoneNumber: string;
  CPF: string;
  city: string;
  estate: string;
}

interface OrdersContextProps {
  favorites: MovieProps[];
  completedOrders: OrderProps[];
  currentOrder: object;
  favoritesId: number[];
  addToFavorites: (movie: MovieProps) => void;
  removeFromFavorites: (id: number) => void;
  emptyFavoritesList: () => void;
  addToCart: (movie: MovieProps) => void;
  removeFromCart: (id: number) => void;
  cart: MovieProps[];
  totalPrice: number;
  emptyCart: () => void;
  completeCurrentOrder: (data: OrderProps) => void;
}

interface OrdersContextProviderProps {
  children: ReactNode;
}

import { ordersReducer } from '../../reducers/orders';

export const OrdersContext = createContext({} as OrdersContextProps);

export const OrdersProvider = ({ children }: OrdersContextProviderProps) => {
  const [ordersState, dispatch] = useReducer(
    ordersReducer,
    {
      favorites: [],
      favoritesId: [],
      completedOrders: [],
      currentOrder: {
        cart: [],
        totalPrice: 0,
      },
    },
    () => {
      const storedStateAsJSON = localStorage.getItem('@go-movies/orders');

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        favorites: [],
        favoritesId: [],
        completedOrders: [],
        currentOrder: {
          cart: [],
          totalPrice: 0,
        },
      };
    },
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(ordersState);

    localStorage.setItem('@go-movies/orders', stateJSON);
  }, [ordersState]);

  const { favorites, completedOrders, currentOrder, favoritesId } = ordersState;
  const { cart, totalPrice } = currentOrder;

  const addToFavorites = (movie: MovieProps) => {
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {
        movie,
      },
    });
  };

  const removeFromFavorites = (id: number) => {
    dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: {
        id,
      },
    });
  };

  const emptyFavoritesList = () => {
    if (favorites.length === 0) {
      toast.warning('A lista de favoritos já está vazia!');
      return;
    }

    dispatch({
      type: 'EMPTY_FAVORITES_LIST',
    });
  };

  const addToCart = (movie: MovieProps) => {
    const { id } = movie;

    const findMovieInCart = cart.filter((movie: MovieProps) => movie.id === id);
    const movieIsAlreadyInTheCart = findMovieInCart.length > 0;

    if (movieIsAlreadyInTheCart) {
      toast.warning('O filme já está no carrinho');
      return;
    }

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        movie,
      },
    });
  };

  const removeFromCart = (id: number) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id,
      },
    });
  };

  const emptyCart = () => {
    if (cart.length === 0) {
      toast.warning('O carrinho já está vazio!');
      return;
    }

    dispatch({
      type: 'EMPTY_CART',
    });
  };

  const completeCurrentOrder = (data: OrderProps) => {
    dispatch({
      type: 'COMPLETE_CURRENT_ORDER',
      payload: {
        ...data,
      },
    });
  };

  return (
    <OrdersContext.Provider
      value={{
        favoritesId,
        favorites,
        completedOrders,
        currentOrder,
        addToFavorites,
        removeFromFavorites,
        emptyFavoritesList,
        addToCart,
        removeFromCart,
        cart,
        totalPrice,
        emptyCart,
        completeCurrentOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
