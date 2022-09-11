import styled, { css } from 'styled-components';

import { buttonSubtitle } from '../HalfMovieCard/styles';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  margin: 0 auto;
  position: relative;

  display: flex;
  align-items: center;
  flex-flow: row wrap;
  gap: 1rem 2rem;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors['1-color']};
  color: ${({ theme }) => theme.colors['base-light-color']};
  border-bottom: 2px solid ${({ theme }) => theme.colors['base-hover']};

  & a {
    color: ${({ theme }) => theme.colors['base-light-color']};
  }

  & h1 {
    width: 15rem;
    text-align: center;
  }

  & > div:first-child {
    display: flex;
    flex-direction: row;
    gap: 5rem;
  }

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  min-width: 15rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['base-light-color']};
  border: 2px solid ${({ theme }) => theme.colors['base-hover']};
  border-radius: 5px;
  padding: 0.8rem 1.2rem;

  & input {
    border: none;
    min-width: 10rem;
    max-width: calc(100% - 2rem);
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    color: ${({ theme }) => theme.colors['base-text']};
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-hover']};
    }
  }

  & button {
    position: relative;

    ${buttonSubtitle()}

    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors['base-text']};
    width: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      font-size: 1.7rem;
    }
  }
`;

export const Menu = styled.nav`
  width: 15rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & svg {
    font-size: 2.5rem;
  }

  & button {
    height: 100%;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors['base-light-color']};

    ${buttonSubtitle()}

    & strong {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 0.5rem;
      left: 1.5rem;

      color: ${({ theme }) => theme.colors['base-text']};
      background-color: ${({ theme }) => theme.colors['2-color']};
      font-size: ${({ theme }) => theme.fonts.sizes.small2};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      text-align: center;
    }
  }
`;
