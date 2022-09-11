import { CurrentOrderContainer } from './styles';

import { useContext, useState } from 'react';
import { OrdersContext } from '../../providers/OrdersProvider';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { v4 as uuid } from 'uuid';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { OrderForm } from './components/OrderForm';
import { CartInfo } from './components/CartInfo';
import { OrderCompletedCard } from './components/OrderCompletedCard';

import regex from '../../regex';

const { cepRegex, cpfRegex, emailRegex, phoneNumberRegex } = regex;

const newCompleteOrderFormSchema = zod.object({
  CEP: zod.string().regex(cepRegex),
  phoneNumber: zod.string().regex(phoneNumberRegex),
  email: zod.string().regex(emailRegex),
  address: zod.string().min(1),
  name: zod.string().min(1),
  CPF: zod.string().regex(cpfRegex),
  city: zod.string(),
  estate: zod.string(),
});

export type NewCompleteOrderData = zod.infer<typeof newCompleteOrderFormSchema>;

export const CurrentOrder = () => {
  const [showCompletedOrderCard, setShowCompletedOrderCard] = useState({
    active: false,
    name: '',
  });
  const { completeCurrentOrder, cart, totalPrice } = useContext(OrdersContext);

  const newOrderForm = useForm<NewCompleteOrderData>({
    resolver: zodResolver(newCompleteOrderFormSchema),
    defaultValues: {
      CEP: '',
      phoneNumber: '',
      email: '',
      address: '',
      CPF: '',
      name: '',
      city: '',
      estate: '',
    },
  });

  const { reset } = newOrderForm;

  const completeOrder = (data: NewCompleteOrderData) => {
    const newOrderData = {
      ...data,
      cart,
      totalPrice,
      date: format(new Date(), 'dd/MM/yyyy', { locale: ptBR }),
      id: uuid(),
    };

    setShowCompletedOrderCard({ active: true, name: data.name });
    completeCurrentOrder(newOrderData);
    reset();
  };

  const closeCompletedOrderCard = () => {
    setShowCompletedOrderCard({ active: false, name: '' });
  };

  return (
    <CurrentOrderContainer>
      <FormProvider {...newOrderForm}>
        <OrderForm completeOrder={completeOrder} />
        <CartInfo />
        <OrderCompletedCard
          show={showCompletedOrderCard.active}
          name={showCompletedOrderCard.name}
          close={closeCompletedOrderCard}
        />
      </FormProvider>
    </CurrentOrderContainer>
  );
};
