import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export const Echart = ({ wrapperCss, option }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    chartInstance.setOption(option);

    return () => chartInstance.dispose();
  }, [option]);

  return <div css={wrapperCss} ref={chartRef}></div>;
};
