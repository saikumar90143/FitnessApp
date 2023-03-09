import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBInputGroup,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import background from "../../../Images/man-937384_1920.jpg";

const GetMealPlan = () => {
  return (
    <Wrapper>
      <MDBContainer
        className="container rounded"
        style={{ backgroundColor: "#cfddee" }}
      >
        <MDBTypography tag="h1" className="fw-bold">
          Get our free meal plan
        </MDBTypography>
        <MDBTypography>
          Signup to our newsletter to get a free 30 day meal plan. You will
          receive all guidance on
          <br /> what to eat, how to cook and how much to eat.
        </MDBTypography>
        <MDBRow className="g-4">
          <MDBCol size="12" md="4">
            <MDBInput type="text" label="FULL NAME" autoComplete="false" />
          </MDBCol>
          <MDBCol size="12" md="4">
            <MDBInput type="email" label="EMAIL" autoComplete="false" />
          </MDBCol>
          <MDBCol size="12" md="4">
            <MDBBtn style={{ width: "100%", height: "50px" }}>Sign Up</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  position: relative;

  .container {
    padding-block: 6rem;
    position: absolute;

    top: 50%;
    left: 50%;
    translate: -50% -50%;
    input {
      height: 50px;
      background-color: #95a9ad;
      outline: none;
      border: none;
      color: var(--blue);
      visibility: visible;
      ::placeholder {
        color: var(--blue);
      }
    }
  }
`;

export default GetMealPlan;
