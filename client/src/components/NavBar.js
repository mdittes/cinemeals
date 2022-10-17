import React from 'react';
import {Menu} from 'semantic-ui-react';
import '../styles/NavBar.css';
//import { Routes, Route } from 'react-router-dom'

function NavBar() {
    return (
        //<Routes>
        <Menu>
            <Menu.Item href="/homepage">
            {/* <Route path='/homepage' element={<Homepage />} /> */}
                <img alt="logo" src="https://www.clipartmax.com/png/middle/257-2578675_entertainment-film-reel-film-roll-movie-theate-film-reel-icon-png.png"/>
            </Menu.Item>
            <Menu.Item 
                link name='Profile' href="/profile"
                />
            <Menu.Item 
                link name='CineMeals' href="/cinemeals"
                />
            <Menu.Item 
                link name='Faves' href="/faves"
                />
            <Menu.Item
                link className="right item" name='Log In' href="/login"
                />
        </Menu>
        //</Routes>
    )
}

export default NavBar;