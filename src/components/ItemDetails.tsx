import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function ItemDetails(props: PropsWithChildren<any>) 
{

    return (
        <ul id={`${props.id}`}>
            <li><p className="id">{props.id}</p></li>
            <li><p className="field1">{props.name}</p></li>
            <li><p className="field2">{props.ingredients}</p></li>
            <li><p className="field3">{props.instructions}</p></li>
            <li><p className="field4">{props.cookingTime}</p></li>
            <li><p className="field5">{props.publicationDate}</p></li>
            <li>
                <Button className="deleteButton" variant="danger" onClick={props.deleteItem}>Delete</Button>
            </li>
        </ul>
    )

}