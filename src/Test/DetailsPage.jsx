import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 

const DetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="details-container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        &#8592; {/* Unicode character for left arrow */}
      </div>
      <h1>Details Page</h1>
      <p>Add your details here.</p>
    </div>
  );
};

export default DetailsPage;
