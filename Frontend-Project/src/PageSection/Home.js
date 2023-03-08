import React from 'react';
import resumePng from '../PageSection/Resume/resume.png';
import { Link } from 'react-router-dom';
import './Home.css';
function Home() {
  return (
    <div className='home-container'>
      <h1 className='title'>Welcome To Resume Builder</h1>

      <img src={resumePng} alt='Resume Template' className='img' />

      <h2>Use Below Button To make Resume Using Above Template</h2>

      <button className='btn'>
        <Link to='/details'>Fill Details</Link>
      </button>
    </div>
  );
}
export default Home;

// This is Home Page Where template is shown to user,
// Using it user can make amazing resume for him,
// A button is provided to redirect resume building page
