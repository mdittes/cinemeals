import React, {useState, useEffect} from 'react';
import {Menu, Grid} from 'semantic-ui-react';
import CinemealCard from './CinemealCard';

function Find() {
    const [activeGenre, setActiveGenre] = useState("All")
    const [activeCourse, setActiveCourse] = useState("All")
    const [meals, setMeals] = useState([])
    const [selectedCourse, setSelectedCourse] = useState('All')
    const [selectedGenre, setSelectedGenre] = useState('All')

    useEffect(() => {
        fetch('http://localhost:3000/cinemeals')
        .then(res => res.json())
        .then(data => setMeals(data))
    }, []);

    const filteredMeals = meals
        .filter((meal) => 
        (selectedCourse === 'All' || meal.course === selectedCourse))
        .filter((meal) =>
        (selectedGenre === 'All' || meal.movie.genre === selectedGenre)
    )

    function handleCourseClick(e) {
        setSelectedCourse(e.target.textContent)
        setActiveCourse(e.target.textContent)
    }

    function handleGenreClick(e) {
        setSelectedGenre(e.target.textContent)
        setActiveGenre(e.target.textContent)
    }

    const renderFilteredMeals = filteredMeals.map(meal =>
      <CinemealCard
        meal={meal}
        key={meal.id}
        />  
    )

    return (
        <>
            <br />
            <br />
            <Grid className='ui compact segment container' >
                <Grid.Column width={4}>
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>Movie Genres</Menu.Header>

                    <Menu.Menu>
                    <Menu.Item
                            name='All'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "All"}
                        />
                        <Menu.Item
                            name='Action'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "Action"}
                        />
                        <Menu.Item 
                            name='Comedy'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "Comedy"}
                        />
                        <Menu.Item 
                            name='Documentary'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "Documentary"}
                        />
                        <Menu.Item 
                            name='Drama'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "Drama"}
                        />
                        <Menu.Item 
                            name='Family'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "Family"}
                        />
                        <Menu.Item 
                            name='Horror'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "Horror"}
                        />
                        <Menu.Item 
                            name='International'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "International"}
                        />
                        <Menu.Item 
                            name='Romance'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "Romance"}
                        />
                        <Menu.Item 
                            name='Science Fiction'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "Science Fiction"}
                        />
                        <Menu.Item 
                            name='Thriller'
                            onClick={(e) => {handleGenreClick(e)}}
                            active={activeGenre === "Thriller"}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Meal Courses</Menu.Header>

                    <Menu.Menu>
                    <Menu.Item 
                            name='All'
                            onClick={(e) => {handleCourseClick(e)}}
                            active={activeCourse === "All"}
                        />
                        <Menu.Item 
                            name='Appetizer'
                            onClick={(e) => {handleCourseClick(e)}}
                            active={activeCourse === "Appetizer"}
                        />
                        <Menu.Item 
                            name='Beverage'
                            onClick={(e) => {handleCourseClick(e)}}
                            active={activeCourse === "Beverage"}
                        />
                        <Menu.Item 
                            name='Dessert'
                            onClick={(e) => {handleCourseClick(e)}}
                            active={activeCourse === "Dessert"}
                        />
                        <Menu.Item 
                            name='Entree'
                            onClick={(e) => {handleCourseClick(e)}}
                            active={activeCourse === "Entree"}
                        />
                        <Menu.Item 
                            name='Side'
                            onClick={(e) => {handleCourseClick(e)}}
                            active={activeCourse === "Side"}
                        />
                        <Menu.Item 
                            name='Snack'
                            onClick={(e) => {handleCourseClick(e)}}
                            active={activeCourse === "Snack"}
                        />
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
            </Grid.Column>
            <Grid.Column width={10}>
        <div>
            {renderFilteredMeals}
        </div>
            </Grid.Column>
        </Grid>
        </>
    )
}

export default Find;