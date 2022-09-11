import regex from '../regex';

export const getInputsValidation = (
  cep: string,
  cpf: string,
  address: string,
  name: string,
  email: string,
  phoneNumber: string,
) => {
  const { cepRegex, cpfRegex } = regex;

  const isNameValid = name.length > 0;
  const isAddressValid = address.length > 0;
  const isCepValid = cepRegex.test(cep);
  const isCpfValid = cpfRegex.test(cpf);
  const isEmailValid =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(
      email,
    );
  const isPhoneNumberValid =
    /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm.test(
      phoneNumber,
    );

  return {
    isNameValid,
    isAddressValid,
    isCepValid,
    isCpfValid,
    isEmailValid,
    isPhoneNumberValid,
  };
};
