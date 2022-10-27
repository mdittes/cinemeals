import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from 'semantic-ui-react'

function Homepage() {

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }
    const goToSignup = () => {
        navigate('/signup')
    }

    return (
        <>
        <h1 style={{color: 'white'}}>Welcome to CineMeals!</h1>
        <span>
            <Button onClick={goToLogin}>Log In</Button>
            <Button onClick={goToSignup}>Sign Up</Button>
        </span>
        <br />
        <br />
        <img src="https://media.tenor.com/kbeuTzyBXOEAAAAC/countdown-54321.gif"/>
        </>
    )
}

export default Homepage;