import { MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <MDBRow>
        <MDBCol size="12" md="6">
          <MDBRow>
            <MDBCol size="12" md="6">
              <MDBTypography className="fs-2 fw-bolder">
                Fitness<span style={{ textDecoration: "overline" }}>Freak</span>
              </MDBTypography>
            </MDBCol>
            <MDBCol size="12" md="6">
              <ul>
                <strong>CONTACT</strong>
                <li>saikumar.dudala.com</li>
              </ul>
              <ul className="d-flex flex-column gap-3">
                <p>LICENCING</p>
                <li>Copyright Flow Ninja</li>
                <li>Powered By Webflow</li>
                <li>Licencing</li>
                <li>Support</li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol size="12" md="6">
          <ul className="d-flex flex-column gap-3">
            <strong>EXPLORE</strong>
            <li>Premium Courses</li>
            <li>Free Courses</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
            <li>Style Guide</li>
          </ul>
        </MDBCol>
      </MDBRow>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--blue);
  color: white;
  padding-block: 2rem;
  ul {
    list-style-type: none;
  }
`;

export default Footer;
