import React, { useState } from "react";
import "./Dashboard.css";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Helmet from "../../Components/Helmet/Helmet";

export default function Dashboard() {
  const data = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [45, 66],
        backgroundColor: ["white,red"],
        borderColor: ["gray,green"],
      },
    ],
  };
  return (
    <Helmet title="Dashboard">
      <div className="DashboardWrapper">
        <div className="cardContainer row">
          <div className="col-lg-3 col-md-6 DasCard">
            <div className="layer">
              <div className="cardIcon">
                <div className="Icon">
                  <img src="/src/assets/img/Shape.svg" alt="thunder" />
                </div>
              </div>
              <div className="cardTitle">Energy</div>
              <Doughnut
                data={data}
                plugins={[
                  {
                    afterUpdate: function (chart) {
                      const arcs = chart.getDatasetMeta(0).data;

                      arcs.forEach(function (arc) {
                        arc.round = {
                          x: (chart.chartArea.left + chart.chartArea.right) / 2,
                          y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                          radius: (arc.outerRadius + arc.innerRadius) / 2,
                          thickness: (arc.outerRadius - arc.innerRadius) / 2,
                          backgroundColor: arc.options.backgroundColor,
                        };
                      });
                    },
                  },
                ]}
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="layer">
              <div className="CardHeader d-flex justify-content-between">
                <div className="headerTitle">Porshe 718 Cayman S</div>
                <div>
                  <img src="/src/assets/img/Vector.svg" alt="like" />
                </div>
              </div>
              <div className="subtitle">Coupe</div>
              <div className="cardImg">
                <img
                  src="/src/assets/img/2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee.png"
                  alt=""
                />
              </div>
              <div className="footer d-flex justify-content-between">
                <div className="FooterWrapper d-flex">
                  <div className="cardPerson">
                    <span>
                      <img src="/src/assets/img/Peson.svg" alt="" />
                    </span>
                    <span>4</span>
                  </div>
                  <div className="cardCarType">
                    <span>
                      <img src="/src/assets/img/itration.svg" alt="" />
                    </span>
                    <span>Manual</span>
                  </div>
                </div>
                <div className="cardPrice">
                  <span> $400</span>
                  <span>/d</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="layer">
              <div className="CardHeader d-flex justify-content-between">
                <div className="headerTitle">Porshe 718 Cayman S</div>
                <div>
                  <img src="/src/assets/img/Vector.svg" alt="like" />
                </div>
              </div>
              <div className="subtitle">Coupe</div>
              <div className="cardImg">
                <img src="/src/assets/img/white car.png" alt="" />
              </div>
              <div className="footer d-flex justify-content-between">
                <div className="FooterWrapper d-flex">
                  <div className="cardPerson">
                    <span>
                      <img src="/src/assets/img/Peson.svg" alt="" />
                    </span>
                    <span>4</span>
                  </div>
                  <div className="cardCarType">
                    <span>
                      <img src="/src/assets/img/itration.svg" alt="" />
                    </span>
                    <span>Manual</span>
                  </div>
                </div>
                <div className="cardPrice">
                  <span> $400</span>
                  <span>/d</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="layer">
              <div className="CardHeader d-flex justify-content-between">
                <div className="headerTitle">Porshe 718 Cayman S</div>
                <div>
                  <img src="/src/assets/img/Vector.svg" alt="like" />
                </div>
              </div>
              <div className="subtitle">Coupe</div>
              <div className="cardImg">
                <img src="/src/assets/img/white car.png" alt="" />
              </div>
              <div className="footer d-flex justify-content-between">
                <div className="FooterWrapper d-flex">
                  <div className="cardPerson">
                    <span>
                      <img src="/src/assets/img/Peson.svg" alt="" />
                    </span>
                    <span>4</span>
                  </div>
                  <div className="cardCarType">
                    <span>
                      <img src="/src/assets/img/itration.svg" alt="" />
                    </span>
                    <span>Manual</span>
                  </div>
                </div>
                <div className="cardPrice">
                  <span> $400</span>
                  <span>/d</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
