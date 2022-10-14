import React from 'react';
import {Menu} from 'semantic-ui-react';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <Menu>
            <Menu.Item href="/homepage">
                <img alt="logo" src="https://www.clipartmax.com/png/middle/257-2578675_entertainment-film-reel-film-roll-movie-theate-film-reel-icon-png.png"/>
            </Menu.Item>
            <Menu.Item 
                name='Profile' href="/profile"
            />
            <Menu.Item 
                name='CineMeals' href="/cinemeals"
            />
            <Menu.Item 
                name='Faves' href="/faves"
            />
            <Menu.Item
                className="right item" name='Log In' href="/login"
            />
        </Menu>
    )
}

export default NavBar;