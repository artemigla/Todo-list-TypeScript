import React, { useState, ChangeEvent, useEffect } from "react";
import { ITodos } from "../Interfaces/ITodos";
import { nanoid } from 'nanoid';
import { ShowTaskList } from "./ShowTaskList";
import style from '../Styles/styles.module.scss';

export const Todos: React.FC = () => {

    const [task, setTask] = useState<string>("");
    const [todos, setTodos] = useState<ITodos[]>([]);

    const handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (!task.replace(/[^\ ]*/, '')) setTask(event.target.value);
    };

    const handlerButton = () => {
        const newTask = {
            id: nanoid(),
            task: task
        }
        setTodos([...todos, newTask]);
        setTask("");
    }

    useEffect(() => {
        setTodos(JSON.parse(String(localStorage.getItem("item"))));
    }, [])

    useEffect(() => {
        localStorage.setItem("item", JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (id: string) => setTodos(todos.filter((idTask) => idTask.id !== id));

    return (
        <div className={style.container}>
            <input type="text" onChange={handlerInput} placeholder={'New task...'} value={task} />
            {task.length
                ? <button onClick={handlerButton}>Add task</button>
                : <button className={style.disabledButton} disabled={true}>Block</button>}
            <ShowTaskList
                todos={todos}
                DeleteTask={handleDelete}
            />
        </div>
    )
}