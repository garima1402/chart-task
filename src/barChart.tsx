import React from "react";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import data from "./data.json";

const Bar: React.FC = () => {
  const [alcoholData, setAlcoholData] = useState([] as any);
  const [malicAcidData, setMalicAcidData] = useState([] as any);

  const getJsonData = () => {
    const alcoholArray = data.map((item) => item.Alcohol);
    setAlcoholData(alcoholArray);
    const malicAcidIntensityArray = data.map((item) => item["Malic Acid"]);
    setMalicAcidData(malicAcidIntensityArray);
  };
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: malicAcidData,
    },
    label: {
      normal: {
        show: true,
        formatter: "This is a normal label.",
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: alcoholData,
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  console.log(alcoholData, malicAcidData, "malicAcidData");

  useEffect(() => {
    getJsonData();
  }, []);
  return <ReactECharts option={options} />;
};

export default Bar;
