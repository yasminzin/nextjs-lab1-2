import { getCars } from "@/app/data/cars";
import CarDetailsClient from "@/app/components/CarDetails";

export default function CarDetailsPage({ params }) {
  const cars = getCars();
  const car = cars.find((car) => car.id === params.id);

  if (!car) {
    return <div>Car not found.</div>;
  }

  return <CarDetailsClient car={car} />;
}
