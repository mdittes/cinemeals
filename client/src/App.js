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
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //const navigate = useNavigate();

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
            console.log(data)
            if(data.user){
                setUser(data.user)
                setIsLoggedIn(true)
                //navigate('/profile')
            }
        })
    }
  }, [])
  
  // function updateUserLogin(data) {
  //   setUser({username: ''})
  // }

  return (
    <div className="App">
        <h1>
          <img height="50" width="50" src="https://i.imgur.com/dyVyJpx.jpeg"/>CineMeals
        </h1>
      <NavBar cur_user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile user={user}  />} /> 
            <Route path="/cinemeals" element={<Cinemeals user={user}/>} />
            <Route path="/faves" element={<Faves />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
      {/* <Login updateUserLogin={updateUserLogin}/> */}

    </div>
  );
}

export default App;
