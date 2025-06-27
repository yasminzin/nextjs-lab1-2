import CarGridPage from "./car-grid/page";

export default function CarsPage() {
  return (
    <>
      <div className="container">
        <h2 className="text-center my-4" style={{ color: "#2c3e50", fontWeight: "bold" }}>
          Our Featured Cars
        </h2>
        <CarGridPage />
      </div>
    </>
  );
}
