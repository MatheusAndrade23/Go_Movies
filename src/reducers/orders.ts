import { toast } from 'react-toastify';
import { MovieProps } from '../pages/Home';

export const ordersReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const { favorites, favoritesId } = state;
      const { movie } = action.payload;
      toast.success('Filme adicionado aos favoritos!');
      return {
        ...state,
        favoritesId: [...favoritesId, movie.id],
        favorites: [...favorites, movie],
      };
    }

    case 'REMOVE_FROM_FAVORITES': {
      const { favorites, favoritesId } = state;
      const { id } = action.payload;

      const newFavoritesId = favoritesId.filter(
        (favoriteId: number) => favoriteId !== id,
      );

      const newFavorites = favorites.filter(
        (favorite: MovieProps) => favorite.id !== id,
      );
      toast.success('Filme removido dos favoritos!');
      return {
        ...state,
        favoritesId: newFavoritesId,
        favorites: newFavorites,
      };
    }

    case 'EMPTY_FAVORITES_LIST': {
      toast.success('Lista de favoritos esvaziada!');
      return {
        ...state,
        favorites: [],
        favoritesId: [],
      };
    }

    case 'ADD_TO_CART': {
      const { currentOrder } = state;
      const { cart } = currentOrder;
      const { movie } = action.payload;

      const newCart = [...cart, movie];
      toast.success('Filme adicionado ao carrinho!');
      return {
        ...state,
        currentOrder: {
          cart: newCart,
          totalPrice: newCart.length * 9.99,
        },
      };
    }

    case 'REMOVE_FROM_CART': {
      const { currentOrder } = state;
      const { cart } = currentOrder;
      const { id } = action.payload;

      const newCart = cart.filter((movie: MovieProps) => movie.id !== id);
      toast.success('Filme removido do carrinho!');
      return {
        ...state,
        currentOrder: {
          cart: newCart,
          totalPrice: newCart.length * 9.99,
        },
      };
    }

    case 'EMPTY_CART': {
      toast.success('Carrinho esvaziado!');
      return {
        ...state,
        currentOrder: {
          cart: [],
          totalPrice: 0,
        },
      };
    }

    case 'COMPLETE_CURRENT_ORDER': {
      const { completedOrders } = state;
      const { payload } = action;
      toast.success('Compra finalizada!');
      return {
        completedOrders: [...completedOrders, { ...payload }],
        currentOrder: {
          cart: [],
          totalPrice: 0,
        },
      };
    }

    default:
      return state;
  }
};
