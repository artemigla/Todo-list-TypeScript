import React, { useState, ChangeEvent } from "react";
import { ITodos } from "../Interfaces/ITodos";
import { ShowTaskList } from "./ShowTaskList";

export const Todos: React.FC = () => {

    const [task, setTask] = useState<string>("");
    const [todos, setTodos] = useState<ITodos[]>([]);

    const handlerInput = (event: ChangeEvent<HTMLInputElement>) => setTask(event.target.value);

    const handlerButton = () => {
        const newTask = {
            id: todos.length + 1,
            task: task
        }
        setTodos([...todos, newTask]);
        setTask("");
    }

    return (
        <div>
            <input type="text" onChange={handlerInput} value={task} />
            <button onClick={handlerButton}>Add task</button>
            <div>
                <ShowTaskList todos={todos} />
            </div>
        </div>
    )
}