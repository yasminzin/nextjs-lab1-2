import Link from "next/link";

export default function CarItemPage({ car }) {

  return (
    <div className="col-lg-4 col-md-6 col-12 my-3">
      <div
        className="card shadow-sm border-0 h-100"
        style={{
          width: "20rem",
          borderRadius: "16px",
          overflow: "hidden",
          background: "#f8f9fa",
        }}
      >
        <img
          src={car.image}
          height={200}
          className="card-img-top"
          alt="Car Image"
          style={{ objectFit: "cover", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-2" style={{ fontWeight: "bold", color: "#333" }}>
            {car.name}
          </h5>
          <p className="badge bg-secondary mb-2" style={{ fontSize: "1rem" }}>
            {car.model} - {car.year}
          </p>
          <p className="card-text mb-2" style={{ color: "#555", minHeight: "48px" }}>
            {car.description}
          </p>
          <p className="mb-3 text-center text-primary fs-5">
            <strong className="card-text" >
              {car.price}$
            </strong>
          </p>
          <Link
            href={`/cars/${car.id}`}
            className="btn btn-danger mt-auto"
            style={{
              borderRadius: "8px",
              fontWeight: "bold",
              letterSpacing: "1px",
              boxShadow: "0 2px 8px rgba(217,83,79,0.1)",
            }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
