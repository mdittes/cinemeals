import React, {useState} from 'react';
import {Menu, Button} from 'semantic-ui-react';
import '../styles/NavBar.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Homepage from './Homepage'
import Profile from './Profile'
import Cinemeals from './Cinemeals'
import Faves from './Faves'
import Login from './Login'
import Signup from './Signup'

function NavBar() {
    const [user, setUser] = useState({username: ''})

    function logout() {
        fetch('http://localhost:3000/logout', {
            method: 'POST'
        })
        .catch(err => console.log(err))
        localStorage.removeItem('token')
        setUser({username: ''})
    }

    return (
        <>
        <Menu>
            <Menu.Item as={NavLink} to="/homepage">
                <img alt="logo" src="https://www.clipartmax.com/png/middle/257-2578675_entertainment-film-reel-film-roll-movie-theate-film-reel-icon-png.png"/>
            </Menu.Item>
            <Menu.Item 
                link as={NavLink} name='Profile' to="/profile"
                />
            <Menu.Item 
                link name='CineMeals' href="/cinemeals"
                />
            <Menu.Item 
                link name='Faves' href="/faves"
                />
            <Menu.Item
                link className="right item" name='Log In' href="/login">
                    <Button onClick={logout} >Log In</Button>
            </Menu.Item>
        </Menu>
        <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/profile" element={<Profile user={user}/>} />
            <Route path="/cinemeals" element={<Cinemeals />} />
            <Route path="/faves" element={<Faves />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        </>
    )
}

export default NavBar;