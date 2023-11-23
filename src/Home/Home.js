import React from 'react';
import '../App.css'
import img from './image/reactimg.jpg';
const Home = () => {
  return (
    <>
    <h1 className='text'>App Name </h1>
    <p>Demo</p>
    <h2>College Name</h2>
    <p>SKCET</p>
    <img src={img} alt='Not found'></img>
    <ol>
      <li>SKCET</li>
      <li>SKCT</li>
      <li>SKASC</li>
      </ol>
      <ul>
      <li>SKCET</li>
      <li>SKCT</li>
      <li>SKASC</li>
      </ul>
    </>
    )
}

export default Home