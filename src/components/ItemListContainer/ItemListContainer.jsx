import React from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'

export const ItemListContainer = (props) => {
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title={props.greeting}>
            <Dropdown.Item href="#/action-1">Item1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Item2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Item3</Dropdown.Item>
            </DropdownButton>
           
        </div>
    )
}
