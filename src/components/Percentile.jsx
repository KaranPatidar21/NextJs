import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { percentile: 0, frequency: 0 },
  { percentile: 10, frequency: 2 },
  { percentile: 20, frequency: 5 },
  { percentile: 30, frequency: 10 },
  { percentile: 40, frequency: 15 },
  { percentile: 50, frequency: 25 },
  { percentile: 60, frequency: 40 },
  { percentile: 70, frequency: 55 },
  { percentile: 80, frequency: 30 },
  { percentile: 90, frequency: 10 },
  { percentile: 100, frequency: 0 },
];

const Percentile = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="percentile" label={{ value: "Percentile", position: "insideBottom", dy: 10 }} />
        <YAxis label={{ value: "Frequency", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Line type="monotone" dataKey="frequency" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Percentile;
