import Logo from "../logo/logo";

import { NavigationContainer, LogoContainer, ItemsNavigation, ColorWrappper } from './styles'

const Navigation = () => {
  return (
     <ColorWrappper> 
    <NavigationContainer>      
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <ItemsNavigation id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html"><h5>Descripción</h5></a>
          </li>
          <li>
            <a href="badges.html"><h5>Ubicación</h5></a>
          </li>
          <li>
            <a href="collapsible.html"><h5>Ventajas</h5></a>
          </li>
          <li>
            <a href="badges.html"><h5>Imagenes</h5></a>
          </li>
          <li>
            <a href="collapsible.html"><h5>Hagamos negocio</h5></a>
          </li>
        </ItemsNavigation>
      
    </NavigationContainer>
    </ColorWrappper>
  );
};

export default Navigation;
