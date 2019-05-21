import React from 'react';
import './Munro.css';

const Munro = (props) => {
  const handleRemoveClick = (evt) => {
    props.removeMunro(props.index);
  }
  const {name, height, gridref} = props.munroData;

  return (
    <div className='munro'>
      <button onClick={ handleRemoveClick }>X</button>
      <h4>{name}</h4>
      <p>Height: {height}</p>
      <p>Grid reference: {gridref}</p>
    </div>
  )
}

export default Munro;
