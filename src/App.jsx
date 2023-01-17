import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Page from "./Components/Page";
import Empty from "./Components/Empty";
import Footer from "./Components/Footer";
import SearchResult from "./Components/SearchResult";

function App() {
      const random = Math.floor(Math.random() * 125 + 1);
      const [input, setInput] = useState();
      const [location, setLocation] = useState();
      const [search, setSearch] = useState("");
      let URL = `https://rickandmortyapi.com/api/location/name=${input ? input : random}`;

      useEffect(() => {
            axios.get(URL)
                  .then((res) => {
                        setLocation(res.data);
                        total = location?.residents.length / 8;
                  })
                  .catch((error) => console.log(error));
      }, [input]);

      const onSubmit = (e) => {
            e.preventDefault();
            setInput(e.target.text.value);
      };
      return (
            <div className="App">
                  <Header />
                  <form onSubmit={onSubmit} className="form">
                        <input type="text" name="text" placeholder="Location ID" onChange={(e) => setSearch(e.target.value)} />
                        <button>Search</button>
                        {search == "" ? "" : <SearchResult URL={`https://rickandmortyapi.com/api/location/?name=${search}`} input={setInput} />}
                  </form>
                  <div className="location">
                        <h2>
                              {location?.name} #{location?.id}
                        </h2>
                        <div className="location_info">
                              <span>
                                    Type:<h3>{location?.type}</h3>
                              </span>
                              <span>
                                    Dimension:<h3>{location?.dimension}</h3>
                              </span>
                              <span>
                                    Populations:<h3>{location?.residents.length}</h3>
                              </span>
                        </div>
                  </div>
                  {location?.residents.length == 0 ? (
                        <Empty />
                  ) : (
                        <div className="gallery">
                              {location?.residents.map((item) => {
                                    return <Card key={item} URL={item} />;
                              })}
                        </div>
                  )}
                  <Footer />
            </div>
      );
}

export default App;
