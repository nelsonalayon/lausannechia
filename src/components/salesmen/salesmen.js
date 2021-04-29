import { SalesMenPhotoContainer, PhotoSalesMen, GeneralContainer } from "./styles";

const Salesmen = (props) => {
  return props.data.salesman.map((subject) => {
    return (
      <GeneralContainer key = {subject.id}>
        <SalesMenPhotoContainer>
          <PhotoSalesMen src={subject.image} height = "100%"></PhotoSalesMen>
        </SalesMenPhotoContainer>

        <p>
          {" "}
          {subject.phoneNumber} <span>({subject.name})</span>
        </p>
      </GeneralContainer>
    );
  });
};

export default Salesmen;
