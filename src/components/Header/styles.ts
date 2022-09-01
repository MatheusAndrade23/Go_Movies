import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.5rem 3rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors['1-color']};
  color: ${({ theme }) => theme.colors['base-light-color']};
  border-bottom: 2px solid ${({ theme }) => theme.colors['base-hover']};

  & a {
    color: ${({ theme }) => theme.colors['base-light-color']};
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['base-light-color']};
  border: 2px solid ${({ theme }) => theme.colors['base-hover']};
  border-radius: 5px;
  padding: 0.8rem 1.2rem;

  & input {
    border: none;
    width: calc(100% - 2rem);
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    color: ${({ theme }) => theme.colors['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-hover']};
    }
  }

  & button {
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

export const Menu = styled.div`
  width: 12rem;
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

    & strong {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: -7px;
      right: -11px;

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