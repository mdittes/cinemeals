import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>CineMeals</h1>
      <Login />

    </div>
  );
}

export default App;
