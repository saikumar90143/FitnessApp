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
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import banner1 from "../../Images/banner1.png";
const Banner1 = () => {
  return (
    <Wrapper>
      <MDBContainer fluid>
        <MDBRow className="py-5">
          {/* image */}
          <MDBCol size="12" md="6">
            <MDBCardImage
              src={banner1}
              alt="banner1"
              fluid
              className="rounded"
              data-aos="zoom-out"
              data-aos-duration="1000"
            />
          </MDBCol>

          {/* content */}
          <MDBCol
            size="12"
            md="6"
            className="text-start my-auto"
            style={{ letterSpacing: "2px" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <MDBTypography>HI I'M SANDARA LIONS</MDBTypography>
            <MDBTypography tag="h2" className="fw-bolder fs-1">
              Your go to online fitness trainer and nutritionist.
            </MDBTypography>
            <MDBTypography>
              After getting a bachelors in nutrition and fitness training I
              started working with people all around and changing their lives
              forever.
            </MDBTypography>
            <NavLink to="/about">
              <MDBBtn className="button py-3">
                {" "}
                <MDBIcon icon="angle-right" fas /> ONLINE COACHING
              </MDBBtn>
            </NavLink>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  .button {
    transition: all 0.4s ease-in-out;
    :hover {
      scale: 1.1;
    }
  }
`;
export default Banner1;
