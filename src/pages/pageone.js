import React from "react";
import "../App.css" ; 
import {Link} from "react-router-dom";

export default function One(props){
  const q1 = props.q1 ; 
  const  clicker = props.clicker ; 
  const q2 = props.q2 ; 
  const clicker2 = props.clicker2
 
  return (
    <div className="background">
    <h1 className='title'>Respondent travel profile </h1>
    <div className='bod'>
      
      <div className="pageone">
      <h6>1. What is your most frequently used means of travel from your home to work location?</h6>
      <form>
      <div className='container'>
        <input type="radio" name="q1" value="Bus"   onChange={clicker}/><label>Bus</label>
        <br/>
        <input type="radio" name="q1" value="Metro"   onChange={clicker}/><label>Metro</label>
        <br/>
        <input type="radio" name="q1" value="Own two wheeler"   onChange={clicker}/><label>Own two wheeler</label>
        <br/>
        <input type="radio" name="q1" value="Own car"  onChange={clicker} /><label>Own car</label>
        <br/>
        <input type="radio" name="q1" value="Walk / Bicycle"  onChange={clicker}/><label>Walk / Bicycle</label>
        <br/>
        <input type="radio" name="q1" value="Auto" onChange={clicker}/><label>Auto</label>
        <br/>
        <input type="radio" name="q1" value="App"   onChange={clicker}/><label>App</label>
        </div>
      </form>
      </div>
      <div className="pageone">
      <h6>2. What is the total distance between your home and workplace?</h6>
      <form>
      <div className='container'>
        <input type="radio" name="q2" value="1"   onChange={clicker2}/><label>less than 5 km</label>
        <br/>
        <input type="radio" name="q2" value="2"   onChange={clicker2}/><label>5 - 10 km</label>
        <br/>
        <input type="radio" name="q2" value="3"   onChange={clicker2}/><label>10 -15km </label>
        <br/>
        <input type="radio" name="q2" value="4"  onChange={clicker2} /><label>15 - 20 km</label>
        <br/>
        <input type="radio" name="q2" value="5"  onChange={clicker2}/><label>20 - 25km</label>
        <br/>
        <input type="radio" name="q2" value="6" onChange={clicker2}/><label>25km or above</label>
         
        </div>
      </form>
      </div>
      {q1 !== " " && q2 !== " " && ( <Link to="/pagetwo"><button className="btn"><i class="fa-solid fa-arrow-right fa-2xl"></i></button></Link>) }
     
    </div>
    
    </div>
  );
}