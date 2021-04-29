import { NavbarContainer, Appointment } from "./styles.js";
import salesman from "../../json/salesmen.json";
import SalesMenComponent from "../salesmen/salesmen";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { IconContext } from "react-icons";



const Navbar = () => {
  return (
    <NavbarContainer>
      <Appointment>
        <p>Llamanos o agenda una cita</p>
      </Appointment>

      <SalesMenComponent data={salesman} />

      <Appointment>
        <IconContext.Provider
          value={{
            color: "#686864",
            size: "25px",
            className: "global-class-name",
          }}
        >
          <AiFillYoutube />
          <AiFillFacebook />
          <AiFillInstagram />
          <AiOutlineMail />
        </IconContext.Provider>
      </Appointment>
    </NavbarContainer>
  );
};

export default Navbar;
