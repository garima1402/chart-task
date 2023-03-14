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
      name: "Malic Acid",
      type: "category",
      boundaryGap: false,
      data: malicAcidData,
      nameTextStyle: {
        padding: [10, 0, 0, 0],
      },
    },
    yAxis: {
      name: "Alcohol",
      type: "value",
    },
    series: [
      {    
        name: "Bar Chart",
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
