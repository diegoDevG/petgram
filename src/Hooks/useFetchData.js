import { useEffect, useState } from 'react';


export const useFetchData = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      const fetchData = async () => {
          const response = await fetch(api);
          const res = await response.json();
          setData(res);
          setLoading(false)
      };
      fetchData();
  }, []);

  return {data, loading}
}
