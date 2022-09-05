import styled, { css } from 'styled-components';

export const OrderCompletedCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  margin-top: -3rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  align-self: center;
  background-color: ${({ theme }) => theme.colors['base-light-color']};
  width: 100%;
  max-width: 40rem;
  padding: 4rem 3rem;

  border: 2px solid ${({ theme }) => theme.colors['base-hover']};
  border-radius: 5px;

  & h2 {
    font-family: ${({ theme }) => theme.fonts.family.primary};
    text-align: center;
    font-weight: normal;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  & p {
    color: ${({ theme }) => theme.colors['base-text']};
  }

  & button {
    width: 90%;
    padding: 1.5rem;
    border: none;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fonts.sizes.small4};
    color: ${({ theme }) => theme.colors['base-light-color']};
    background-color: ${({ theme }) => theme.colors['3-color']};
  }
`;
