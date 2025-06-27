import Image from "next/image";
import styles from "./page.module.css";
import Cars from "./cars/page";

export default function Home() {
  return (
    <>
      <div className="container-fluid" style={{position: "relative", height: "600px", width: "100%"}}>
        <Image src={"/pexels-albert-nunez-18065-88630.jpg"} fill style={{ objectFit: "cover" }} alt="Car Background" />
        <div>
          <h1 className="position-absolute start-50 text-danger translate-middle" style={{top: "35%"}}>Welcome to Our Car Agency</h1>
          <p className="position-absolute start-50 text-dark translate-middle fs-4" style={{top: "43%"}}>Find your dream car from our extensive collection</p>
        </div>
      </div>
      <div className="container mt-5">
        <Cars />
      </div>
    </>
  );
}
