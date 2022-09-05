import styled, { css } from 'styled-components';

import { buttonLegend } from '../HalfMovieCard/styles';

interface SideMenuContainerProps {
  show: boolean;
}

export const SideMenuContainer = styled.nav<SideMenuContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 200;

  position: absolute;
  border: 1px solid;
  padding: 1rem;

  border: 2px solid ${({ theme }) => theme.colors['base-hover']};
  background-color: ${({ theme }) => theme.colors['base-light-color']};
  color: ${({ theme }) => theme.colors['base-text']};

  right: 0;
  top: 7rem;
  width: 100%;
  max-width: 29rem;
  height: calc(100vh - 7rem);
  overflow-y: auto;

  transition: 0.5s;

  transform: ${({ show }) => !show && 'translateX(100%)'};
`;

export const MenuTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & button {
    border: none;
    background-color: transparent;
    font-size: ${({ theme }) => theme.fonts.sizes.small3};
    color: ${({ theme }) => theme.colors['blue-color']};
    border-bottom: 2px solid ${({ theme }) => theme.colors['base-hover']};
    position: relative;

    ${buttonLegend()}

    &::after {
      right: 1rem;
    }
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    padding: 1rem 0;
  }

  & > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors['base-hover']};
  }
`;

export const CartInfo = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 2rem;
`;

export const CompleteOrderButton = styled.a`
  width: 100%;
  min-width: 80%;
  height: 4rem;
  border: none;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors['3-color']};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListEmpty = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  & h3 {
    font-size: ${({ theme }) => theme.fonts.sizes.small3};
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;
