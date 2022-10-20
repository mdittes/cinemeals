import React, {useState} from 'react';
import {Menu, Button} from 'semantic-ui-react';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom'

function NavBar( {cur_user, isLoggedIn, setIsLoggedIn} ) {
    const [user, setUser] = useState({username: ''})

    function logout() {
        fetch('http://localhost:3000/logout', {
            method: 'POST'
        })
        .catch(err => console.log(err))
        localStorage.removeItem('token')
        setUser({username: ''})
        setIsLoggedIn(false)
    }

    return (
        <>
        <Menu>
            <Menu.Item as={NavLink} to="/">
                <img alt="logo" src="https://www.clipartmax.com/png/middle/257-2578675_entertainment-film-reel-film-roll-movie-theate-film-reel-icon-png.png"/>
            </Menu.Item>
            <Menu.Item 
                link as={NavLink} name='Profile' to="/profile"
                />
            <Menu.Item 
                link as={NavLink} name='CineMeals' to="/cinemeals"
                />
            <Menu.Item 
                link as={NavLink} name='Faves' to="/faves"
                />
            <Menu.Item
                link className="right item" name='Log In' as={NavLink} to="/login">
                    <Button onClick={logout} >{isLoggedIn ? "Log Out" : "Log In"}</Button>
            </Menu.Item>
        </Menu>
        </>
    )
}

export default NavBar;