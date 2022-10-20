import React from 'react';
import {Item, Image, Label} from 'semantic-ui-react'
import '../styles/CinemealCard.css'

function CinemealCard( {meal} ) {
    const {id, name, course, image, notes} = meal;

    return (
        <Item.Group divided>
            <Item className='border-1'>
            <Item.Image src={meal.movie.poster} />
            <Item.Content>
                <Item.Header>{name}</Item.Header>
                <Item.Meta>
                <span>{meal.movie.title}</span>
                </Item.Meta>
                <Item.Description>{notes}</Item.Description>
                <Image style={{height: 150, width: 150, alignItems: 'center'}} src={image} centered/>
                <Item.Extra>
                <Label icon='film' content={meal.movie.genre}/>
                <Label icon='food' content={course}/>
                {/* <Label>{meal.tags.name}</Label> */}
                </Item.Extra>
            </Item.Content>
            </Item>
        </Item.Group>
    )
};

export default CinemealCard;