"use client";
import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function CarDetailsClient({ car }) {
  const [ShowToast, SetShowToast] = useState(false);
  const [Message, SetMessage] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    SetShowToast(true);
    SetMessage("Your Order Submitted Successfully!");
    setTimeout(() => {
      SetShowToast(false);
    }, 2000);
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center my-4" style={{ color: "#2c3e50", fontWeight: "bold" }}>
        Car Details
      </h2>
      <div className="row align-items-center shadow-sm p-4 rounded" style={{ background: "#f8f9fa" }}>
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={car.image}
            alt={car.name}
            className="img-fluid rounded"
            style={{ maxHeight: "350px", objectFit: "cover", border: "4px solid #3498db" }}
          />
        </div>
        <div className="col-md-6">
          <h3 style={{ color: "#2980b9" }}>{car.name}</h3>
          <p>
            <strong>Model:</strong> <span style={{ color: "#34495e" }}>{car.model}</span>
          </p>
          <p>
            <strong>Year:</strong> <span style={{ color: "#34495e" }}>{car.year}</span>
          </p>
          <p>
            <strong>Description:</strong> <span style={{ color: "#7f8c8d" }}>{car.description}</span>
          </p>
          <p>
            <strong>Price:</strong>
            <span style={{ color: "#27ae60", fontWeight: "bold", fontSize: "1.2rem" }}> ${car.price}</span>
          </p>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6">
          <h4 style={{ color: "#2980b9" }}>Order This Car</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Your Phone
              </label>
              <input type="tel" className="form-control" id="phone" required />
            </div>
            <button type="submit" className="btn btn-primary">
              Place Order
            </button>
          </form>
        </div>
      </div>
      <ToastContainer className="p-3" style={{ position: "fixed", top: "5px", right: "5px" }}>
        <Toast className="text-success" style={{backgroundColor: "#ddece5"}} onClose={() => SetShowToast(false)} show={ShowToast} delay={3000} autohide>
          <Toast.Body>{Message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
