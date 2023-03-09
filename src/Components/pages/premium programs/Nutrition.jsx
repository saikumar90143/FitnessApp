import React from "react";
import styled from "styled-components";
import CommonShop from "./CommonShop";
import plan1 from "../../../Images/onlinecoaching1.png";
import plan2 from "../../../Images/premiumplan2.jpeg";
import plan3 from "../../../Images/premiumplan3.jpeg";
const Nutrition = () => {
  return (
    <Wrapper>
      <CommonShop
        name1={"Shredded Meal Plan"}
        name2={"Intensive Traning"}
        name3={"home Burn"}
        image1={plan2}
        image2={plan3}
        image3={plan1}
        time3={"3 days a week"}
        time1={"30 days"}
        time2={"7 days a week"}
        price3={"19.43"}
        price1={"38.45"}
        price2={"103.87"}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Nutrition;
