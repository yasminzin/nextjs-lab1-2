"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.jpg";
import { useEffect } from "react";

// export const metadata = {
//   title: "Cars Agency Application",
//   description: "A simple car agency application built with Next.js",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm flex align-items-center p-0" style={{ zIndex: "5000" }}>
          <div className="container">
            <Image src={logo} alt="Cars Agency" width={70} />
            <Link className="navbar-brand text-uppercase ps-2" href="/">
              cars Agency
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active mx-3">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="/cars">
                    Browse Cars
                  </Link>
                </li>
                <li className="nav-item bg-danger px-3 rounded-2 mx-3">
                  <a className="nav-link text-bg-white text-white " href="/offers">
                    Offers
                  </a>
                </li>
                <li className="nav-item dropdown px-3">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Settings
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/">
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
