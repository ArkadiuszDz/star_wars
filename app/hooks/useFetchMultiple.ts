import { useEffect, useState } from 'react';
import { getSlugFromUrl } from '../utils/helpers';
import { getData } from '../utils/api';

const useFetchMultiple = <T>(urls?: string[] | string) => {

  const [state, setState] = useState<T>();

  useEffect(() => {
    const fetchData = async () => {
      let resultsArray: T[] = [];
      if (Array.isArray(urls)) {
        for (let url of urls) {
          const { data } = await getData(getSlugFromUrl(url));
          if (data) {
            resultsArray = [...resultsArray, data];
            setState(resultsArray);
          }
        }
      }
      if (typeof urls === "string") {
        const { data } = await getData(getSlugFromUrl(urls));
        if (data) {
          setState(data);
        }
      }
    };

    fetchData();
  }, []);

  return state;
};

export default useFetchMultiple;