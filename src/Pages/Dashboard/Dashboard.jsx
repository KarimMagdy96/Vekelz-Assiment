import React, { useState } from "react";
import "./Dashboard.css";
import Chart from "react-apexcharts";
import Helmet from "../../Components/Helmet/Helmet";

export default function Dashboard() {
  const [optons, setoptons] = useState({
    chart: {
      height: 350,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "transparent",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "100%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: false,
          name: {
            offsetY: -10,
            show: true,
            color: "#cb1212",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: "#111",
            fontSize: "360px",
            show: false,
          },
        },
      },
    },

    stroke: {
      lineCap: "round",
    },
    labels: [""],
  });
  const [baroptions, setbaroptions] = useState({
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["1 Pm", "2 Pm", "3 Pm", "4 Pm", "5 Pm", "6 Pm", "7 Pm"],
    },

    fill: {
      opacity: 1,
      colors: ["#2884ff", "#00ff33", '"#2e00c7"'],
    },
  });

  const [barseres, setbarseries] = useState([
    {
      name: "Free Cash Flow",
      data: [163, 124, 185, 107, 163, 78, 134],
    },
  ]);
  const [series, useseries] = useState([45]);
  const [series1, useseries1] = useState([57]);
  const [series2, useseries2] = useState([9]);
  const [series3, useseries3] = useState([25]);
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
              <div className="chart">
                <span>{series}%</span>
                <Chart
                  width="179%"
                  options={{
                    ...optons,
                    fill: {
                      colors: ["#b5b1b1"],
                    },
                  }}
                  series={series}
                  type="radialBar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 DasCard">
            <div className="layer">
              <div className="cardIcon">
                <div className="Icon">
                  <img src="/src/assets/img/Vector0.svg" alt="thunder" />
                </div>
              </div>
              <div className="cardTitle">Range</div>
              <div className="chart">
                <span>1{series1}k%</span>
                <Chart
                  width="179%"
                  options={{
                    ...optons,
                    fill: {
                      colors: ["#FF7E86"],
                    },
                  }}
                  series={series1}
                  type="radialBar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 DasCard">
            <div className="layer">
              <div className="cardIcon">
                <div className="Icon">
                  <img src="/src/assets/img/Vector.svg" alt="thunder" />
                </div>
              </div>
              <div className="cardTitle">Break fluid</div>
              <div className="chart">
                <span>{series2}%</span>
                <Chart
                  width="179%"
                  options={{
                    ...optons,
                    fill: {
                      colors: ["#A162F7"],
                    },
                  }}
                  series={series2}
                  type="radialBar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 DasCard">
            <div className="layer">
              <div className="cardIcon">
                <div className="Icon">
                  <img src="/src/assets/img/Vector2.svg" alt="thunder" />
                </div>
              </div>
              <div className="cardTitle">Tire Wear</div>
              <div className="chart">
                <span>{series3}%</span>
                <Chart
                  width="179%"
                  options={{
                    ...optons,
                    fill: {
                      colors: ["#F6CC0D"],
                    },
                  }}
                  series={series3}
                  type="radialBar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 DasCard">
            <div className="layer">
              <div className="mainCardTitle">
                <span className="mainCardTitleSpan">Miles</span> Statistics
              </div>
              <div className="">
                <Chart
                  options={baroptions}
                  series={barseres}
                  type="bar"
                  height={185}
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 DasCard">
            <div className="layer">
              <div className="cardIcon">
                <div className="Icon">
                  <img src="/src/assets/img/Vector2.svg" alt="thunder" />
                </div>
              </div>
              <div className="cardTitle">Tire Wear</div>
              <div className="chart">
                <span>{series3}%</span>
                <Chart
                  width="179%"
                  options={{
                    ...optons,
                    fill: {
                      colors: ["#F6CC0D"],
                    },
                  }}
                  series={series3}
                  type="radialBar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="layer">
              <div className="CardHeader d-flex justify-content-between">
                <div className="headerTitle">Porshe 718 Cayman S</div>
              </div>

              <div className="cardImg">
                <img src="/src/assets/img/car.png" alt="" />
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
          <div className="col-lg-4 col-md-6">
            <div className="layer">
              <div className="CardHeader d-flex justify-content-between">
                <div className="headerTitle">Porshe 718 Cayman S</div>
              </div>

              <div className="cardImg">
                <img src="/src/assets/img/car2.png" alt="" />
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
          <div className="col-lg-4 col-md-6">
            <div className="layer">
              <div className="CardHeader d-flex justify-content-between">
                <div className="headerTitle">Porshe 718 Cayman S</div>
              </div>

              <div className="cardImg">
                <img src="/src/assets/img/car3.png" alt="" />
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
