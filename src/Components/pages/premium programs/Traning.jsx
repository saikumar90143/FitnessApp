import React from "react";
import styled from "styled-components";
import CommonShop from "./CommonShop";
import plan1 from "../../../Images/onlinecoaching1.png";
import plan2 from "../../../Images/premiumplan2.jpeg";
import plan3 from "../../../Images/premiumplan3.jpeg";
const Traning = () => {
  return (
    <Wrapper>
      <CommonShop
        name1={"Intensive Traning"}
        name2={"Home Burn"}
        name3={"Shredded Meal Plan"}
        image1={plan3}
        image2={plan1}
        image3={plan2}
        time2={"3 days a week"}
        time3={"30 days"}
        time1={"7 days a week"}
        price2={"19.43"}
        price3={"38.45"}
        price1={"103.87"}
      />
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Traning;
