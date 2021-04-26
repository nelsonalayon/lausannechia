import { SalesMenPhotoContainer, PhotoSalesMen } from "./styles";

const Salesmen = (props) => {
  return props.data.salesman.map((subject) => {
    return (
      <div>
        <SalesMenPhotoContainer>
          <PhotoSalesMen src={subject.image} height = "100%"></PhotoSalesMen>
        </SalesMenPhotoContainer>

        <p>
          {" "}
          {subject.phoneNumber} <span>({subject.name})</span>
        </p>
      </div>
    );
  });
};

export default Salesmen;
