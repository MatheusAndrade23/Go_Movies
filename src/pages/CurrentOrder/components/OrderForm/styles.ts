import styled, { css } from 'styled-components';

export const OrderFormContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  padding: 2rem 4rem;

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
