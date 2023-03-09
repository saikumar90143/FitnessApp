import { MDBBtn, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import waves from '../../Images/wave1.svg'
import image2 from '../../Images/explore.jpeg'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const ExploreOurShop = () => {
    gsap.registerPlugin(ScrollTrigger)
    const imageref=useRef(null)
    useEffect(()=>{
       const el=imageref.current
       gsap.fromTo(el,{y:50,opacity:0.7},{y:0,duration:3 ,opacity:1,ease:'power2',
    scrollTrigger:{
        trigger:el,
        scrub:1,
        start:"top 80%",
        end:"bottom center",
        toggleActions:"restart none pause reverse",
        
    }
    })
    },[])
  return (
    <Wrapper className='my-5'>
        <MDBContainer fluid>
       <MDBRow className='g-5'>
       <MDBCol size='12' md='6' className='d-flex justify-content-center'>
           <div className='box'>
            <figure ref={imageref}>
               <MDBCardImage className='img rounded-5' src={image2} alt='schedule' fluid />
               </figure>
           </div>

        </MDBCol>
        <MDBCol  size='12' md='6' className='text-start'>
         <MDBTypography tag='h1' className='fw-bolder'>I am Varun</MDBTypography>
         <p className='ls-wider lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className='fw-bold'><strong>01</strong>&nbsp;&nbsp; Over 10 years of experience</p>
        <p className='fw-bold'><strong>02</strong>&nbsp;&nbsp; Coached 2,000+ people</p>
        <p className='fw-bold'><strong>03</strong>&nbsp;&nbsp; Bachelors in nutrition</p>
        <MDBBtn className='button'><MDBIcon icon='angle-right' fas/> Explore Shop</MDBBtn>
        </MDBCol>
       </MDBRow>
       </MDBContainer>
    </Wrapper>
  )
}

const Wrapper=styled.section`
    strong{
        font-family: shantell sans;
        font-weight: 900;
        text-shadow: 1px 0 0, 1px 0 0;
        color: gray;
        font-size: 2rem;
    }

    .box{
        width:600px;
        height:380px;
        background-color: var(--blue);
background-image: url('${waves}');
background-repeat: no-repeat;
background-size: cover;
background-position: bottom right;
position: relative;
margin-bottom: 4rem;
    }
 figure{
        width:min(80vw,380px);
        height: 400px;
        position: absolute;
        top:70%;
        left:50%;
        translate: -50% -50%;
        img{
            width: 100%;
            height:100%
        }
    }

`
export default ExploreOurShop
