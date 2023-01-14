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
      height: 380,
    },
    xaxis: {
      type: "category",
      labels: {
        formatter: function (val) {
          return "Q" + dayjs(val).quarter();
        },
      },
      group: {
        style: {
          fontSize: "10px",
          fontWeight: 700,
        },
        groups: [
          { title: "2019", cols: 4 },
          { title: "2020", cols: 4 },
        ],
      },
    },
    title: {
      text: "Grouped Labels on the X-axis",
    },
    tooltip: {
      x: {
        formatter: function (val) {
          return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY");
        },
      },
    },
  });
  const [barseres, setbarseries] = useState([
    {
      name: "sales",
      data: [
        {
          x: "2019/01/01",
          y: 400,
        },
        {
          x: "2019/04/01",
          y: 430,
        },
        {
          x: "2019/07/01",
          y: 448,
        },
        {
          x: "2019/10/01",
          y: 470,
        },
        {
          x: "2020/01/01",
          y: 540,
        },
        {
          x: "2020/04/01",
          y: 580,
        },
        {
          x: "2020/07/01",
          y: 690,
        },
        {
          x: "2020/10/01",
          y: 690,
        },
      ],
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
              <div className="cardIcon">
                <div className="Icon">
                  <img src="/src/assets/img/Vector2.svg" alt="thunder" />
                </div>
              </div>
              <div className="cardTitle">Tire Wear</div>
              <div className="chart">
                <Chart
                  options={baroptions}
                  series={barseres}
                  type="bar"
                  height={380}
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
        </div>
      </div>
    </Helmet>
  );
}
