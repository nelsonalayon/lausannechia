import dataAdvantages from "../../json/advantage.json";
import AdvantageItem from "../advantageItem/advantageItem";
import { SuperContainer, All } from "./styles";

const Advantages = () => {
  console.log(dataAdvantages)
  return (
    <All>
      <h1>{dataAdvantages.advantages[Math.round(Math.random()* (3-0))].Slogan}</h1>
       <SuperContainer>      
      <AdvantageItem data={dataAdvantages} />
    </SuperContainer>
    </All>
   
  );
};

export default Advantages;
