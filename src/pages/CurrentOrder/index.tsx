import { CurrentOrderContainer } from './styles';

import { OrderForm } from './components/OrderForm';
import { CartInfo } from './components/CartInfo';

export const CurrentOrder = () => {
  return (
    <CurrentOrderContainer>
      <OrderForm />
      <CartInfo />
    </CurrentOrderContainer>
  );
};
