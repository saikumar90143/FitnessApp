import './App.css';
import Navbar from './Components/Header/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AOS from 'aos'
import React from 'react';
import 'aos/dist/aos.css'
import Traning1 from './Components/pages/homeworkouts/Traning1/Traning1';
import Traning2 from './Components/pages/homeworkouts/Traning2/Traning2';
import Traning3 from './Components/pages/homeworkouts/traning3/Traning3';
import FreePlan from './Components/pages/freeFitnessPlan/FreePlan';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import PremiumProgram from './Components/pages/premium programs/PremiumProgram';
import Nutrition from './Components/pages/premium programs/Nutrition';
import Traning from './Components/pages/premium programs/Traning';
import Contact from './Components/pages/Contact/Contact';

AOS.init()
function App() {
  return (
    <div className="App">
      <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/workout1' element={<Traning1/>}></Route>
      <Route path='/workout2' element={<Traning2/>}></Route>
      <Route path='/workout3' element={<Traning3/>}></Route>
      <Route path='/freeplan' element={<FreePlan/>}></Route>
      <Route path='/shop' element={<PremiumProgram/>}></Route>
      <Route path='/nutrition' element={<Nutrition/>}></Route>
      <Route path='/traning' element={<Traning/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
