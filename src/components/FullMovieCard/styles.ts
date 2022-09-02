import styled, { css } from 'styled-components';

export const FullMovieCardContainer = styled.div`
  width: 18rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  & button:last-child {
    width: 100%;
    border-radius: 2px;
    border: none;
    padding: 0.7rem;

    color: ${({ theme }) => theme.colors['base-light-color']};
    background-color: ${({ theme }) => theme.colors['3-color']};
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-size: ${({ theme }) => theme.fonts.sizes.small4};
    font-weight: bold;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  height: 18rem;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors['base-label']};

  & img {
    height: 40rem;
  }
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  height: 8.5rem;

  color: ${({ theme }) => theme.colors['base-subtitle']};

  border-left: 2px solid ${({ theme }) => theme.colors['base-hover']};
  border-right: 2px solid ${({ theme }) => theme.colors['base-hover']};

  & div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;

    & strong {
      font-size: ${({ theme }) => theme.fonts.sizes.small3};
      margin-left: 0.3rem;
    }

    & span {
      font-size: ${({ theme }) => theme.fonts.sizes.small2};
      margin-left: 1rem;
    }
  }

  & svg {
    color: ${({ theme }) => theme.colors['yellow-color']};
    font-size: 2.2rem;
  }

  & > P {
    font-size: ${({ theme }) => theme.fonts.sizes.small2};
    font-weight: bold;
  }
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.colors['red-color']};

  position: absolute;
  right: 1rem;
  top: 1rem;

  font-size: 2rem;
`;
