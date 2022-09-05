import styled, { css } from 'styled-components';

export const OrderFormContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & h2 {
    font-family: ${({ theme }) => theme.fonts.family.primary};
    color: ${({ theme }) => theme.colors['base-text']};
    font-weight: normal;
    margin-bottom: 2rem;
  }
`;

export const OrderInfoForm = styled.form`
  width: 100%;

  & input {
    width: 100%;
    margin: 1.5rem 0;
    padding: 1rem 1.5rem;
    border-radius: 5px;

    border: 2px solid ${({ theme }) => theme.colors['base-hover']};
    color: ${({ theme }) => theme.colors['base-text']};

    font-size: ${({ theme }) => theme.fonts.sizes.small4};

    &::placeholder {
      font-weight: bold;
      color: ${({ theme }) => theme.colors['base-hover']};
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors['3-color']};
    }
  }

  & div {
    width: 100%;

    & input:not(:first-child) {
      margin-left: 1.5rem;
    }

    & input:first-child {
      width: calc(50% - 1.5rem);
    }

    & input:nth-child(2) {
      width: 50%;
    }
  }

  & div:nth-child(4) {
    & input:first-child {
      width: calc(30% - 1.5rem);
    }

    & input:nth-child(2) {
      width: 70%;
    }
  }
`;

export const Validation = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  font-size: ${({ theme }) => theme.fonts.sizes.small3};
  justify-content: center;
  gap: 1rem 2rem;
  margin-top: 10px;
`;

interface FieldValidationProps {
  valid: boolean;
}

export const FieldValidation = styled.p<FieldValidationProps>`
  width: max-content;
  margin: 5px 0;
  display: flex;
  align-items: center;
  text-align: justify;
  font-weight: bold;

  color: ${({ theme, valid }) =>
    !valid ? theme.colors['red-color'] : theme.colors['green-color']};

  & svg {
    margin-left: 10px;
    font-size: 1.8rem;
  }
`;
