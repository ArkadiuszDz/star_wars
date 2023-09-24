import { useEffect, useState } from 'react';
import { getSlugFromUrl } from '../utils/helpers';
import { getData } from '../utils/api';

const useFetchMultiple = <T>(urls?: string[] | string) => {

  const [state, setState] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let resultsArray: T = [];
      if (Array.isArray(urls)) {
        for (let url of urls) {
          const { results } = await getData(getSlugFromUrl(url));
          resultsArray = [...resultsArray, results];
          setState(resultsArray);
        }
      }
      if (typeof urls === "string") {
        const { results } = await getData(getSlugFromUrl(urls));
        setState(results);
      }
    };

    fetchData();
  }, []);

  return state;
};

export default useFetchMultiple;