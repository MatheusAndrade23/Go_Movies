import { OrderFormContainer, OrderInfoForm } from './styles';

export const OrderForm = () => {
  return (
    <OrderFormContainer>
      <h2>Finalizar Compra</h2>
      <OrderInfoForm>
        <input type="name" placeholder="Nome Completo" />
        <div>
          <input type="text" placeholder="CPF" />
          <input type="text" placeholder="Celular" />
        </div>
        <input type="email" placeholder="E-mail" />
        <div>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Endereço" />
        </div>
        <div>
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="Estado" />
        </div>
      </OrderInfoForm>
    </OrderFormContainer>
  );
};
