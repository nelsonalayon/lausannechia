import {
  FaTree,
  FaWheelchair,
  FaShoppingBasket,
  FaAmbulance,
} from "react-icons/fa";

import { IconContext } from "react-icons";

import { AdvantageContainer, LogoContainer } from "./styles"
 
const AdvantageItem = (props) => {
  return props.data.advantages.map((benefit) => {
   
    return (
      <AdvantageContainer>
        {" "}
        <LogoContainer>
          {benefit.id === "0" ? (
            <IconContext.Provider
              value={{
                color: "#686864",
                size: "100px",
                className: "global-class-name",
              }}
            >
              <FaTree />
            </IconContext.Provider>
          ) : benefit.id === "1" ? (
            <IconContext.Provider
              value={{
                color: "#686864",
                size: "100px",
                className: "global-class-name",
              }}
            >
              <FaWheelchair />
            </IconContext.Provider>
          ) : benefit.id === "2" ? (
            <IconContext.Provider
              value={{
                color: "#686864",
                size: "100px",
                className: "global-class-name",
              }}
            >
              <FaShoppingBasket />
            </IconContext.Provider>
          ) : benefit.id === "3" ? (
            <IconContext.Provider
              value={{
                color: "#686864",
                size: "100px",
                className: "global-class-name",
              }}
            >
              <FaAmbulance />
            </IconContext.Provider>
          ) : (
            <p>nothing</p>
          )}
        </LogoContainer>
        <div>
            <p>
                {benefit.advantage}
            </p>
        </div>
      </AdvantageContainer>
    );
  });
};

export default AdvantageItem;
