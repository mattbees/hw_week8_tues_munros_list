import React from 'react';
import './App.css';
import MunroFormContainer from './containers/MunroFormContainer';
import MunroListContainer from './containers/MunroListContainer';
import PopulateListContainer from './containers/PopulateListContainer';

function App() {
  return (
    <>
      <h1>Munros</h1>
      <MunroFormContainer />
      <PopulateListContainer />
      <MunroListContainer />
    </>
  );
}

export default App;
