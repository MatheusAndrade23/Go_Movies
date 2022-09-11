import styled, { css } from 'styled-components';

export const FullMovieCardContainer = styled.div`
  width: 18rem;
  min-width: 18rem;

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

interface ImageContainerProps {
  srcImgBackground: string;
}

export const MoviePoster = styled.div`
  overflow: hidden;
  height: 18rem;
  width: 100%;

  position: relative;

  border: 1px solid ${({ theme }) => theme.colors['base-label']};

  display: flex;
  justify-content: center;

  & img {
    height: 100%;
    position: absolute;
    border: 1px solid ${({ theme }) => theme.colors['base-hover']};
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  height: 100%;
  width: 100%;
  position: absolute;

  background-image: ${({ srcImgBackground }) => `url(${srcImgBackground})`};
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(2px);
  -webkit-filter: blur(2px);
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  text-align: center;
  padding: 0 1rem;

  height: 10rem;

  color: ${({ theme }) => theme.colors['base-subtitle']};

  border-left: 2px solid ${({ theme }) => theme.colors['base-hover']};
  border-right: 2px solid ${({ theme }) => theme.colors['base-hover']};

  & h4 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

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
  z-index: 10;

  font-size: 2rem;
`;
