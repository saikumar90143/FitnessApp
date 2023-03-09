import { MDBBtn, MDBIcon, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ReadTips = () => {
  return (
    <Wrapper className='container'>
        <MDBTypography tag='h1'>Read our Tips and Tricks</MDBTypography>
        <MDBTypography className='ls-wider fs-5'>We post a lot of free content around health fitness and general wellbeing. Make sure to check all of our posts down below.</MDBTypography>
        <MDBBtn className='button py-3'><MDBIcon icon="angle-right"/> view all posts</MDBBtn>
    </Wrapper>
  )
}

const Wrapper=styled.section`
    padding-block: 5rem;
    h1{
        font-weight: bolder;
        font-size: min(12vw,4rem);
    }

`
export default ReadTips
