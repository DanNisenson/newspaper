import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import React, { useState } from 'react'


function App() {
  const [category, setCategory] = useState('general');

  const updateCategory = (newCategory) => {
    console.log(newCategory)
    setCategory(newCategory);
  }

  return (
    <div className="App">
     <Header updateCategory={updateCategory} />
     <Main category={category} />
    </div>
  );
}

export default App;

// https://newsapi.org/
//  v2/everything?
//  v2/top-headlines?
// &apiKey=5478f91e35d843b48c4c219e441a01cd