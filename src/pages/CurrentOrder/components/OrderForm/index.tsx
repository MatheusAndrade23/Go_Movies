import {
  OrderFormContainer,
  OrderInfoForm,
  FieldValidation,
  Validation,
} from './styles';

import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { dbCEP } from '../../../../services/api';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { NewCompleteOrderData } from '../..';

interface OrderFormProps {
  completeOrder: (data: NewCompleteOrderData) => void;
}

export const OrderForm = ({ completeOrder }: OrderFormProps) => {
  const [cepInfo, setCepInfo] = useState({ estate: '', city: '' });
  const { register, handleSubmit, watch } = useFormContext();

  const { estate, city } = cepInfo;

  const cep = watch('CEP');
  const cpf = watch('CPF');
  const address = watch('address');
  const name = watch('name');
  const email = watch('email');
  const phoneNumber = watch('phoneNumber');

  const isCepValid = /^[0-9]{5}-[0-9]{3}$/.test(cep);
  const isCpfValid =
    /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/.test(
      cpf,
    );
  const isAddressValid = address.length > 0;
  const isNameValid = name.length > 0;
  const isPhoneNumberValid =
    /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm.test(
      phoneNumber,
    );
  const isEmailValid =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(
      email,
    );

  useEffect(() => {
    (async () => {
      if (isCepValid) {
        const resp = await dbCEP.get(`/${cep}/json`);

        const newCepInfo = { estate: resp.data.uf, city: resp.data.localidade };
        setCepInfo(newCepInfo);
      } else {
        setCepInfo({ estate: '', city: '' });
      }
    })();
  }, [cep]);

  const handleCompleteOrder = (data: any) => {
    const orderData = { ...data, ...cepInfo };
    completeOrder(orderData);
  };

  return (
    <OrderFormContainer>
      <h2>Finalizar Compra</h2>
      <OrderInfoForm
        onSubmit={handleSubmit(handleCompleteOrder)}
        id="orderForm"
      >
        <input type="name" placeholder="Nome Completo" {...register('name')} />
        <div>
          <InputMask
            mask="999.999.999-99"
            type="text"
            placeholder="CPF"
            {...register('CPF')}
          />
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            placeholder="Celular"
            {...register('phoneNumber')}
          />
        </div>
        <input type="email" placeholder="E-mail" {...register('email')} />
        <div>
          <InputMask
            mask="99999-999"
            type="text"
            placeholder="CEP"
            {...register('CEP')}
          />
          <input type="text" placeholder="Endereço" {...register('address')} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Cidade"
            disabled={true}
            value={city}
          />
          <input
            type="text"
            placeholder="Estado"
            disabled={true}
            value={estate}
          />
        </div>
      </OrderInfoForm>
      <Validation>
        <FieldValidation valid={isCpfValid}>
          CPF válido {FieldValidationIcon(isCpfValid)}
        </FieldValidation>
        <FieldValidation valid={isAddressValid}>
          Digitar Endereço {FieldValidationIcon(isAddressValid)}
        </FieldValidation>
        <FieldValidation valid={isNameValid}>
          Digitar Nome {FieldValidationIcon(isNameValid)}
        </FieldValidation>
        <FieldValidation valid={isPhoneNumberValid}>
          Número de Telefone válido {FieldValidationIcon(isPhoneNumberValid)}
        </FieldValidation>
        <FieldValidation valid={isCepValid}>
          CEP válido {FieldValidationIcon(isCepValid)}
        </FieldValidation>
        <FieldValidation valid={isEmailValid}>
          E-mail válido
          {FieldValidationIcon(isEmailValid)}
        </FieldValidation>
      </Validation>
    </OrderFormContainer>
  );
};

const FieldValidationIcon = (validation: boolean) => {
  if (validation) {
    return <AiOutlineCheck />;
  }
  return <AiOutlineClose />;
};
