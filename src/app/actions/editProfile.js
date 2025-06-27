"use server";

import { redirect } from "next/navigation";
import { editUser } from "../data/users";

export async function editProfile(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const location = formData.get("location");

  let errors = [];

  if (name.trim().length < 2) errors.push("Name must be not less than 2 characters");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) errors.push("Enter a valid email");
  if (!/^[\d-+]+$/.test(phone)) errors.push("Phone must be 11 numbers");
  if (location.trim().length < 2) errors.push("Location must be not less than 2 characters");
  if (errors.length > 0) return { errors };

  console.log({ name, email, phone, location });

  editUser({ name, email, phone, location });
  redirect("/profile");
}
