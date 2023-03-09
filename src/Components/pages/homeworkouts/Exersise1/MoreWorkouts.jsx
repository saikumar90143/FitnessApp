import {
  MDBCard,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import traning1 from '../../../Images/traning1.jpeg'
import traning2 from "../../../../Images/traning2.jpeg";
import traning3 from "../../../../Images/traning3.jpeg";
const MoreWorkouts = () => {
  return (
    <Wrapper>
      <MDBContainer>
        <h1 className="text-start">
          More workouts you
          <br /> might like...
        </h1>
        <MDBRow>
          <MDBCol size="12" md="4">
            <MDBCard>
              <MDBCardImage src={traning3} alt="traning3" fluid />
              <MDBCardFooter>
                <div className="d-flex justify-content-between">
                  <span>30 MINUTES</span>
                  <span
                    style={{
                      color: "#ec8675",
                      fontFamily: "fantasy",
                      fontWeight: 900,
                    }}
                  >
                    Free
                  </span>
                </div>
                <MDBTypography tag="h4">The Ultimate Abs Workout</MDBTypography>
                <Link to="/workout3">
                  <MDBIcon icon="angle-right" /> Train Now
                </Link>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol size="12" md="4">
            <MDBCard>
              <MDBCardImage src={traning2} alt="traning2" fluid />
              <MDBCardFooter>
                <div className="d-flex justify-content-between">
                  <span>30 MINUTES</span>
                  <span
                    style={{
                      color: "#ec8675",
                      fontFamily: "fantasy",
                      fontWeight: 900,
                    }}
                  >
                    Free
                  </span>
                </div>
                <MDBTypography tag="h4">Backday</MDBTypography>
                <Link to="/workout2">
                  <MDBIcon icon="angle-right" /> Train Now
                </Link>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    font-size: min(4rem, 8vw);
    padding-block: 4rem;
  }
  padding-block: 4rem;
  background-color: #cfddee;
  .card {
    height: 450px;
    transition: all 0.5s ease;
    :hover {
      opacity: 0.8;
      transform: translateY(-10px);
    }
    img {
      height: 300px;
    }
  }
`;

export default MoreWorkouts;
