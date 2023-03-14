import React from "react";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import data from "./data.json";

const Scatter: React.FC = () => {
  const [hueData, setHueData] = useState([] as any);
  const [colorData, setColorData] = useState([] as any);

  const getJsonData = () => {
    const hueArray = data.map((item) => item.Hue);
    setHueData(hueArray);
    const colorIntensityArray = data.map((item) => item["Color intensity"]);
    setColorData(colorIntensityArray);
  };
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      name: "Color Intensity",
      type: "category",
      data: colorData,
    },
    label: {
      normal: {
        show: true,
        formatter: "This is a normal label.",
      },
    },
    yAxis: {
      name: "Hue",
      type: "value",
    },
    series: [
      {
        name: "Scatter Chart",
        data: hueData,
        type: "scatter",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  console.log(hueData, colorData, "colorData");

  useEffect(() => {
    getJsonData();
  }, []);
  return <ReactECharts option={options} />;
};

export default Scatter;
