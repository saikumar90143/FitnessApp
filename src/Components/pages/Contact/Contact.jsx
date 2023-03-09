import {
    MDBBtn,
    MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <MDBContainer>
        <MDBRow className="py-5">
          {/* contact details */}
          <MDBCol size="12" md="6" className="text-start">
            <strong className="text-decoration-underline">CONTACT</strong>
            <MDBTypography tag="h1">
              Get in touch today to schedule your discovery call.
            </MDBTypography>
            <p className="ls-wider lh-lg">
              Just fill out this short form on the right to get started in your
              life changing journey. If you prefer you can contact us below
              directly.
            </p>
            <h6>
              EMAIL:
              <br />
              <strong>saikumar.dudala@gmail.com</strong>
            </h6>
            <h6>
              PHONE:
              <br />
              <strong>+91 9014386620</strong>
            </h6>
          </MDBCol>

          {/* contact form */}

          <MDBCol size="12" md="6">
            <form action="https://formspree.io/f/xdovzrre" method="POST">
              <MDBRow className="mb-4 g-3">
                <MDBCol size="12" md="6">
                  <MDBInput label="Full Name" name="full name" />
                </MDBCol>
                <MDBCol size="12" md="6">
                  <MDBInput label="Current Weight" name="current weight" />
                </MDBCol>
              </MDBRow>
              <MDBRow className="g-3">
                <MDBCol size="12" md="6">
                  <MDBInput
                    className="mb-4"
                    label="Goal weight"
                    name="goal weight"
                  />
                </MDBCol>
                <MDBCol size="12" md="6">
                  <MDBInput
                    className="mb-4"
                    label="Email"
                    type="email"
                    name="email"
                  />
                </MDBCol>
              </MDBRow>
              <MDBTextArea style={{resize:"none"}} cols={4} rows={7} label='describe your goals'/>
              <MDBBtn className="my-4" type="submit">Submit</MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Contact;
