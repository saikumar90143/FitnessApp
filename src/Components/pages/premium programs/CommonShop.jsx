import React from 'react'
import { MDBCard, MDBCardFooter, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import { Link, NavLink } from 'react-router-dom'
import GetMealPlan from '../getmealplan/GetMealPlan'
import backgroundImage from '../../../Images/onlinecoaching1.png'

import styled from 'styled-components'

const CommonShop = (props) => {
  return (
    <Wrapper>
    <MDBContainer fluid className='background'>
    </MDBContainer>
    <section className='plan'>
         <h1>Premium Programs</h1>
         </section>
         {/* category */}
         <section className='d-flex justify-content-around flex-wrap align-items-center cateogorey'>
             <div>
                 <h4>CATEGORIES</h4>
             </div>
             <div className='d-flex gap-3 links'>
                 <NavLink to='/shop'>ALL</NavLink>
                 <NavLink to='/nutrition'>Nutrition</NavLink>
                 <NavLink to='/traning'>Traning</NavLink>
             </div>
         </section>

         {/* programs */}
         <MDBRow className="g-4 py-5 text-start">
         {/* traning 1 */}
         <MDBCol size='12' md='4'>
           <MDBCard>
             <MDBCardImage src={props.image1} alt='traning1' fluid/>
           <MDBCardFooter>
             <div className='d-flex justify-content-between'>
               <span>{props.time1}</span>
               <span style={{color:"#ec8675",fontFamily:"fantasy",fontWeight:900}}>${props.price1} USD</span>
             </div>
             <MDBTypography tag='h4'>{props.name1}</MDBTypography>
             <Link to='/workout1'><MDBIcon icon="angle-right"/> View</Link>
             </MDBCardFooter>
           </MDBCard>
         </MDBCol>
         {/* traning 2 */}
         <MDBCol size='12' md='4'>
         <MDBCard>
             <MDBCardImage src={props.image2} alt='traning2' fluid/>
             <MDBCardFooter>
             <div className='d-flex justify-content-between'>
               <span>{props.time2}</span>
               <span style={{color:"#ec8675",fontFamily:"fantasy",fontWeight:900}}>$ {props.price2} USD</span>
             </div>
             <MDBTypography tag='h4'>{props.name2}</MDBTypography>
             <Link to='/workout2'><MDBIcon icon="angle-right"/> View</Link>
             </MDBCardFooter>
           </MDBCard>
         </MDBCol>
         {/* traning 3 */}
         <MDBCol size='12' md='4'>
         <MDBCard>
             <MDBCardImage src={props.image3} alt='traning3' fluid/>
             <MDBCardFooter>
             <div className='d-flex justify-content-between'>
               <span>{props.time3}</span>
               <span  style={{color:"#ec8675",fontFamily:"fantasy",fontWeight:900}}>${props.price3} USD</span>
             </div>
             <MDBTypography tag='h4'>{props.name3}</MDBTypography>
             <Link to='/workout3'><MDBIcon icon="angle-right"/> View</Link>
             </MDBCardFooter>
           </MDBCard>
         </MDBCol>
       </MDBRow>
    
     <GetMealPlan/>
   
 </Wrapper>
  )
}

const Wrapper=styled.section`
        .background{
    max-width: 100%;
min-height: 700px;
    background-image: url("${backgroundImage}");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 5px;
    display: flex;
   justify-content: center;
   align-items: center;
  
}
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
.plan{
    background-color:var(--blue);
    color:white;
    padding-block:4rem;
    width: 100%;
  position: absolute;
  top:60%;
  left:0;
  translate: 0 -50%;
   
}

.cateogorey{
    padding-block: 1rem;
    border-bottom: 2px solid gray;
    .links{
      align-items: center;
      font-weight: bolder;
      letter-spacing: 2px;
.active{
  background-color: gray;
  padding: 1rem;
  border-radius: 5px;
  
}
    }
}
`
export default CommonShop
