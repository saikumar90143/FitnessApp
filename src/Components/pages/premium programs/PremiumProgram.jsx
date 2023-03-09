import React from "react";
import styled from "styled-components";
import CommonShop from "./CommonShop";
import plan1 from "../../../Images/onlinecoaching1.png";
import plan2 from "../../../Images/premiumplan2.jpeg";
import plan3 from "../../../Images/premiumplan3.jpeg";
const PremiumProgram = () => {
  return (
    <Wrapper>
      <CommonShop
        name1={"Home Burn"}
        name2={"Sheredded Meal Plan"}
        name3={"Intensive Traning"}
        image1={plan1}
        image2={plan2}
        image3={plan3}
        time1={"3 days a week"}
        time2={"30 days"}
        time3={"7 days a week"}
        price1={"19.43"}
        price2={"38.45"}
        price3={"103.87"}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default PremiumProgram;
