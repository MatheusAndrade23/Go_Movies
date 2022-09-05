import { SearchContainer, MoviesContainer } from './styles';

import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { db } from '../../services/api';

import { MovieProps } from '../Home';

import config from '../../config';

import { Loading } from '../../components/Loading';
import { FullMovieCard } from '../../components/FullMovieCard';
import { toast } from 'react-toastify';

export const Search = () => {
  const { search } = useParams();

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const searchMovies = await db.get(
          `search/movie${config.requestConfig}&query=${search}`,
        );

        const searchMoviesData = searchMovies.data.results;
        setMovies(searchMoviesData);
        setLoading(false);
      } catch (error) {
        toast.error('Houve algum erro! Tente novamente mais tarde!');
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SearchContainer>
          <h2>{`${
            movies.length === 0
              ? 'Nenhum resultado para a pesquisa:'
              : 'Resultados para a pesquisa:'
          }  "${search}"`}</h2>
          <MoviesContainer>
            {movies.map((movie: MovieProps) => (
              <FullMovieCard key={movie.id} {...movie} />
            ))}
          </MoviesContainer>
        </SearchContainer>
      )}
    </>
  );
};
