import React from 'react';
import { ITodos } from '../Interfaces/ITodos';

type PropTypes = {
    todos: ITodos[]
}

export const ShowTaskList: React.FC<PropTypes> = ({ todos }) => {

    const ItemList = todos.map(({ id, task }) => {
        return (
            <div key={id}>
                <h3>{task}</h3>
            </div>
        )
    });

    return (
        <div>{ItemList}</div>
    )
}