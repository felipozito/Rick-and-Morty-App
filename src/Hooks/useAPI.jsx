import { useEffect, useState } from "react";
import axios from "axios";

const useAPI = (URL) => {
      const [response, setResponse] = useState();
      useEffect(() => {
            axios.get(URL)
                  .then((res) => {
                        setResponse(res.data);
                  })
                  .catch((error) => console.log(error));
      }, [URL]);

      return response;
};

export default useAPI;
