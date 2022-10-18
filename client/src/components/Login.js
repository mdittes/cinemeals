import React, {useState} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Divider, Icon } from 'semantic-ui-react';
import '../styles/Login.css';
import {useNavigate} from 'react-router-dom';
//import Signup from './Signup'

function Login() {
    const loginBody = {
        username: '',
        password: ''
    }

    let [loginData, setLoginData] = useState({...loginBody})
    let [user, setUser] = useState({username: ''})

    const navigate = useNavigate();

    const routeChange = () => {
        navigate('/signup');
    }

    function loginChange(e) {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const loginSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.token){
                localStorage.setItem('token', data.token)
                setUser(data.user)
                setLoginData(loginBody)
                navigate('/profile')
            }
        })
    }

    //need logout button or route (where should this fnx live?)
    // function logout() {
    //     fetch('http://localhost:3000/logout', {
    //         method: 'POST'
    //     })
    //     .catch(err => console.log(err))
    //     localStorage.removeItem('token')
    //     setUser({username: ''})
    // }

    return (
        <Segment className='ui container center aligned' style={{maxWidth: 1200, align: 'center'}}>
            <Grid columns={2} stackable textAlign='center'>
            <Divider vertical></Divider>
                <Grid.Row verticalAlign='middle'>
                    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                <Icon name='film' /> Sign In to Your Account
                            </Header>
                            <Form size='large' onChange={e => loginChange(e)} onSubmit={e => loginSubmit(e)}>
                                <Segment stacked>
                                <Form.Input 
                                    fluid 
                                    icon='user' 
                                    iconPosition='left' 
                                    placeholder='Username' 
                                    name="username"
                                    value={loginData.username}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name="password"
                                    value={loginData.password}
                                />
                                <Button color='teal' fluid size='large'>
                                    Login
                                </Button>
                                </Segment>
                            </Form>
                            <Message>
                                New to CineMeals? {' '} <Button onClick={routeChange}>Sign Up</Button>
                            </Message>
                        </Grid.Column>
                    </Grid>
                        <Grid.Column>
                            <Header icon>
                                <Image src='https://www.clipartmax.com/png/middle/257-2578675_entertainment-film-reel-film-roll-movie-theate-film-reel-icon-png.png' style={{width: 100, height:100}}/>
                                Welcome to CineMeals
                            </Header>
                            <h3>Some text about what this site is</h3>
                        </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
        
export default Login;