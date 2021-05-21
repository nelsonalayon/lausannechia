import dataAdvantages from "../../json/advantage.json";
import dataHouse from "../../json/dataHouse.json";
import { FiSquare } from "react-icons/fi";
import { FaBed, FaWarehouse, FaBath } from "react-icons/fa";
import { IconContext } from "react-icons";
import { LocationContainer, Principal, ItemContainer } from "./styles";

const Location = () => {
  return (
    <Principal>
      <h1>
        {dataAdvantages.advantages[Math.round(Math.random() * (3 - 0))].Slogan}{" "}
      </h1>

      <LocationContainer>
        <div>
          <iframe
            title= "mapa"
            src={dataHouse.house[0].location}
            width="600"
            height="330"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <h3>{dataHouse.house[0].address}</h3>
          <div>
            <IconContext.Provider
              value={{
                color: "#D68920",
                size: "45px",
                className: "global-class-name",
              }}
            >
              {" "}
              <ItemContainer>
                <FiSquare /> <p>{dataHouse.house[0].area}</p>
                <FaBed /> <p>{dataHouse.house[0].bedrooms}</p>
                <FaWarehouse /> <p>{dataHouse.house[0].parking}</p>
                <FaBath /> <p>{dataHouse.house[0].bathrooms}</p>
              </ItemContainer>
            </IconContext.Provider>
          </div>
        </div>
      </LocationContainer>
    </Principal>
  );
};

export default Location;
