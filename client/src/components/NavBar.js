import React, {useState} from 'react';
import {Menu, Button} from 'semantic-ui-react';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom'

function NavBar( {isLoggedIn, setIsLoggedIn} ) {
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
        <Menu className='ui.menu'>
            <Menu.Item as={NavLink} to="/" style={{background: 'black'}}>
                <img alt="logo" src="https://i.imgur.com/kRrakiB.jpg"/>
            </Menu.Item>
            <Menu.Item 
                link as={NavLink} name='Profile' to="/profile" className="ui.menu.item"
                />
            <Menu.Item 
                link as={NavLink} name='CineMeals' to="/cinemeals"
                />
            <Menu.Item 
                link as={NavLink} name='Find' to="/find"
                />
            <Menu.Item
                link className="right item" name='Log In' as={NavLink} to="/login" style={{background: 'black'}}>
                    <Button onClick={logout} >{isLoggedIn ? "Log Out" : "Log In"}</Button>
            </Menu.Item>
        </Menu>
        </>
    )
}

export default NavBar;