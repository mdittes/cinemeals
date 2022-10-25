import React from 'react';
import {Item, Image, Label, Button} from 'semantic-ui-react'
import '../styles/CinemealCard.css'

function CinemealUserCard( {meal} ) {
    const {id, name, course, image, notes} = meal;

    return (
        <Item.Group divided>
            <Item className='border-1' style={{border:"1px solid black", padding: "15px"}}>
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
            <Button>x</Button>
            </Item.Content>
            </Item>
        </Item.Group>
    )
};

export default CinemealUserCard;