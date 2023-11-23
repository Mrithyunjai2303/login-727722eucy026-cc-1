import React from 'react';
import './App.css';
import Login from './login/Login';
import Home from './Home/Home'
import SignUp from './signup/SignUp';

const func1=()=>{
  if(window.location.pathname==="/Home"){
    return <Home/>
  }
}
const func2=()=>{
  if(window.location.pathname==="/Login"){
    return <Login/>
  }
}
const func3=()=>{
  if(window.location.pathname==="/"){
    return <SignUp/>
  }
}
const App=()=>{
  return(
    <div className='ul container'>
    {func1()}
    {func2()}
    {func3()}
    </div>
  )
}

export default App;
