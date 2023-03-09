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
import coaching1 from "../../Images/onlinecoaching1.png";
import coaching2 from "../../Images/onlinecoaching2.jpeg";
import coaching3 from "../../Images/coaching3.jpeg";
import coaching4 from "../../Images/coaching4.png";
import { NavLink } from "react-router-dom";
const OnlineCoaching = () => {
  


  return (
    <Wrapper className="my-5">
      <MDBContainer fluid>
        <section className="text-center my-5 py-5">
          <MDBTypography tag="h1" className="fw-bolder">
            The journey to a healthier
            <br /> body starts right now
          </MDBTypography>
          <NavLink to="/about">
            {" "}
            <MDBBtn className="button py-3 mt-4">
              <MDBIcon icon="angle-right" fas /> Online Coaching
            </MDBBtn>
          </NavLink>
        </section>
        <MDBRow className="g-5 mx-auto text-start">
          {/* coaching1 */}
          <MDBCol
            size="12"
            md="6"
            className="px-5 d-flex justify-content-around flex-column"
            
          >
            <MDBCardImage
              style={{ width: "350px", height: "350px" }}
              className="rounded mb-3 bs-2 hover-shadow"
              src={coaching1}
              alt="image1"
              fluid
              data-aos='fade-right'
              data-aos-duration='1000'

            />
            <MDBTypography tag="h3" className="fw-bolder "  data-aos='fade-up'
              data-aos-duration='1000'>
              Learn to live a healthy life with fitness
            </MDBTypography>
            <MDBTypography  data-aos='fade-up'
              data-aos-duration='1000'>
              Changing your lifestyle with a fast paced life may seem hard or
              impossible, but with small steps each week you can achieve your
              dream physique and live a healthier life.
            </MDBTypography>
          </MDBCol>
          {/* coaching 2 */}
          <MDBCol
            size="12"
            md="6"
            className="px-5 text-start d-flex justify-content-around flex-column"
            >
            <MDBCardImage
              style={{ width: "350px", height: "350px" }}
              className="rounded mb-3 hover-shadow"
              src={coaching2}
              alt="image2"
              data-aos='fade-left'
              data-aos-duration='1000'
              fluid
            />
            <MDBTypography tag="h3" className="fw-bolder"  data-aos='fade-up'
              data-aos-duration='1000'>
              Understand how to do excercises properly
            </MDBTypography>
            <MDBTypography  data-aos='fade-up'
              data-aos-duration='1000'>
              Just going to the gym and lifting weights won't make you healthy,
              after all it may even cause some harm to your body. We teach
              proper exercise techniques
            </MDBTypography>
          </MDBCol>
          {/* coaching3 */}
          <MDBCol
            size="12"
            md="6"
            className="px-5 text-start d-flex justify-content-around flex-column"
          >
            <MDBCardImage
              style={{ width: "350px", height: "350px" }}
              className="rounded mb-3 hover-shadow"
              src={coaching3}
              alt="image1"
              data-aos='fade-right'
              data-aos-duration='1000'
              fluid
            />
            <MDBTypography tag="h3" className="fw-bolder"  data-aos='fade-up'
              data-aos-duration='1000'>
              Track your progress weekly
            </MDBTypography>
            <MDBTypography  data-aos='fade-up'
              data-aos-duration='1000'>
              We're tracking your goal weight with body fat measures, weight and
              general feeling. You may have the same body weight but feel 10x
              better.
            </MDBTypography>
          </MDBCol>
          {/* coaching 4 */}
          <MDBCol
            size="12"
            md="6"
            className="px-5 text-start d-flex justify-content-around flex-column"
          >
            <MDBCardImage
              style={{ width: "350px", height: "350px" }}
              className="rounded mb-3 hover-shadow"
              src={coaching4}
              alt="image2"
              data-aos='fade-left'
              data-aos-duration='1000'
              fluid
            />
            <MDBTypography tag="h3" className="fw-bolder"  data-aos='fade-up'
              data-aos-duration='1000'>
              Follow a specific plan made just for you
            </MDBTypography>
            <MDBTypography  data-aos='fade-up'
              data-aos-duration='1000'>
              Everyone is different, and we know it. That's why all of our
              clients get a programme specific just for their lifestyle and body
              tipe. This give the best possible results.
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    font-size: min(4rem, 12vw);
  }
`;
export default OnlineCoaching;
