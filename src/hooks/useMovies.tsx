import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMovieResponse} from '../interface/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);
  const [moviesPopular, setMoviesPopular] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resNowPlaying = await movieDB.get<MovieDBMovieResponse>(
      '/now_playing',
    );
    await movieDB.get<MovieDBMovieResponse>('/top_rated');
    await movieDB.get<MovieDBMovieResponse>('/upcoming');

    setMoviesInCinema(resNowPlaying.data.results);
    setMoviesPopular(resPopular.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {moviesInCinema, isLoading, moviesPopular};
};
