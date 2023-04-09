import './App.css';
import React, { useState } from "react"
//importing page one as One
import One from './pages/pageone';
//importing second page as Two 
import Two from './pages/pagetwo';
import {BrowserRouter , Routes , Route} from "react-router-dom" ; 

function App() {
  //q1 state is used to store the state of answer for the question one 
  const [q1 , setq1 ] = useState(" ")  ; 
  function clicker(e){
    return(
      setq1(e.target.value) 
    )  ; 
  }
  //q2 state is used to store the state of answer for the question two 
  const [q2 , setq2 ] = useState(" ")  ; 
  function clicker2(e){
    return(
      setq2(e.target.value) 
    )  ; 
  }
  //q1 q2 states along with clicker functions are passed as props to use them in other page logic
  //React Router is used to navigate between pages 
   return(
     <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<One q1 ={q1} clicker={clicker} q2 ={q2} clicker2={clicker2}/>}/> 
      <Route path='/pagetwo' element={<Two q1= {q1} q2={q2} />} /> 
    </Routes>
  </BrowserRouter>
     </>
     
   )
}

export default App;
