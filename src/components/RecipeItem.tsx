import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function RecipeItem(props: PropsWithChildren<any>) 
{

    return (
        <ul id={`${props.id}`}>
            <li onClick={props.selectItem}>
                <p className="id">{props.id}</p>
                <p className="field1">{props.name}</p>
                <p className="field2">{props.ingredients}</p>
                <p className="field3">{props.instructions}</p>
                <p className="field4">{props.cookingTime}</p>
                <p className="field5">{props.publicationDate}</p>
                <Button className="deleteButton" variant="danger" onClick={props.deleteItem}>Delete</Button>
            </li>
        </ul>
    )

}