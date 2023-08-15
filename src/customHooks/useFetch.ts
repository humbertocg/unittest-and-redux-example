import { useEffect, useState } from "react";
import api from "../api/api";

const useFetchData = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error|null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const callGetRequest = async () => {
      try {
        const response = await api.get(url);
        if (response.status === 200) {
          setData(response.data);
        } else {
          setError(Error(response.status.toString()));
        }
      } catch (ex) {
        if (ex instanceof Error) {
          setError(ex);
        }
      } finally {
        setIsLoading(false);
      }
    };
    callGetRequest();
  }, []);
  return { data, error, isLoading };
};


export default useFetchData;