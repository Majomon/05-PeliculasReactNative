import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMovieResponse} from '../interface/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    // Para evitar esto
    //  <SliderHorizontal title="Populares" movies={popular!} /> Precisamente el uso de esto > ! <
    // Digo que siempre se inicie con un valor vacío
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBMovieResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMovieResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMovieResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMovieResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {...moviesState, isLoading};
};
