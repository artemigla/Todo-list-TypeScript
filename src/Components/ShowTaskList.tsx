import React from 'react';
import { ITodos } from '../Interfaces/ITodos';
import style from '../Styles/styles.module.scss';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

type PropTypes = {
    todos: ITodos[]
}

export const ShowTaskList: React.FC<PropTypes> = ({ todos }) => {

    const ItemList = todos.map(({ id, task }) => {
        return (
            <div key={id} className={style.listTask}>
                <h3>{task}</h3>
                <div className={style.deleteTask}>
                    <button>
                        <AiFillEdit size={21} color={'black'} />
                        <AiFillDelete size={21} color={'red'} />
                    </button>
                </div>
            </div>
        )
    });

    return (
        <div>{ItemList}</div>
    )
}