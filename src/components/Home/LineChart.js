import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ThemeContext } from "../../themecontext/ThemeContext";
import { NavLink } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "price",
//       data: [11, 35, 30, 33, 23, 50, 17, 46, 32, 16, 13, 8],
//       borderColor: "rgba(139,86,163,1)",
//       backgroundColor: "rgba(139,86,163,1)",
//       tension: 0.4,
//       borderWidth: 1,

//       //    pointBorderWidth:3
//     },
//   ],
// };
const titleTooltip = (item) => {
  return "";
};
const labelTooltip = (item) => {
  console.log(item);
  console.log(item.raw);
  return `$${item.raw}`;
};
// export const options = {
//   responsive: true,
//   maintainAspectRatio: false,
//   interaction: {
//     mode: "index",
//     intersect: false,
//   },

//   elements: {
//     point: {
//       radius: 0,
//     },
//   },
//   plugins: {
//     legend: {
//       display: false,
//     },
//     tooltip: {
//       mode: "index",
//       intersect: false,
//       yAlign: "bottom",
//       displayColors: false,
//       callbacks: {
//         title: titleTooltip,
//         label: labelTooltip,
//       },
//       backgroundColor: "rgba(139,86,163,1)",
//       bodyFontColor: "white",
//       bodyFont: {
//         family: "poppins",
//         size: "14px",
//         // weight:'bold'
//       },
//     },
//     hover: {
//       mode: "nearest",
//       intersect: true,
//     },
//   },
//   scales: {
//     x: {
//       grid: {
//         display: false,
//       },
//     },

//     y: {
//       border: {
//         dash: (ctx) => {
//           const firstTick = 0;
//           if (ctx.index === firstTick) {
//             return null;
//           } else {
//             // return [3, 4];
//             const { theme } = useContext(ThemeContext);

//             if (theme === "dark") {
//               return null; // Remove dashes in dark mode
//             } else {
//               return [3, 4]; // Show dashes in light theme
//             }
//           }

//         },
//         color: "gray",
//         display: false,
//       },

//       grid: {
//         color: (ctx) => {
//           const firstTick = 0;
//           if (ctx.index === firstTick) {
//             return "skyblue";
//           } else {
//             return "#DEDEDE";
//           }
//         },
//         drawBorder: false,
//         tickBorderDash: [2, 3],
//       },
//       beginAtZero: false,
//       min: 0,
//       max: 50,
//       ticks: {
//         stepSize: 10,
//       },
//     },
//   },
// };

// const arbitaryLine = {
//   id: "arbitaryLine",
//   beforeDatasetsDraw(chart, args, plugins) {
//     const {
//       ctx,
//       chartArea: { top, bottom },
//       scales: { x },
//     } = chart;
//     ctx.save();

//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.strokeStyle = "rgba(74,164,220,1)";
//     ctx.setLineDash([6, 6]);
//     ctx.moveTo(x.getPixelForValue(6), top);
//     ctx.lineTo(x.getPixelForValue(6), bottom);
//     ctx.stroke();
//     ctx.restore();
//   },
// };

const LineChart = () => {
  const { theme } = useContext(ThemeContext);

  const getDashValue = (ctx) => {
    const firstTick = 0;
    console.log("ctx", ctx.chart.ctx);

    if (theme === "light") {
      if (ctx.index === firstTick) {
        return null;
      } else {
        return [3, 4];
      }
    } else {
      if (ctx.index === firstTick) {
        return null;
      } else {
        //  return null;
        // Chart.defaults.borderColor = '#36A2EB';
        return [3, 4];
      }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: "price",
        data: [11, 35, 30, 33, 23, 50, 17, 46, 32, 16, 13, 8],
        borderColor: "rgba(139,86,163,1)",
        backgroundColor: "rgba(139,86,163,1)",
        tension: 0.4,
        borderWidth: theme === "light" ? 1 : 3,

        pointBorderWidth: 3,
      },
    ],
  };
  const arbitaryLine = {
    id: "arbitaryLine",
    beforeDatasetsDraw(chart, args, plugins) {
      const {
        ctx,
        chartArea: { top, bottom },
        scales: { x },
      } = chart;
      ctx.save();

      ctx.beginPath();

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(74,164,220,1)";
      ctx.setLineDash([6, 7]);
      ctx.moveTo(x.getPixelForValue(6), top);
      ctx.lineTo(x.getPixelForValue(6), bottom);
      ctx.stroke();
      ctx.restore();
    },
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },

    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        yAlign: "bottom",
        displayColors: false,
        callbacks: {
          title: titleTooltip,
          label: labelTooltip,
        },
        backgroundColor: "rgba(139,86,163,1)",
        bodyFontColor: "white",
        bodyFont: {
          family: "poppins",
          size: "14px",
          // weight:'bold'
        },
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        border: {
          dash: getDashValue,
          borderColor: "red",
          display: false,
        },

        grid: {
          color: (ctx) => {
            const firstTick = 0;
            if (ctx.index === firstTick) {
              return "skyblue";
            } else {
              return "#DEDEDE";
            }
          },
          drawBorder: false,
          tickBorderDash: [2, 3],
        },
        beginAtZero: false,
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-start mx-2">
            <NavLink
              // className="bg-secondary"
              style={{
                width: "76px",
                height: "27px",
                textAlign: "center",
                padding: "2px",
                // margin: "2px",
                fontFamily: "poppins",
                fontSize: "15px",
                textDecoration: "none",
                border:
                  theme === "light" ? "1px solid rgba(127,127,152,1)" : "none",
                borderRadius: "5px",
                color: "white",
                backgroundColor: "#7F7F98",
              }}
            >
              Price
            </NavLink>
            <NavLink
              // className="btn"
              style={{
                width: "76px",
                height: "27px",
                textAlign: "center",
                padding: "2px",
                // margin: "2px",
                color: theme === "light" ? "black" : "white",
                border: theme === "light" ? "1px solid #B6B6B6" : "none",
                borderRadius: "5px",
                fontFamily: "poppins",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Volume
            </NavLink>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-end" style={{ gap: "3px" }}>
            <NavLink
              className="btn"
              style={{
                width: "26px",
                height: "27px",
                textAlign: "center",
                padding: "2px",
                color: "rgba(127,127,152,1)",
                border:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
                borderRadius: "5px",
                fontFamily: "poppins",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              D
            </NavLink>
            <NavLink
              className="btn"
              style={{
                width: "26px",
                height: "27px",
                textAlign: "center",
                padding: "2px",
                color: "rgba(127,127,152,1)",
                border:
                  theme === "light"
                    ? "1px solid rgba(235,235,235,1)"
                    : "1px solid rgba(22,22,63,1)",
                borderRadius: "5px",
                fontFamily: "poppins",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              W
            </NavLink>
            <NavLink
              className="btn"
              style={{
                width: "26px",
                height: "27px",
                textAlign: "center",
                padding: "2px",
                color: theme === "light" ? "rgba(225,225,225,1)" : "black",
                fontFamily: "poppins",
                fontSize: "15px",
                textDecoration: "none",
                backgroundColor: "rgba(127,127,152,1)",
              }}
            >
              M
            </NavLink>
            <BsThreeDotsVertical
              style={{ fontSize: "22px", color: "gray", marginTop: "1px" }}
            />
          </div>
        </div>
      </div>

      <div></div>
      <div style={{ height: "240px" }} className="mt-4">
        <Line options={options} data={data} plugins={[arbitaryLine]} />
      </div>
    </>
  );
};

export default LineChart;
