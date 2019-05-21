import React from 'react';
const munrosData = require('../data/munros_data.js');
// import './Munro.css';

const PopulateList = (props) => {

  const munrosList = munrosData.munrosData;
  const handlePopulateClick = (evt) => {
    props.addMunros(munrosList);
    evt.target.disabled = true;
  }

  return (
    <div className='populate'>
      <button onClick={ handlePopulateClick }>Populate list</button>
    </div>
  )
}

export default PopulateList;
