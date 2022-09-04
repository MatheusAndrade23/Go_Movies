import styled, { css } from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2 {
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;

export const MoviesContainer = styled.section`
  width: 100%;
  padding: 2rem 3rem 3rem;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 4rem;

  border-bottom: 2px solid ${({ theme }) => theme.colors['base-hover']};
`;
