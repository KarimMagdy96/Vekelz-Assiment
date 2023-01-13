import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <>
      <aside className="col-2 sideBar d-flex flex-column justify-content-between">
        <div className="warper">
          <div className="LogoTitle d-flex">
            <div className="logo">
              <img
                className="logoImg"
                src="/src/assets/img/VectorLogo.svg"
                alt="logo"
              />
            </div>
            <h2 className="title fw-bold">Motiv.</h2>
          </div>
          <div className="navLinks">
            <ul>
              <li>
                <NavLink
                  to="dashboard"
                  className="navItem d-flex justify-content-start align-items-center"
                >
                  <span>
                    <img
                      src="/src/assets/img/dashboard icon.svg"
                      alt="Dashboard"
                    />
                  </span>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="navItem d-flex justify-content-start align-items-center"
                >
                  <span>
                    <img src="/src/assets/img/Line.svg" alt="Dashboard" />
                  </span>
                  <span>Assets</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="booking"
                  className="navItem d-flex justify-content-start align-items-center"
                >
                  <span>
                    <img src="/src/assets/img/car.svg" alt="Dashboard" />
                  </span>
                  <span>Booking</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="navItem d-flex justify-content-start align-items-center"
                >
                  <span>
                    <img src="/src/assets/img/shopping.svg" alt="Dashboard" />
                  </span>
                  <span>Sell Cars</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="navItem d-flex justify-content-start align-items-center"
                >
                  <span>
                    <img src="/src/assets/img/shopCart.svg" alt="Dashboard" />
                  </span>
                  <span>Buy Cars</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="navItem d-flex justify-content-start align-items-center"
                >
                  <span>
                    <img src="/src/assets/img/Finc.svg" alt="Dashboard" />
                  </span>
                  <span>Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="navItem d-flex justify-content-start align-items-center"
                >
                  <span>
                    <img src="/src/assets/img/Calender.svg" alt="Dashboard" />
                  </span>
                  <span>Calender</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="navItem d-flex justify-content-start align-items-center"
                >
                  <span>
                    <img src="/src/assets/img/message-1.svg" alt="Dashboard" />
                  </span>
                  <span>Messages</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="settings warper">
          <ul>
            <li>
              <NavLink
                to="#"
                className="navItem d-flex justify-content-start align-items-center"
              >
                <span>
                  <img src="/src/assets/img/cog.svg" alt="Dashboard" />
                </span>
                <span>Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="navItem d-flex justify-content-start align-items-center"
              >
                <span>
                  <img src="/src/assets/img/out.svg" alt="Dashboard" />
                </span>
                <span>Log out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
