import React, { useState } from 'react';

const Card = ({ title }) => {
    
    return (
      <div className="card">
        <h3>{title}</h3>
        {/* <h3>{description}</h3> */}
      </div>
    );
  };

export default Card;