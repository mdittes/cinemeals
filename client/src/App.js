import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
//import Login from './components/Login';
import {useNavigate} from 'react-router-dom'

function App() {
  const [user, setUser] = useState({username: ''});

  useEffect(() => {
    let token = localStorage.getItem('token')
    if(token && !user.username){
        fetch('http://localhost:3000/profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.user){
                setUser(data.user)
                //navigate('/profile')
            }
        })
    }
  }, [])

  const navigateHome = useNavigate('/');

  return (
    <div className="App">
        <h1>
          CineMeals
        </h1>
      <NavBar cur_user={user}/>
      {/* <Login /> */}

    </div>
  );
}

export default App;
