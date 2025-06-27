"use client";
import { useActionState, useState } from "react";
import { Link } from "next/link";
import { editProfile } from "../actions/editProfile";
import FormSubmit from "./formSubmit";

export default function EditProfileClient({ User }) {
  const [state, formAction] = useActionState(editProfile, { errors: [] });

  return (
    <>
      <div className="container">
        <h2 className="text-center my-4" style={{ color: "#2c3e50", fontWeight: "bold" }}>
          User Profile
        </h2>
        <div className="profile-content">
          <form action={formAction} className="card shadow p-4" style={{ maxWidth: "400px", margin: "0 auto", background: "#f8f9fa" }}>
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                alt="User Avatar"
                className="rounded-circle mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #2c3e50" }}
              />
              <div className="mb-3 w-100">
                <label className="form-label" htmlFor="name" style={{ color: "#34495e" }}>
                  Name
                </label>
                <input type="text" className="form-control" id="name" name="name" defaultValue={User.name} />
              </div>
              <div className="mb-3 w-100">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input type="email" className="form-control" id="email" name="email" defaultValue={User.email} />
              </div>
              <span className="badge bg-primary mb-3">Premium Member</span>
            </div>
            <hr />
            <div>
              <div className="mb-3">
                <label className="form-label" htmlFor="location">
                  Location
                </label>
                <input type="text" className="form-control" id="location" name="location" defaultValue={User.location} />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="phone">
                  Phone
                </label>
                <input type="text" className="form-control" id="phone" name="phone" defaultValue={User.phone} />
              </div>
            </div>
            <div className="text-center">
              <FormSubmit />
            </div>
            {state.errors && (
              <ul className="my-3">
                {state?.errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
