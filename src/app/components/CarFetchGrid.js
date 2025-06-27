import { Container } from "react-bootstrap";

export default function CarFetchGrid({ sendCars }) {
  return (
    <>
      <Container className="row m-4 justify-content-center align-items-center">
          {sendCars.map((car) => (
            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
              <div className="container bg-secondary text-white p-3 rounded-3">
                <h2>{car.car}</h2>
                <div>{car.car_model}</div>
                <div>{car.car_color}</div>
                <div>{car.model_year}</div>
                <div>{car.price}</div>
              </div>
            </div>
          ))}
      </Container>
    </>
  );
}
