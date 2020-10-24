import React, { useContext, useState, useEffect } from "react";
import axios from "axios"; 

const CharityOfferContext = React.createContext();


export function useCharityOffer() {
    return useContext(CharityOfferContext);
  }
export function CharityOfferProvider({ children }) {
    let charityid = "CHAZ1";
  let [sponsorOffers, setSponsorOffers] = useState([]); 

    useEffect(() => {
      const chofferdata=  axios
          .get(
            "https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/charityoffers/" +
              charityid
          )
          .then((response) =>
            setSponsorOffers(
              response.data.filter((offer) => offer.requestStatus === "OPEN")
            )
          )
          .catch((error) => console.log(error));
          return chofferdata;
      }, []);
    
      const value = {
        sponsorOffers
      };
  return (
    <CharityOfferContext.Provider value={value}>
      {children}
    </CharityOfferContext.Provider>
  );
}
