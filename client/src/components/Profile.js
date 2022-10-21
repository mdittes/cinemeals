import React, {useState, useEffect} from 'react';
import {Card, Image, Modal, Form, Button} from 'semantic-ui-react';

function Profile( {user} ){
    const profileBody = {
        username: '',
        password: '',
        email: '',
        image: ''
    }

    const [curUser, setCurUser] = useState({})
    const [open, setOpen] = useState(false)
    let [profileData, setProfileData] = useState({...profileBody})

    useEffect(() => {
        let token = localStorage.getItem("token")
        fetch("http://localhost:3000/profile", {
            headers: {
                "token": `${token}`,
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            setCurUser(data)
        })
    }, [])

    const profileChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        })
    }

    function updateProfile(e) {
        e.preventDefault()
        let token = localStorage.getItem("token")
        fetch(`http://localhost:3000/users/${curUser.id}`, {
            method: "PATCH",
            headers: {
                "token": `${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...profileBody})
        })
        .then(res => res.json())
        .then((data) => {
            console.log(curUser)
            setCurUser(data)
        })
    }

    return (
        <>
            <h1>Profile</h1>
            <Card>
                <Card.Content>
                    <Card.Header>{curUser.username}</Card.Header>
                    <Image src={curUser.image} />
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<Button padding="100" >Update Profile</Button>}
                    >
                        <Modal.Header className="center aligned header">Update Profile</Modal.Header>
                        <Modal.Content>
                        <Form success onChange={e => profileChange(e)} onSubmit={updateProfile} >
                            <Form.Field>
                                <label>Username</label>
                                <Form.Input
                                    placeholder={curUser.username}
                                    name='username'
                                    value={profileData.username}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <Form.Input
                                    placeholder='Password'
                                    name='password'
                                    type='password'
                                    value={profileData.password}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Email Address</label>
                                <Form.Input
                                    placeholder={curUser.email}
                                    name='email'
                                    value={profileData.email}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Profile Picture</label>
                                <Form.Input
                                    placeholder={curUser.image}
                                    name='image'
                                    value={profileData.image}
                                />
                            </Form.Field>
                            {/* <Button type='submit'>Update</Button> */}
                        </Form>
                        </Modal.Content>
                        <Modal.Actions>
                                <Button color='black' onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                                <Button
                                    padding="100"
                                    color='blue'
                                    type='submit'
                                    onClick={() => setOpen(false)}
                                    positive
                                >Update
                                </Button>
                            </Modal.Actions>
                    </Modal>
                </Card.Content>
            </Card>
        </>
    )
}

export default Profile;