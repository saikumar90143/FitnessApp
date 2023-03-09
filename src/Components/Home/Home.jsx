import React from 'react'
import styled from 'styled-components'
import Banner1 from './Banner1'
import HomeWorkout from '../pages/homeworkouts/HomeWorkout'
import OnlineCoaching from './OnlineCoaching'
import Socilaproof from './Socilaproof'
import PremiumPlan from '../pages/premiumplans/PremiumPlan'
import BookaCall from '../pages/book a call/BookaCall'
import GetMealPlan from '../pages/getmealplan/GetMealPlan'
import ReadTips from '../pages/ReadOurTipsandTricks/ReadTips'
const Home = () => {
  return (
    <Wrapper>
      <Banner1/>
      <Socilaproof/>
      <OnlineCoaching/>
      <HomeWorkout/>
      
      <PremiumPlan/>
      <BookaCall/>
      <GetMealPlan/>
      <ReadTips/>
    </Wrapper>
  )
}
const Wrapper=styled.section`
    

`
export default Home
