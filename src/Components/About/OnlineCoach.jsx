import { MDBTypography } from 'mdb-react-ui-kit'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const OnlineCoach = () => {
    gsap.registerPlugin(ScrollTrigger)
    const headingref=useRef(null)

    useEffect(()=>{
       const el=headingref.current
       gsap.fromTo(el,{opacity:0.6,y:50,duration:2},{opacity:1, y:0,duration:2,ease:"slow",
        scrollTrigger:{
            trigger:el,
            scrub:2,
            toggleActions:"restart none pause reverse"
        }
    })
    },[])


  return (
    <Wrapper>
         <section className='w-75 text-center mx-auto py-5'>
            <MDBTypography tag='h1'  ref={headingref}>
            How does online fitness coaching work ?
            </MDBTypography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
         </section>
         <section className='video'>
         <iframe width="100%" height="515" src="https://www.youtube.com/embed/X_9VoqR5ojM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </section>
    </Wrapper>
  )
}
const Wrapper=styled.section`
    padding-block: 2rem;
    h1{
        font-size: min(12vw,4rem);
    }
.video{
    :hover{
        opacity: 0.8;
    }
}
`
export default OnlineCoach
