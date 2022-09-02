import styled, { css } from 'styled-components';

export const HalfMovieCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors['base-text']};

  & img {
    height: 6rem;
    width: 7.5rem;
  }

  & span {
    font-size: ${({ theme }) => theme.fonts.sizes.small3};
  }

  & span:nth-child(2) {
    margin-left: -3rem;
  }

  & button {
    background-color: transparent;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
      font-size: 2.3rem;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`;
