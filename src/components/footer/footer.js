import Logo from "../logo/logo";

import { Footer, ColumnFlex, ColumnFlex2, SocialMedia, ContainerFooter } from "./styles";

import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { IconContext } from "react-icons";

const FooterComponent = () => {
  return (
    <ContainerFooter>
      <Footer>
        <ColumnFlex>
          <Logo />
          <h5>Comprometidos con prestar un excelente servicio</h5>
        </ColumnFlex>
        <ColumnFlex2>
          <h3>Navegación</h3>
          <ul>
            <li>
              <h5>Descripción</h5>
            </li>
            <li>
              <h5>Ubicación</h5>
            </li>
            <li>
              <h5>Ventajas</h5>
            </li>
            <li>
              <h5>Imágenes</h5>
            </li>
            <li>
              <h5>Hagamos negocios </h5>
            </li>
          </ul>
        </ColumnFlex2>
        <ColumnFlex2>
          <h3>Siguenos en</h3>
          <IconContext.Provider
            value={{
              color: "#F3DA7E",
              size: "25px",
              className: "global-class-name",
            }}
          >
            <ul>
              <SocialMedia>
                <AiFillYoutube />
                <h5>Youtube</h5>
              </SocialMedia>
              <SocialMedia>
                <AiFillFacebook />
                <h5>Facebook</h5>
              </SocialMedia>
              <SocialMedia>
                <AiFillInstagram />
                <h5>Instagram</h5>
              </SocialMedia>
              <SocialMedia>
                <AiOutlineMail />
                <h5>Email</h5>
              </SocialMedia>
            </ul>
          </IconContext.Provider>
        </ColumnFlex2>
        <ColumnFlex>
          <h3>Estamos en</h3>
          <h5>
            Aenean id hendrerit erat, ac euismod sem. Proin fringilla in eros
            nec egestas. Cras pharetra ipsum ut sapien placerat malesuada.
          </h5>
        </ColumnFlex>
      </Footer>
    </ContainerFooter>
  );
};

export default FooterComponent;
