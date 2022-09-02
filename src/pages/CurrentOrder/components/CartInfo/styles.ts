import styled, { css } from 'styled-components';

export const CartInfoContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  padding: 2rem 4rem;
  margin-top: 6.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div:nth-child(3) {
    width: 100%;
    height: 5rem;
    margin-bottom: 4.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors['base-text']};

    & span {
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
    }

    & strong {
      font-size: ${({ theme }) => theme.fonts.sizes.big};
    }
  }

  & > button {
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 1.2rem;

    color: ${({ theme }) => theme.colors['base-light-color']};
    background-color: ${({ theme }) => theme.colors['3-color']};
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    font-weight: bold;
  }
`;

export const CartInfoHeader = styled.div`
  width: 81%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.fonts.sizes.small4};
  font-weight: bold;
  color: ${({ theme }) => theme.colors['base-text']};

  margin-bottom: 1rem;

  & span:nth-child(2) {
    margin-left: -0.5rem;
  }

  & span:nth-child(3) {
    margin-left: 5.5rem;
    margin-right: 0.5rem;
  }
`;

export const MoviesContainer = styled.div`
  width: 100%;
  min-height: 16.5rem;

  & div {
    padding: 0.7rem 0;
  }

  & div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors['base-label']};
  }
`;
