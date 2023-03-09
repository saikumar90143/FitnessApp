import { MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import styled from 'styled-components'

const Socilaproof = () => {
  return (
    <Wrapper>
        <div style={{backgroundColor:"var(--blue)",color:"white"}} className='social'>
            <MDBRow className='py-5'>
                <MDBCol size='12' md='4'>
                 <h3 className='fw-blod'>1900+</h3>
                 <p>HAPPY CLIENTS</p>
                </MDBCol>
                <MDBCol size='12' md='4'>
                <h3 className='fw-blod'>5 yrs</h3>
                 <p>EXPERINCE</p>
                </MDBCol>
                <MDBCol size='12' md='4'>
                <h3 className='fw-blod'>100k</h3>
                 <p>FOLLOWERS</p>
                </MDBCol>
            </MDBRow>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
    .social{
        rotate: 358deg;
    }

`
export default Socilaproof
