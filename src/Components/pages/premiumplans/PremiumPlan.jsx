import { MDBBtn, MDBCard, MDBCardFooter, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import plan1 from '../../../Images/onlinecoaching1.png'
import plan2 from '../../../Images/premiumplan2.jpeg'
import plan3 from '../../../Images/premiumplan3.jpeg'
import overlay from '../../../Images/wave1.svg'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const PremiumPlan = () => {
  gsap.registerPlugin(ScrollTrigger)
  const scaleref=useRef(null)
const textref=useRef(null)
  useEffect(()=>{
    const el=scaleref.current
    const text=textref.current
    gsap.fromTo(el,{scale:1,duration:2,ease:'none'},{scale:1.4,duration:2,opacity:1,ease:"none",scrollTrigger:{
      trigger:el,
      scrub:1,
      toggleActions:"restart none reverse reset"
    }})
    gsap.fromTo(text,{y:100,duration:2,opacity:0,ease:"back"},{y:0,opacity:1,duration:2,scrollTrigger:{
      trigger:text,
       scrub:1,

      
      toggleActions:"restart none none reverse"
    }})
  })
  return (
    <Wrapper >
        <MDBContainer fluid className='py-5'>
            
       <section style={{color:"whitesmoke"}} className='text-start'>
        <MDBTypography tag='h1' style={{fontSize:"min(12vw,4rem)"}}>Premium home workouts <br/>and fitness plans</MDBTypography>
        <MDBTypography style={{letterSpacing:"2px"}}>I’ve created these premium fitness classes for everyone starting<br/> from beginner to advanced level with an in depth FAQ.</MDBTypography>
          <MDBBtn className='py-4 px-3'  style={{letterSpacing:"4px",width:"250px"}}><MDBIcon icon='angle-right' fas/> VIEW ALL</MDBBtn>
       </section>

       <MDBRow className="g-4 py-5 text-start">
            {/* traning 1 */}
            <MDBCol size='12' md='4'>
              <MDBCard>
                <MDBCardImage src={plan1} alt='traning1' fluid/>
              <MDBCardFooter>
                <div className='d-flex justify-content-between'>
                  <span>3 days a week</span>
                  <span style={{color:"#ec8675",fontFamily:"fantasy",fontWeight:900}}>$19.98 USD</span>
                </div>
                <MDBTypography tag='h4'>Home Burn</MDBTypography>
                <Link to='/workout1'><MDBIcon icon="angle-right"/> View</Link>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            {/* traning 2 */}
            <MDBCol size='12' md='4'>
            <MDBCard>
                <MDBCardImage src={plan2} alt='traning2' fluid/>
                <MDBCardFooter>
                <div className='d-flex justify-content-between'>
                  <span>30 Days</span>
                  <span style={{color:"#ec8675",fontFamily:"fantasy",fontWeight:900}}>$ 34.43 USD</span>
                </div>
                <MDBTypography tag='h4'>Shedded Meal Plan</MDBTypography>
                <Link to='/workout2'><MDBIcon icon="angle-right"/> View</Link>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            {/* traning 3 */}
            <MDBCol size='12' md='4'>
            <MDBCard>
                <MDBCardImage src={plan3} alt='traning3' fluid/>
                <MDBCardFooter>
                <div className='d-flex justify-content-between'>
                  <span>7 Days a Week</span>
                  <span  style={{color:"#ec8675",fontFamily:"fantasy",fontWeight:900}}>$45.7 USD</span>
                </div>
                <MDBTypography tag='h4'>High Intense Workout</MDBTypography>
                <Link to='/workout3'><MDBIcon icon="angle-right"/> View</Link>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>

         
        </MDBContainer>
 {/* banner section */}
 <section className='banner d-flex align-items-center justify-content-center' ref={scaleref} >
            
            <MDBTypography tag='h4' className='fw-bolder fs-1' style={{fontFamily:"cursive",color:"whitesmoke"}} ref={textref}>Sweat. Gain. Do.</MDBTypography>
          </section>
    </Wrapper>
  )
}

const Wrapper=styled.section`
background-color: var(--blue);
background-image: url("${overlay}");
background-repeat: no-repeat;
background-position: top right;
background-size: 500px;
max-width: 100%;
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

.banner{
    background-image: url("${plan1}");
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
    overflow-x: hidden;
    
}

`
export default PremiumPlan
