import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import hometraning1 from "../../../../Images/hometraining1.jpeg";
import user1 from "../../../../Images/user1.jpeg";
import backgroundwave from "../../../../Images/wave1.svg";
import Exersiese1 from "../Exersise1/Exersiese1";
const Traning1 = () => {
  return (
    <Wrapper>
      <MDBContainer fluid>
        <MDBRow className="g-4 py-5 background">
          {/* image */}
          <MDBCol size="12" md="6">
            <MDBCardImage
              src={hometraning1}
              alt="hometraning1"
              className="rounded"
              fluid
              style={{ maxHeight: "600px", width: "100%" }}
            />
          </MDBCol>
          {/* content */}
          <MDBCol
            size="12"
            md="6"
            className="text-start d-flex flex-column justify-content-center"
          >
            <span>30 MINUTES</span>
            <MDBTypography
              tag="h1"
              style={{ fontSize: "min(4rem,12vw)" }}
              className="fw-bolder"
            >
              The Perfect Outdoor Workout
            </MDBTypography>
            <MDBTypography className="lh-2" style={{ letterSpacing: "2px" }}>
              Muscles fit dip major tuck flex extension. Walkout heart rate
              barbell, leg press running bounce stretch kick weighted pectorals
              crosstraining.
            </MDBTypography>
            {/* user */}
            <div className="d-flex align-items-center justify-content-start gap-2">
              <MDBCardImage
                src={user1}
                alt="user1"
                fluid
                style={{ width: "40px", height: "40px" }}
                className="rounded-circle"
              />
              <span>Curtis Vandervort</span>
            </div>
            <MDBBtn className="button py-3 mt-5" style={{ maxWidth: "300px" }}>
              <MDBIcon icon="angle-right" /> Start Workout
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Exersiese1 />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .background {
    margin-top: 2rem;
    background-color: #bedad4;
    background-image: url("${backgroundwave}");
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: cover;
  }
`;
export default Traning1;
