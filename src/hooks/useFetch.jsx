import { useCallback, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url) => {
    let json;
    let response;
    try {
      setLoading(true);
      setData(null);
      setError(null);
      response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP Error, status: ${response.status}`);
      json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      setError("Erro, não foi possivel buscar", + error.message);
      json = null;
    } finally {
      setLoading(false);
    }
    return { response, json };
  }, []);

  return {
    request,
    error,
    loading,
    data,
  };
};
