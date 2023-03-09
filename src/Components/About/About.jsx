import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import about from "../../Images/about.jpeg";
import GetMealPlan from "../pages/getmealplan/GetMealPlan";
import ExploreOurShop from "./ExploreOurShop";
import OnlineCoach from "./OnlineCoach";
import Schedule from "./Schedule";

const About = () => {
  return (
    <Wrapper>
      <div className="about">
        <MDBContainer fluid>
          <MDBRow className="py-5 align-items-center">
            <MDBCol size="12" md="6" className="text-start mb-5">
              <p className="mb-3">HI IAM SANDRA LYONS</p>
              <MDBTypography
                tag="h1"
                className="fw-bolder mb-3"
                style={{ fontSize: "3rem" }}
              >
                Who can benefit from a fully custom online fitness plan &
                nutrition?
              </MDBTypography>
              <MDBTypography className="mb-3">
                Literally everyone. I’m currently helping people from 12 to 60+
                years old. Everyone is getting an adjusted program and a meal
                plan.
              </MDBTypography>
              <MDBBtn className="button py-4" style={{ width: "200px" }}>
                <MDBIcon icon="angle-right" fas />&nbsp;
                <Link to="/contact">Book a Call</Link>
              </MDBBtn>
            </MDBCol>

            <MDBCol size="12" md="6">
              <img src={about} alt="about" className="rounded" fluid />
            </MDBCol>
          </MDBRow>
          {/* online fitness coach */}
        </MDBContainer>
      </div>
      <OnlineCoach />
      <Schedule />
      <ExploreOurShop />
      <GetMealPlan />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about {
    height: max-content;
    background-color: var(--olive);
  }

  img {
    max-width: 600px;
    width: max(50vw, 100%);
    height: min(600px, 100%);
  }
`;
export default About;
