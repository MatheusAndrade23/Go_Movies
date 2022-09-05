import { HomeContainer, MoviesContainer } from './styles';

import { FullMovieCard } from '../../components/FullMovieCard';

import { useState, useEffect } from 'react';

import { db } from '../../services/api';
import config from '../../config';

import { Loading } from '../../components/Loading';

export interface MovieProps {
  id: number;
  vote_average: number;
  title: string;
  poster_path: string;
}

export interface MoviesStateProps {
  popular: MovieProps[];
  topRated: MovieProps[];
  now_playing: MovieProps[];
  upcoming: MovieProps[];
}

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MoviesStateProps>({
    popular: [],
    topRated: [],
    now_playing: [],
    upcoming: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const popular = await db.get(`/movie/popular${config.requestConfig}`);
        const topRated = await db.get(`movie/top_rated${config.requestConfig}`);
        const now_playing = await db.get(
          `movie/now_playing${config.requestConfig}`,
        );
        const upcoming = await db.get(`/movie/upcoming${config.requestConfig}`);

        const allMovies = {
          popular: [...popular.data.results],
          topRated: [...topRated.data.results],
          now_playing: [...now_playing.data.results],
          upcoming: [...upcoming.data.results],
        };
        setMovies(allMovies);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <HomeContainer>
          <h2>Mais Populares</h2>
          <MoviesContainer>
            {movies.popular.map((movie: MovieProps) => (
              <FullMovieCard key={movie.id} {...movie} />
            ))}
          </MoviesContainer>
          <h2>Melhores Avaliados</h2>
          <MoviesContainer>
            {movies.topRated.map((movie: MovieProps) => (
              <FullMovieCard key={movie.id} {...movie} />
            ))}
          </MoviesContainer>
          <h2>Reproduzindo Agora</h2>
          <MoviesContainer>
            {movies.now_playing.map((movie: MovieProps) => (
              <FullMovieCard key={movie.id} {...movie} />
            ))}
          </MoviesContainer>
          <h2>Em Breve</h2>
          <MoviesContainer>
            {movies.upcoming.map((movie: MovieProps) => {
              if (movie.poster_path) {
                // Há um filme retornado pela API que não possui imagem
                return <FullMovieCard key={movie.id} {...movie} />;
              }
            })}
          </MoviesContainer>
        </HomeContainer>
      )}
    </>
  );
};
