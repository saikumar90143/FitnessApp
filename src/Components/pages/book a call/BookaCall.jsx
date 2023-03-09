import { MDBBtn, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import styled from 'styled-components'
import image from '../../../Images/book a call.png'
const BookaCall = () => {
  return (
    <Wrapper className='shadow-5 py-5'>
        <MDBContainer fluid>

       <MDBRow>
        {/* content */}
        <MDBCol className='text-start d-flex flex-column justify-content-center' size='12' md='6'>
         <MDBTypography tag='h1'>Who can benefit from a fully custom online fitness plan and nutrition?</MDBTypography>
         <MDBTypography>Literally everyone. I’m currently helping people from 12 to 60+ years old. Everyone is getting an adjusted program and a meal plan.</MDBTypography>
          <MDBBtn className='button py-4' style={{width:"200px"}}><MDBIcon icon='angle-right' fas/> Book A Call</MDBBtn>
        </MDBCol> 

        {/* image */}
        <MDBCol size='12' md='6'>
        <section>
            <MDBCardImage src={image} alt='book' fluid/>
        </section>
        </MDBCol>
       </MDBRow>
        </MDBContainer>
    </Wrapper>
  )
}
const Wrapper=styled.section`
   margin-top :5rem ;

`
export default BookaCall
