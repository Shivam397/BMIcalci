import React, { useState } from 'react';
import './App.css';



const App = () => {
  const [val1,setValue1] = useState();
  const [val2,setValue2] = useState();
  const [state,setState] = useState(false);

  const setVal1 = (event) => {
    setValue1(event.target.value);
  }

  const setVal2 = (event) => {
    setValue2(event.target.value);
  }

  const showBmi = () => {
    setState(true);
  }

  const stat = () => {
    if(state === true){
      if(bmi <= 18.5){
        return "you are underweight";
      }else if(bmi > 18.5 && bmi <= 24.9){
        return "you are normal";
      }else if(bmi >= 25 && bmi <= 29.9){
        return "you are overweight";
      }else if(bmi > 30){
        return "obesity";
      }
    }
  }

  const statement = () => {
    if(state === true){
      if(bmi <= 18.5){
        return 'https://www.runtastic.com/blog/en/how-to-gain-weight-healthily/';
      }else if(bmi > 18.5 && bmi <= 24.9){
        return 'https://www.active.com/fitness/articles/5-simple-tips-for-fitness-success';
      }else if(bmi >= 25 && bmi <= 29.9){
        return 'https://www.healthline.com/health/how-to-prevent-obesity';
      }else if(bmi > 30){
        return 'https://www.heart.org/en/healthy-living/healthy-eating/losing-weight/extreme-obesity-and-what-you-can-do';
      }
    }
    else{
      return 'https://www.power-systems.com/shop/category/steps';
    }
  }

  const show = () => {
    if(state === true){
      return bmi;
    }else{
      return "......";
    }
  }

  let height = val2**2;
  let bmi = val1/height;


  
  return(
    <>
      <div className='container'>
        <h1>BMI CALCULATOR </h1>
        <input type='number' placeholder='enter weight in kg' onChange={setVal1} required/><br/>
        <input type='number' placeholder='enter height in meters' onChange={setVal2} required/><br/>
        <button onClick={showBmi} style={{marginLeft:'150px'}}> Calculate BMI </button><br/>
        <span>
          <p> Calculated BMI is {show()} </p>
          <p> {stat()} </p>
        </span>
        <a href={statement()} target='_blank' style={{marginLeft:'50px',color:'red'}}>Here is the steps to look forward for you👍</a>
      </div>
    </>
  );
}

export default App;
