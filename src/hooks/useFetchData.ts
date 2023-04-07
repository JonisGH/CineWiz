import { useEffect, useState } from 'react';
import { MovieObject } from '../context/appContext';
import axios from 'axios';

type SearchQuery = {
  searchString: string;
  page: string;
};
// TODO: put in .env
const TMDB_KEY: string = '47da03161ab5477b6ac6c70f5435f4ae';

const BASE_URL: string = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}`;

const useFetchData = (props: SearchQuery) => {
  const [searchResult, setSearchResult] = useState<MovieObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { searchString, page } = props;

  const dataConverter = (inputData: any[] | undefined): MovieObject[] => {
    if (inputData === undefined) {
      return [];
    }

    const prunedData: MovieObject[] = inputData.map((movie) => {
      return {
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        id: movie.id,
        overview: movie.overview,
      };
    });

    return prunedData;
  };

  const fetchData = async () => {
    try {
      await axios
        .get(
          `${BASE_URL}&query=${searchString}&page=${page}&include_adult=false`
        )
        .then((res) => {
          setSearchResult(dataConverter(res?.data?.results));
          setLoading(false);
        });
    } catch (error) {
      setError('Failed to fetch data');
      console.error(error);
    }
  };

  const fetchInitialData = async () => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`
        )
        .then((res) => {
          setSearchResult(dataConverter(res?.data?.results));
          setLoading(false);
        });
    } catch (error) {
      setError('Failed to fetch data');
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchString === '') {
      fetchInitialData();
    }

    if (searchString.length > 0) {
      fetchData();
    }
    // eslint-disable-next-line
  }, [searchString]);

  return { searchResult, loading, error };
};

export default useFetchData;
