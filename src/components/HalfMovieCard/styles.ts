import styled, { css } from 'styled-components';

interface HalfMovieCardContainerProps {
  model: string;
  size: string;
}

export const buttonSubtitle = () => css`
  &::after {
    content: '';
    visibility: hidden;
    width: 1rem;
    height: 1rem;
    position: absolute;
    background-color: ${({ theme }) => theme.colors['base-text']};
    top: calc(100% + 0.7rem);
    transform: rotate(45deg);
    cursor: auto;
    z-index: 300;
  }

  &::before {
    content: attr(action-title);
    font-size: ${({ theme }) => theme.fonts.sizes.small2};
    visibility: hidden;
    cursor: auto;
    position: absolute;
    right: -0.5rem;
    top: calc(100% + 1rem);
    width: max-content;
    padding: 0.7rem;
    z-index: 300;

    background-color: ${({ theme }) => theme.colors['base-text']};
    color: ${({ theme }) => theme.colors['base-light-color']};
    border-radius: 0.5rem;
  }

  &:hover::before,
  &:hover::after {
    transition: 0.5s;
    visibility: visible;
  }
`;

export const HalfMovieCardContainer = styled.div<HalfMovieCardContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors['base-text']};

  & button {
    background-color: transparent;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & svg {
      color: ${({ theme }) => theme.colors['base-text']};
    }

    ${buttonSubtitle()}
  }

  ${({ theme, size }) => css`
    & img {
      height: ${size === 'normal' ? '6rem' : '3rem'};
      width: ${size === 'normal' ? '7.5rem' : '3.5rem'};
      margin-right: 1rem;
      border: 1px solid ${({ theme }) => theme.colors['base-text']};

      @media (max-width: 480px) {
        width: ${size === 'normal' && '5.5rem'};
      }
    }

    & svg {
      font-size: ${size === 'normal' ? '2.3rem' : '1.9rem'};
    }

    & span {
      font-size: ${size === 'normal'
        ? theme.fonts.sizes.small3
        : theme.fonts.sizes.small2};
      font-weight: ${size === 'normal' ? 'normal' : 'bold'};
    }

    & span:nth-child(2) {
      margin-left: ${size === 'normal' ? '-4rem' : '-1.7rem'};
      text-align: left;
      width: ${size === 'normal' ? '25%' : '30%'};
    }
  `}
`;

export const MovieTitle = styled.span`
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;
