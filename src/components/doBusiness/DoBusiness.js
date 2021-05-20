import doBusiness from "../../json/doBusiness.json";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { ContainerAll, ItemBusiness, ContainerData } from "./styles";

const DoBusiness = () => {
  return (
    <ContainerAll>
      <h1>Hagamos negocios</h1>
      <ContainerData>
        <ItemBusiness>
          <h3>Costo</h3>
          <h4>{doBusiness.doBusiness.cost}</h4>
        </ItemBusiness>
        <ItemBusiness>
          <h3>Como se paga</h3>
          <h4>{doBusiness.doBusiness.howItPay}</h4>
        </ItemBusiness>
        <ItemBusiness>
          <h3>Pasos para hacer el negocio</h3>
          <h4>{doBusiness.doBusiness.howDoesBusiness}</h4>
        </ItemBusiness>

        <IconContext.Provider
          value={{
            color: "#D68920",
            size: "140px",
            className: "global-class-name",
          }}
        >
          <BsFillHouseDoorFill />
        </IconContext.Provider>
      </ContainerData>
    </ContainerAll>
  );
};

export default DoBusiness;
