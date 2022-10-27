import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Homepage from './components/Homepage'
import Profile from './components/Profile'
import Cinemeals from './components/Cinemeals'
import Find from './components/Find'
import Signup from './components/Signup'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [user, setUser] = useState({username: ''});
  //const [curUser, setCurUser] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem('token')
    if(token && !user.username){
        fetch('http://localhost:3000/profile', {
            method: 'GET',
            headers: {
                'token': `${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
          // if(data.user){
                //console.log(data)
                setUser(data)
                setIsLoggedIn(true)
            }
        )
    }
  }, [])

  return (
    <div className="App">
        <h1 style={{color: 'white'}}>
          <img height="50" width="50" src="https://i.imgur.com/kRrakiB.jpg"/>CineMeals
        </h1>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile user={user}  />} /> 
            <Route path="/cinemeals" element={<Cinemeals user={user}/>} />
            <Route path="/find" element={<Find />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
