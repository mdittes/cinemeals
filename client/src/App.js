import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
//import Login from './components/Login';
import {useNavigate} from 'react-router-dom'

function App() {

  const navigateHome = useNavigate('/');

  return (
    <div className="App">
      <h1>
        CineMeals
      </h1>
      <NavBar />
      {/* <Login /> */}

    </div>
  );
}

export default App;
