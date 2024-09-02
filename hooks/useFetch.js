import { AxiosAPI } from "@/axios/axiosInstance";
import { useState, useEffect, useCallback } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const refresh = useCallback(() => {
    setRefreshIndex((prevIndex) => prevIndex + 1);
  }, []);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await AxiosAPI.get(url, options);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url, refreshIndex]);

  return { data, error, loading, refresh };
};

export default useFetch;
