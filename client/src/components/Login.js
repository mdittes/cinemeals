import React, {useState, useEffect} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Divider, Icon } from 'semantic-ui-react';
import '../styles/Login.css'

function Login() {
    const loginBody = {
        username: '',
        password: ''
    }
    
    let [loginData, setLoginData] = useState({...loginBody})
    let [user, setUser] = useState({username: ''})

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
                }
            })
        }
    }, [])

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
            setUser(data.user)
            localStorage.setItem('token', data.token)
        })
    }

    return (
        <Segment className='welcomeSegment' centered style={{maxWidth: 1200}}>
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
                                New to us? <a href='/signup'>Sign Up</a>
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