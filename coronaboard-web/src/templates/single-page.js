import React from "react";
import { Slide } from "../components/slide";

const SinglePage = ({ pageContext }) => {
  const { dataSource } = pageContext;
  const { countryByCc, globalStats } = dataSource;

  console.log(countryByCc);
  console.log(globalStats);

  return (
    <div>
      <h1>코로나보드</h1>
      <p>create로 만들어진페이지입니다. </p>
      <Slide title="국가별 현황">국가별 현황을 보여줍니다.</Slide>
    </div>
  );
};

export default SinglePage;
