import React, {useState, useEffect} from 'react';
import CinemealCard from './CinemealCard';
import {Modal, Button, Form, Dropdown} from 'semantic-ui-react';

function Cinemeals() {
    const createMovieBody = {
        title: '',
        poster: '',
        genre: '',
    }

    const createMealBody = {
        name: '',
        course: '',
        image: '',
        notes: ''
    }

    // const createTagBody = {
    //     name: ''
    // }

    let [createMovieData, setCreateMovieData] = useState({...createMovieBody})
    let [createMealData, setCreateMealData] = useState({...createMealBody})
    // let [createTagData, setCreateTagData] = useState({...createTagBody})
    const [meals, setMeals] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/cinemeals')
        .then(res => res.json())
        .then(data => setMeals(data))
    }, []);

    const renderMeals = meals.map(meal =>
        <CinemealCard 
            key={meal.id}
            meal={meal}
        />
        )

    const movieChange = (e) => {
        setCreateMovieData({
            ...createMovieData,
            [e.target.name]: e.target.value
        })
    }

    const mealChange = (e) => {
        setCreateMealData({
            ...createMealData,
            [e.target.name]: e.target.value
        })
    }

    // const tagChange = (e) => {
    //     setCreateTagData({
    //         ...createTagData,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const createMealSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/cinemeals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                createMovieData,
                createMealData,
                //createTagData
            )
        })
        .then(res => res.json())
        .then(data => console.log(data))
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

    return (
        <>
        <h1>Cinemeals</h1>
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button floated="right" padding="100" >Create a CineMeal</Button>}
        >
            <Modal.Header className="center aligned header">Create a CineMeal</Modal.Header>
            <Modal.Content>
                <Form
                    onChange={e => {movieChange(e); mealChange(e)}} 
                    onSubmit={e => createMealSubmit(e)}
                >
                <Form.Group unstackable widths={2}>
                <Form.Field>
                    <label>Movie Title</label>
                    <Form.Input
                        placeholder='Movie Title' 
                        name='title'
                        value={createMovieData.title}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Movie Genre</label>
                    <Dropdown
                        placeholder='Movie Genre'
                        name='genre'
                        fluid
                        selection
                        options={genreOptions}
                        value={createMovieData.genre}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Movie Poster</label>
                    <Form.Input
                        placeholder='Movie Poster' 
                        name='poster'
                        value={createMovieData.poster}
                    />
                </Form.Field>
                </Form.Group>
                <Form.Group unstackable widths={2}>
                <Form.Field>
                    <label>Food/Drink Name</label>
                    <Form.Input
                        placeholder='Food/Drink Name' 
                        name='name'
                        value={createMealData.name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Course</label>
                    <Dropdown
                        placeholder='Course'
                        name='course'
                        fluid
                        selection
                        options={courseOptions}
                        value={createMealData.course}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Food/Drink Image</label>
                    <Form.Input
                        placeholder='Food/Drink Image' 
                        name='image'
                        value={createMealData.image}
                    />
                </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Notes</label>
                    <Form.TextArea
                        placeholder='Notes'
                        name='notes'
                        value={createMealData.notes}
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
                    onClick={() => setOpen(false)}
                    positive
                >Create
                </Button>
            </Modal.Actions>
        </Modal>
            <div style={{display:"flex", flexWrap: "wrap", width:"100vw", alignItems:"center", justifyContent:"center"}}>
                <div style={{display:"flex", flexWrap:"wrap", width:"80vw", justifyContent:"center", alignContent:"center", gap:"2rem"}}>
                    <div>
                        {renderMeals}
                    </div>
                </div>
             </div>
        </>
    )
}

export default Cinemeals;