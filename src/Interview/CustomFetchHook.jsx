import React, { useEffect, useState } from "react";

const CustomFetchHook = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      setData(json);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError(`Something went wrong ${error}`);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, isLoading };
};

export default CustomFetchHook;
