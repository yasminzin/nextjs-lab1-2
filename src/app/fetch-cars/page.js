import CarFetchGrid from "@/app/components/CarFetchGrid";

export default async function FetchCars() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("https://myfakeapi.com/api/cars/");
  if (!response.ok) throw new Error("Failed to fetch data");

  const cars = await response.json();
  console.log(cars.cars);

  if (cars) {
    return (
      <>
        <h1 className="m-4">Cars Fetch page</h1>
        <CarFetchGrid sendCars={cars.cars} />
      </>
    );
  }
}
