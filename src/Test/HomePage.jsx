import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <header className="home-header">
        <img src="https://play-lh.googleusercontent.com/8kJoKhrIJV8ml9ru61THWQIvx2AUlw0MX5Xa2SF9FHcLdLN4lmTKF-CV7U-HANadrts" className="home-logo" alt="logo" />
      </header>

      <>
        <h1>ALL INDIA NEET LEADER BOARD TEST</h1>

      </>

      <button onClick={() => navigate('/details')} className='next'>View Details</button>


      <button onClick={() => navigate('/loginPage')} className='button'>Start</button>

    </div>

  );
};

export default HomePage;
