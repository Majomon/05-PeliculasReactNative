import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interface/movieInterface';
import {Cast, CreditsResponse} from '../interface/creditsInterface';
interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailResponse, castPromiseResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailResponse.data,
      cast: castPromiseResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    /*     isLoading: state.isLoading,
    movieFull: state.movieFull,
    cast: state.cast, */
    ...state,
  };
};
