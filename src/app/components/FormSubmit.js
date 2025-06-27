"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const status = useFormStatus();
  if (status.pending) {
    return <p>Editing User....</p>;
  }
  // gives you a status object which represents the status of the sorrounding form
  // must be used between <form> tags
  return (
    <>
      <button className="btn btn-danger mx-1" type="reset">
        Reset
      </button>
      <button className="btn btn-primary mx-1">Edit Profile</button>
    </>
  );
}
