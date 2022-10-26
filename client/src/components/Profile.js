import React, {useState, useEffect} from 'react';
import {Card, Image, Modal, Form, Button, Grid} from 'semantic-ui-react';
import CinemealUserCard from './CinemealUserCard';

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
    const [userMeals, setUserMeals] = useState([])

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
        // let profileUpdate = {
        //     ...profileData,
        //     [e.target.name]: e.target.value
        // }
        fetch(`http://localhost:3000/users/${curUser.id}`, {
            method: "PATCH",
            headers: {
                "token": `${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...profileData})
        })
        .then(res => res.json())
        .then((data) => {
            console.log(curUser)
            setCurUser(data)
        })
    }

    function showUsersMeals(e) {
        fetch(`http://localhost:3000/users/${curUser.id}/cinemeals`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setUserMeals(data)
        })
    }

    const renderUserMeals = userMeals.map(userMeal =>
        <CinemealUserCard
            userMeal={userMeal}
            key={userMeal.id}
        />
    )

    return (
        <>
            <h2 >{curUser.username}'s Profile</h2>
                {/* <span > */}
            <Grid className='ui compact segment container' >
                <Grid.Column width={4}>
            <Card>
                <Card.Content>
                    <Card.Header>{curUser.username}</Card.Header>
                    <Image src={curUser.image} alt="profile picture"/>
                    <br />
                    <br />
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<Button padding="100" >Update Profile</Button>}
                        >
                        <Modal.Header className="center aligned header">Update Profile</Modal.Header>
                        <Modal.Content>
                        <Form onChange={e => profileChange(e)}  >
                            {/* <Form.Group> */}
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
                            {/* </Form.Group> */}
                            {/* <Button type='submit'>Update</Button> */}
                        </Form>
                        <Modal.Actions>
                                <Button color='black' onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                                <Button
                                    padding="100"
                                    color='blue'
                                    type='submit'
                                    // onClick={() => setOpen(false)}
                                    onClick={(e) => {updateProfile(e); setOpen(false)}}
                                    positive
                                    >Update
                                </Button>
                            </Modal.Actions>
                        </Modal.Content>
                    </Modal>
                </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column width={10}>
            <div>
            <Button onClick={(e) => showUsersMeals(e)} >My CineMeals</Button>
            <br />
            <br />
            </div>
            <div >
                {renderUserMeals}
            </div>
            </Grid.Column>
            </Grid>
            {/* </span> */}
        </>
    )
}
//style={{display:"flex", flexWrap:"wrap", width:"80vw", justifyContent:"center", alignContent:"center", gap:"2rem"}}

export default Profile;