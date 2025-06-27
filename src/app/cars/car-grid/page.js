import { getCars } from "@/app/data/cars";
import CarGridClient from "@/app/components/CarGrid";

export default function CarGridPage() {
  const Cars = getCars();

  return <CarGridClient Cars={Cars} />;
}
