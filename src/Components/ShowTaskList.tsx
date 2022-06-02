import React from 'react';
import { ITodos } from '../Interfaces/ITodos';
import style from '../Styles/styles.module.scss';
import { AiFillDelete } from 'react-icons/ai';

type PropTypes = {
    todos: ITodos[],
    DeleteTask: (id: string) => void,
    clearTodoList: () => void;
}

export const ShowTaskList: React.FC<PropTypes> = ({ todos, DeleteTask, clearTodoList }) => {

    const ItemList = todos.map(({ id, task }) => {
        return (
            <div key={id} className={style.listTask}>
                <h3 className={style.task}>{task}</h3>
                <div className={style.deleteTask}>
                    <button onClick={() => DeleteTask(id)}>
                        <AiFillDelete size={21} color={'red'} />
                    </button>
                </div>
            </div>
        );
    });
    return (
        <div>
            {todos.length ? ItemList : (<h3>Todo list empty</h3>)}
            {todos.length > 1 ? <button onClick={clearTodoList}>Clear all list</button> : null}
        </div>
    )
}