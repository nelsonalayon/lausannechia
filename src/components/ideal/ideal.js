import ideal from "../../json/imageIdeal.json";
import { IdealDescription, PrincipalContainer, IdealImages, TheImage } from "./styles"

const Ideal = () => {
  return (
    <PrincipalContainer>
      <IdealDescription>
        <h1>Ideal para </h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </h4>
      </IdealDescription>

      <IdealImages>
        {ideal.ideal.map((image) => {
          return <TheImage src={image} alt="image" />;
        })}
      </IdealImages>
    </PrincipalContainer>
  );
};

export default Ideal;
