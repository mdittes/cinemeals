import React from 'react';
import {Menu, Button} from 'semantic-ui-react';
import '../styles/NavBar.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Homepage from './Homepage'
import Profile from './Profile'
import Cinemeals from './Cinemeals'
import Faves from './Faves'
import Login from './Login'

function NavBar() {
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
                    <Button>Logout</Button>
            </Menu.Item>
        </Menu>
        <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cinemeals" element={<Cinemeals />} />
            <Route path="/faves" element={<Faves />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        </>
    )
}

export default NavBar;