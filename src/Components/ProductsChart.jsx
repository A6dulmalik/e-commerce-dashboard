import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: 10, pv: 15, ps: 10 },
  // { name: 11, pv: 0, ps: 0 },
  { name: 12, pv: 15, ps: 10 },
  // { name: 13, pv: 0, ps: 0 },
  { name: 14, pv: 15, ps: 10 },
  // { name: 15, pv: 0, ps: 0 },
  // { name: 16, pv: 0, ps: 0 },
  // { name: 17, pv: 0, ps: 0 },
  // { name: 18, pv: 0, ps: 0 },
];

// Custom legend styling
const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      {payload.map((entry, index) => (
        <div
          key={`item-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            top: "-30px",
          }}
        >
          {/* Custom Color Key */}
          <div
            style={{
              width: "20px",
              height: "7px",
              borderRadius: "4px", // Rounded corners
              backgroundColor: entry.color,
              marginRight: "10px",
            }}
          />
          <span
            style={{ fontSize: "14px", color: "#11142D", fontWeight: "600" }}
          >
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const ProductsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        barSize={9}
        // height={200}
        margin={{
          top: 45,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal={false} />
        <XAxis
          dataKey="name"
          type="number"
          domain={[10, 18]}
          tickCount={9}
          tick={{ fontSize: 12, fill: "#92929D" }}
        />
        {/* <YAxis tick={false} /> */}
        <Tooltip />
        <Legend verticalAlign="top" align="left" content={<CustomLegend />} />
        <Bar
          dataKey="pv"
          name="Product Viewed"
          fill="#55AAF1"
          radius={18}
          height={10}

          // margin={{ left: 10 }}
        />
        <Bar dataKey="ps" name="Product Sold" fill="#42BDA1" radius={18} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProductsChart;
