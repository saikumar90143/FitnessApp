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
import backgroundImage from "../../../Images/onlinecoaching1.png";
import traning1 from "../../../Images/traning1.jpeg";
import traning2 from "../../../Images/traning2.jpeg";
import traning3 from "../../../Images/traning3.jpeg";
const FreePlan = () => {
  return (
    <Wrapper>
      <MDBContainer fluid className="container"></MDBContainer>
      <section className="plan">
        <h1>Free Workout Plans</h1>
      </section>
      <MDBRow className="g-4 py-5">
        {/* traning 1 */}
        <MDBCol size="12" md="4">
          <MDBCard>
            <MDBCardImage src={traning1} alt="traning1" fluid />
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
              <MDBTypography tag="h4">
                The Perfect Outdoor Workout
              </MDBTypography>
              <Link to="/workout1">
                <MDBIcon icon="angle-right" /> Train Now
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        {/* traning 2 */}
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
        {/* traning 3 */}
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
      </MDBRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 100%;
    min-height: 700px;
    background-image: url("${backgroundImage}");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .plan {
    background-color: var(--skyblue);
    padding-block: 4rem;
    width: 100%;
    position: absolute;
    top: 60%;
    left: 0;
    translate: 0 -50%;
  }

  .card {
    height: 480px;
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
export default FreePlan;
