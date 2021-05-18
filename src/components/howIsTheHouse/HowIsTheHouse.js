import chiaHouse from "../../json/imagesChiaHouse.json";

import { Img, UniversalContainer, ContainerImages } from "./styles";

const HowIsTheHouse = () => {
  return (
    <UniversalContainer>
      <h1>Como es la casa</h1>

      <ContainerImages>
        {chiaHouse.chiaHouse.map((photo) => {
          return <Img src={photo.image} height="300px" width="300px"></Img>;
        })}
      </ContainerImages>
    </UniversalContainer>
  );
};

export default HowIsTheHouse;
