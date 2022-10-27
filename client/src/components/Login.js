import React, {useState} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';
import '../styles/Login.css';
import {useNavigate} from 'react-router-dom';

function Login({setIsLoggedIn}) {
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
                //updateUserLogin(data.user)
                setLoginData(loginBody)
                setIsLoggedIn(true)
                setUser(data.user)
                navigate('/profile')
            }
        })
    }

    return (
        <Segment className='ui compact segment container center aligned' style={{maxWidth: 1200, align: 'center', background: "#C9A9A6"}}>
            <Grid columns={2} stackable centered textAlign='center'>
            {/* <Divider vertical></Divider> */}
                <Grid.Row verticalAlign='middle'>
                    <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='maroon' textAlign='center'>
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
                                <Button color='maroon' fluid size='large'>
                                    Login
                                </Button>
                                </Segment>
                            </Form>
                            <Message>
                                New to CineMeals? {' '} <Button onClick={routeChange}>Sign Up</Button>
                            </Message>
                        </Grid.Column>
                    </Grid>
                    {/* <Grid> */}
                        <Grid.Column className='ui center aligned grid'>
                            <Header as='h1' icon textAlign="center">
                                <Image src='https://i.imgur.com/dyVyJpx.jpeg' style={{width: 100, height:100}}/>
                                Welcome to CineMeals
                            </Header>
                            <div>A site for film and food pairings. Need date night ideas? Want to spruce up a family night? Find out what movie will pair best with that steak you prepared or which cocktail goes best with your next Netflix binge. Sign up and share your own CineMeals pairings today!</div>
                        </Grid.Column>
                    {/* </Grid> */}
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
        
export default Login;