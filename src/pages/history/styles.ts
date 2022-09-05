import styled, { css } from 'styled-components';

export const HistoryContainer = styled.main`
  width: 100%;
  min-height: 80vh;

  padding: 3rem;
`;

export const HistoryCard = styled.details`
  width: 100%;
  min-height: 4rem;
  margin-top: 3rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors['base-light-color']};

  border: 2px solid ${({ theme }) => theme.colors['base-hover']};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & span {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.fonts.sizes.small3};
    margin-left: 1rem;
  }

  & div {
    background-color: ${({ theme }) => theme.colors['base-light-color']};
  }

  & > summary {
    display: flex;
    height: 100%;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-evenly;
    gap: 1rem;
    cursor: pointer;

    padding: 1rem 0;
    background-color: ${({ theme }) => theme.colors['base-light-color']};

    & div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    & svg {
      color: ${({ theme }) => theme.colors['3-color']};
      font-size: 2rem;
    }
  }
`;

export const MoviesContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  margin-top: 2rem;

  & > div.rec-carousel-wrapper {
    border: 2px solid ${({ theme }) => theme.colors['base-hover']};
    border-radius: 5px;
    padding: 1rem;
    z-index: 100;

    & button.rec-arrow {
      display: flex;
      align-items: center;
      justify-content: center;

      &:disabled {
        visibility: hidden;
      }

      @media (max-width: 424px) {
        font-size: 2rem;
        height: 4rem;
        min-width: 4rem;
      }
    }
  }
`;
