import Card from './Card';
import React from 'react';

export default function Cards(props) {
return (
    <div>
    { props.characters && 
    props.characters.map ((character) => {
        return(
            <Card
            key = {character.index}
            name = {character.name}
            status = {character.status}
            species = {character.species}
            gender = {character.gender}
            origin = {character.origin.name}
            image = {character.image}
            onClose= {() => window.alert ("cierre de card")
            } 
            ></Card>
        );
    })};
</div>
);
};