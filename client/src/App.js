import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Homepage from './components/Homepage'
import Profile from './components/Profile'
import Cinemeals from './components/Cinemeals'
import Faves from './components/Faves'
import Signup from './components/Signup'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [user, setUser] = useState({username: ''});
  //const [curUser, setCurUser] = useState([])

  useEffect(() => {
    let token = localStorage.getItem('token')
    if(token && !user.username){
        fetch('http://localhost:3000/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            if(data.user){
                setUser(data.user)
                //navigate('/profile')
            }
        })
    }
  }, [])
  
  function updateUserLogin(user) {
    setUser({username: ''})
  }

  return (
    <div className="App">
        <h1>
          CineMeals
        </h1>
      <NavBar cur_user={user}/>
      <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile updateUserLogin={updateUserLogin} />} />
            <Route path="/cinemeals" element={<Cinemeals />} />
            <Route path="/faves" element={<Faves />} />
            <Route path="/login" element={<Login updateUserLogin={updateUserLogin}/>} />
            <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Login updateUserLogin={updateUserLogin}/> */}

    </div>
  );
}

export default App;
