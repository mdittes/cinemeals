import React, {useState} from 'react'
import {Button, Form, Segment, Header, Icon} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom';

function Signup() {
    const signupBody = {
        username: '',
        password: '',
        email: '',
        image: ''
    }

    const navigate = useNavigate();

    let [signupData, setSignupData] = useState({...signupBody})
    let [user, setUser] = useState({username: ''})

    const signupChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        })
    }

    const signupSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupData)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token)
            setUser(data.user)
            setSignupData({...signupBody})
            if(data.token) {
            navigate('/profile')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        //<h1>Signup</h1>
        <Segment className='ui container center aligned' style={{maxWidth: 600, align: 'center'}}>
            <Header as='h2' color='teal' textAlign='center'>
                <Icon name='film' /> Sign Up for CineMeals
            </Header>
            <Form success onChange={e => signupChange(e)} onSubmit={e => signupSubmit(e)} >
                <Form.Field>
                    <label>Username</label>
                    <Form.Input
                        placeholder='Username' 
                        name='username'
                        value={signupData.username}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Form.Input
                        placeholder='Password' 
                        name='password'
                        type='password'
                        value={signupData.password}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <Form.Input
                        placeholder='Email Address'
                        name='email'
                        value={signupData.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Profile Picture</label>
                    <Form.Input
                        placeholder='Profile Picture'
                        name='image'
                        value={signupData.image}
                    />
                </Form.Field>
                {/* <Message
                    success
                    header='Signup Completed'
                    content='Welcome to CineMeals!'
                /> */}
                <Button type='submit'>Submit</Button>
            </Form>
        </Segment>
    )
}

export default Signup;