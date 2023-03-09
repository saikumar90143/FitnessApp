import {
  MDBBtn,
  MDBCard,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import {Link} from 'react-router-dom'
import React from "react";
import styled from "styled-components";
import traning1 from '../../../Images/traning1.jpeg'
import traning2 from '../../../Images/traning2.jpeg'
import traning3 from '../../../Images/traning3.jpeg'
const HomeWorkout = () => {
  return (
    <Wrapper style={{ backgroundColor: "#eef0f4" }}>
      <div
        className="text-start py-5"
        
      >
        <MDBContainer fluid>
          <section className="my-5">

          <h1>
            Free home workouts
            <br /> and fitness plans
          </h1>
          <MDBTypography>
            With free online classes people who don’t have the time or money to
            <br /> afford a personal coach can make change their lives forever.
          </MDBTypography>
          <MDBBtn
            className="d-flex justify-content-evenly py-3 align-items-center button"
            style={{
              letterSpacing: "2px",
              width: "200px",
            }}
            >
            <MDBIcon icon="angle-right" fas />
            <br /><Link to='/freeplan'>VEIW ALL</Link>
          </MDBBtn>
            </section>
          {/* workout plans */}
          <MDBRow className="g-4 py-5">
            {/* traning 1 */}
            <MDBCol size='12' md='4'>
              <MDBCard>
                <MDBCardImage src={traning1} alt='traning1' fluid/>
              <MDBCardFooter>
                <div className='d-flex justify-content-between'>
                  <span>30 MINUTES</span>
                  <span style={{color:"#ec8675",fontFamily:"fantasy",fontWeight:900}}>Free</span>
                </div>
                <MDBTypography tag='h4'>The Perfect Outdoor Workout</MDBTypography>
                <Link to='/workout1'><MDBIcon icon="angle-right"/> Train Now</Link>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            {/* traning 2 */}
            <MDBCol size='12' md='4'>
            <MDBCard>
                <MDBCardImage src={traning2} alt='traning2' fluid/>
                <MDBCardFooter>
                <div className='d-flex justify-content-between'>
                  <span>30 MINUTES</span>
                  <span style={{color:"#ec8675",fontFamily:"fantasy",fontWeight:900}}>Free</span>
                </div>
                <MDBTypography tag='h4'>Backday</MDBTypography>
                <Link to='/workout2'><MDBIcon icon="angle-right"/> Train Now</Link>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            {/* traning 3 */}
            <MDBCol size='12' md='4'>
            <MDBCard>
                <MDBCardImage src={traning3} alt='traning3' fluid/>
                <MDBCardFooter>
                <div className='d-flex justify-content-between'>
                  <span>30 MINUTES</span>
                  <span  style={{color:"#ec8675",fontFamily:"fantasy",fontWeight:900}}>Free</span>
                </div>
                <MDBTypography tag='h4'>The Ultimate Abs Workout</MDBTypography>
                <Link to='/workout3'><MDBIcon icon="angle-right"/> Train Now</Link>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
.card{
  height:480px;
  transition: all 0.5s ease;
  :hover{
    opacity: 0.8;
    transform: translateY(-10px);
  }
  img{
    height:300px;
  }
}
  h1 {
    font-size: min(5rem, 12vw);
  }
`;
export default HomeWorkout;
