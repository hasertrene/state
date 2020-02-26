import React, { useState, useEffect } from 'react';
import './App.css';
import LikeCounter from './components/LikeCounter';
import Title from './components/Title';
// import AwesomeAnimals from './components/AwesomeAnimals'
import ArticleList from './components/ArticleList'


function App() {
  // const stateArray = useState('LO')
  // const value = stateArray[0]
  // const setValue = stateArray[1] // function

  return <main>
  <Title name="Rene" />
  <LikeCounter />
  {/* <AwesomeAnimals /> */}
  <ArticleList />
</main>
}

export default App;
