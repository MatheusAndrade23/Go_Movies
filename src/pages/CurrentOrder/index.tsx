import { CurrentOrderContainer } from './styles';

import { useContext } from 'react';
import { OrdersContext } from '../../providers/OrdersProvider';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { v4 as uuid } from 'uuid';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { OrderForm } from './components/OrderForm';
import { CartInfo } from './components/CartInfo';

const newCompleteOrderFormSchema = zod.object({
  CEP: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/),
  phoneNumber: zod
    .string()
    .regex(
      /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm,
    ),
  email: zod
    .string()
    .regex(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
    ),
  address: zod.string().min(1),
  name: zod.string().min(1),
  cpf: zod
    .string()
    .regex(
      /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
    ),
});

export type NewCompleteOrderData = zod.infer<typeof newCompleteOrderFormSchema>;

export const CurrentOrder = () => {
  const { completeCurrentOrder, cart, totalPrice } = useContext(OrdersContext);

  const newOrderForm = useForm<NewCompleteOrderData>({
    resolver: zodResolver(newCompleteOrderFormSchema),
    defaultValues: {
      CEP: '',
      phoneNumber: '',
      email: '',
      address: '',
      cpf: '',
      name: '',
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

    completeCurrentOrder(newOrderData);
    reset();
  };

  return (
    <CurrentOrderContainer>
      <FormProvider {...newOrderForm}>
        <OrderForm completeOrder={completeOrder} />
        <CartInfo />
      </FormProvider>
    </CurrentOrderContainer>
  );
};
