import { useEffect, useState } from "react";
import axios from "axios";
import useAPI from "../Hooks/UseAPI";

const SearchResult = ({ URL, input }) => {
      const [location, setLocation] = useState();
      useEffect(() => {
            axios.get(URL)
                  .then((res) => {
                        setLocation(res.data);
                  })
                  .catch((error) => console.log(error));
      }, [input]);

      return (
            <div className="search_box">
                  {location?.results.map((item, index) => {
                        return (
                              <button className="search_item" onClick={() => input(item.name)} key={index}>
                                    {item.name}
                              </button>
                        );
                  })}
            </div>
      );
};

export default SearchResult;
