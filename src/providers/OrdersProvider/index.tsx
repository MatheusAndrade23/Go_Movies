import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';

interface OrdersContextProps {}

export const OrdersContext = createContext({} as OrdersContextProps);

interface OrdersContextProviderProps {
  children: ReactNode;
}

export const OrdersProvider = ({ children }: OrdersContextProviderProps) => {
  const [ordersState, dispatch] = useReducer(
    (state: any, action: any) => {},
    {
      orders: [],
      currentOrder: {
        cart: [],
        totalPrice: 0,
        deliveryPrice: 0,
        productsPrice: 0,
      },
    },
    () => {
      // const storedStateAsJSON = localStorage.getItem('@go-movies/orders');

      // if (storedStateAsJSON) {
      //   return JSON.parse(storedStateAsJSON);
      // }

      return {
        orders: [],
        currentOrder: {
          cart: [],
          totalPrice: 0,
          deliveryPrice: 0,
          productsPrice: 0,
        },
      };
    },
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(ordersState);

    localStorage.setItem('@go-movies/orders', stateJSON);
  }, [ordersState]);

  return <OrdersContext.Provider value={{}}>{children}</OrdersContext.Provider>;
};
