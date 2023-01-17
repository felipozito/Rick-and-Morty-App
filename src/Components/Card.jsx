import React from "react";
import useAPI from "../Hooks/UseAPI";

const Card = ({ URL }) => {
      const resident = useAPI(URL);
      return (
            <div className="card">
                  <img src={resident?.image} alt="" />
                  <div className="card_status">
                        <p>{resident?.status}</p>
                  </div>
                  <div className="card_info">
                        <h2>{resident?.name}</h2>
                        <div className="card_info_details">
                              <span>Species:</span>
                              <p>{resident?.species}</p>
                              <span>Origen:</span>
                              <p> {resident?.origin.name}</p>
                        </div>
                  </div>
            </div>
      );
};

export default Card;
