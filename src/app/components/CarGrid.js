"use client";
import { useEffect, useState } from "react";
import CarItemPage from "../cars/car-item/page";
import { useRouter, useSearchParams } from "next/navigation";

export default function CarGridClient({ Cars }) {
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  console.log(queryParams);
  console.log(router);
  const [FilteredCars, SetFilteredCars] = useState(Cars);
  const [FormValues, SetFormValues] = useState({
    name: "",
    priceRange: "",
    transmission: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    SetFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function filter(e) {
    e.preventDefault();
    const { name, priceRange, transmission } = FormValues;
    if (name) {
      Cars = Cars.filter((car) => car.name.toLowerCase().includes(name.toLowerCase()));
      queryParams.set("name", name);
      router.push(`/cars?${queryParams.toString()}`);
    }
    if (priceRange) {
      if (priceRange.includes(">")) Cars.filter((car) => car.price > parseInt(priceRange.replace(">", "")));
      else {
        const [min, max] = priceRange.split("-").map(Number);
        Cars = Cars.filter((car) => car.price >= min && car.price <= max);
      }
      queryParams.set("priceRange", priceRange);
      router.push(`/cars?${queryParams.toString()}`);
    }
    if (transmission) {
      Cars = Cars.filter((car) => car.transmission.toLowerCase() === transmission.toLowerCase());
      queryParams.set("transmission", transmission);
      router.push(`/cars?${queryParams.toString()}`);
    }
    SetFilteredCars(Cars);
  }

  function resetValues() {
    SetFormValues({ name: "", priceRange: "", transmission: "" });
    SetFilteredCars(Cars);
    queryParams.delete("name");
    queryParams.delete("priceRange");
    queryParams.delete("transmission"); 
    router.push(`/cars?${queryParams.toString()}`);
  }

  useEffect(() => {
    const name = searchParams.get("name");
    const priceRange = searchParams.get("priceRange");
    const transmission = searchParams.get("transmission");

    if (name) {
      SetFormValues((prev) => ({ ...prev, name }));
      SetFilteredCars((prev) => prev.filter((car) => car.name.toLowerCase().includes(name.toLowerCase())));
    }
    if (priceRange) {
      SetFormValues((prev) => ({ ...prev, priceRange }));
      if (priceRange.includes(">")) {
        SetFilteredCars((prev) => prev.filter((car) => car.price > parseInt(priceRange.replace(">", ""))));
      } else {
        const [min, max] = priceRange.split("-").map(Number);
        SetFilteredCars((prev) => prev.filter((car) => car.price >= min && car.price <= max));
      }
    }
    if (transmission) {
      SetFormValues((prev) => ({ ...prev, transmission }));
      SetFilteredCars((prev) => prev.filter((car) => car.transmission.toLowerCase() === transmission.toLowerCase()));
    }
  }, [searchParams]);
  
  return (
    <div className="container mt-5">
      <form onSubmit={filter} className="my-2">
        <h5>Filters</h5>
        <div className="mb-3 d-inline-block mx-2">
          <input type="text" placeholder="Car Name..." name="name" className="form-control" value={FormValues.name} onChange={handleInputChange} />
        </div>
        <div className="mb-3 d-inline-block mx-2">
          <select name="priceRange" className="form-select" value={FormValues.priceRange} onChange={handleInputChange}>
            <option hidden value="">
              --Select Price Range-
            </option>
            <option value="15000-25000">15000-25000</option>
            <option value="25000-35000">25000-35000</option>
            <option value="35000-45000">35000-45000</option>
            <option value=">45000">&gt;45000</option>
          </select>
        </div>
        <div className="mb-3 d-inline-block mx-2">
          <select name="transmission" className="form-select" value={FormValues.transmission} onChange={handleInputChange}>
            <option hidden value="">
              --Select Transmission-
            </option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mx-2 px-3">
          Filter
        </button>
        <button type="reset" className="btn btn-secondary mx-2 px-3" onClick={resetValues}>
          Reset
        </button>
      </form>
      <div className="row">
        {FilteredCars.length > 0 ? (
          FilteredCars.map((car) => <CarItemPage key={car.id} car={car} />)
        ) : (
          <p className="alert alert-danger text-center">No Cars Found :(</p>
        )}
      </div>
    </div>
  );
}
