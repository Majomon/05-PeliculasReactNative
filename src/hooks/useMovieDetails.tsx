import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interface/movieInterface';
interface MovieDetails {
  isLoading: boolean;
  movieFull: MovieFull;
  cast: any[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    const res = await movieDB.get<MovieFull>(`/${movieId}`);
    console.log(res.data.overview);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {state};
};
