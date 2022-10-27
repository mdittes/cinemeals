import React, {useState} from 'react';
import {Item, Image, Label, Button, Modal, Form, Dropdown} from 'semantic-ui-react'
import '../styles/CinemealCard.css';

function CinemealUserCard( {userMeal} ) {
    const {id, name, course, image, notes} = userMeal;

    const updateMovieBody = {
        title: '',
        poster: '',
    }

    const updateMealBody = {
        name: '',
        image: '',
        notes: ''
    }

    let [updateMovieData, setUpdateMovieData] = useState({...updateMovieBody})
    let [updateMealData, setUpdateMealData] = useState({...updateMealBody})
    const [open, setOpen] = useState(false)
    const [selectedGenre, setSelectedGenre] = useState('')
    const [selectedCourse, setSelectedCourse] = useState('')

    const movieChange = (e) => {
        setUpdateMovieData({
            ...updateMovieData,
            [e.target.name]: e.target.value,
        })
    }

    const mealChange = (e) => {
        setUpdateMealData({
            ...updateMealData,
            [e.target.name]: e.target.value
        })
    }

    const updateMealSubmit = (e) => {
        e.preventDefault()
        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/cinemeals/${userMeal.id}`, {
            method: 'PATCH',
            headers: {
                "token": `${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...updateMovieData,
                genre: selectedGenre,
                ...updateMealData,
                course: selectedCourse
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUpdateMovieData(data)
            setUpdateMealData(data)
                })
    }

    const genreOptions = [
        {key: "Action", text: "Action", value: "Action"},
        {key: "Comedy", text: "Comedy", value: "Comedy"},
        {key: "Documentary", text: "Documentary", value: "Documentary"},
        {key: "Drama", text: "Drama", value: "Drama"},
        {key: "Family", text: "Family", value: "Family"},
        {key: "Horror", text: "Horror", value: "Horror"},
        {key: "International", text: "International", value: "International"},
        {key: "Romance", text: "Romance", value: "Romance"},
        {key: "Science Fiction", text: "Science Fiction", value: "Science Fiction"},
        {key: "Thriller", text: "Thriller", value: "Thriller"}
    ]

    const courseOptions = [
        {key: "Appetizer", text: "Appetizer", value: "Appetizer"},
        {key: "Beverage", text: "Beverage", value: "Beverage"},
        {key: "Dessert", text: "Dessert", value: "Dessert"},
        {key: "Entree", text: "Entree", value: "Entree"},
        {key: "Side", text: "Side", value: "Side"},
        {key: "Snack", text: "Snack", value: "Snack"}
    ]

    function handleDeleteMeal() {
        let token = localStorage.getItem("token")
        fetch(`http://localhost:3000/cinemeals/${userMeal.id}`, {
            method: 'DELETE',
            headers: {
                "token": `${token}`,
                //"Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then((data) => console.log(data))
        .catch(e => console.error(e))
    }

    return (
        <div>
            <Item.Group divided>
                <Item className='border-1' style={{border:"1px solid black", padding: "20px", background: 'white'}}>
                <Item.Image src={userMeal.movie.poster} />
                <Item.Content>
                    <Item.Header>{name}</Item.Header>
                    <Item.Meta>
                    <span>{userMeal.movie.title}</span>
                    </Item.Meta>
                    <Item.Description>{notes}</Item.Description>
                    <Image style={{height: 150, width: 150, alignItems: 'center'}} src={image} centered/>
                    <Item.Extra>
                    <Label icon='film' content={userMeal.movie.genre}/>
                    <Label icon='food' content={course}/>
                    {/* <Label>{meal.tags.name}</Label> */}
                    </Item.Extra>
                </Item.Content>
                </Item>
            </Item.Group>
            <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button padding="100" >Update</Button>}
        >
            <Modal.Header className="center aligned header">Update CineMeal</Modal.Header>
            <Modal.Content>
                <Form
                    onChange={e => {movieChange(e); mealChange(e)}}
                >
                <Form.Group unstackable widths={2}>
                <Form.Field>
                    <label>Movie Title</label>
                    <Form.Input
                        placeholder={userMeal.movie.title}
                        name='title'
                        value={updateMovieData.title}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Movie Genre</label>
                    <Form.Input>
                    <Dropdown
                        placeholder={userMeal.movie.genre}
                        name='genre'
                        fluid
                        selection
                        options={genreOptions}
                        onChange={(e, data) => setSelectedGenre(data.value)}
                        value={selectedGenre}
                    />
                    </Form.Input>
                </Form.Field>
                <Form.Field>
                    <label>Movie Poster</label>
                    <Form.Input
                        placeholder={userMeal.movie.poster}
                        name='poster'
                        value={updateMovieData.poster}
                    />
                </Form.Field>
                </Form.Group>
                <Form.Group unstackable widths={2}>
                <Form.Field>
                    <label>Food/Drink Name</label>
                    <Form.Input
                        placeholder={name}
                        name='name'
                        value={updateMealData.name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Course</label>
                    <Form.Input>
                    <Dropdown
                        placeholder={course}
                        name='course'
                        fluid
                        selection
                        options={courseOptions}
                        onChange={(e, data) => setSelectedCourse(data.value)}
                        value={selectedCourse}
                    />
                    </Form.Input>
                </Form.Field>
                <Form.Field>
                    <label>Food/Drink Image</label>
                    <Form.Input
                        placeholder={image}
                        name='image'
                        value={updateMealData.image}
                    />
                </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Notes</label>
                    <Form.TextArea
                        placeholder={notes}
                        name='notes'
                        value={updateMealData.notes}
                    />
                </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button
                    color='blue'
                    type='submit'
                    onClick={(e) => {updateMealSubmit(e); setOpen(false)}}
                    positive
                >Update
                </Button>
            </Modal.Actions>
        </Modal>
            <Button onClick={handleDeleteMeal}>Delete</Button>
            <br />
            <br />
        </div>
    )
};

export default CinemealUserCard;