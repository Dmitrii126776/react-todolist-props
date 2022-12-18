import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const InputItems = ({tasks, setTasks}) => {
    const [inputValue, setInputValue] = useState('')

    const addNewTask = () => {
        const newTask = {id: uuidv4(), name: inputValue, done: false, trash: false}
        setTasks([...tasks, newTask])
        setInputValue('')
    }

    return (
        <div>
            <input type='text' placeholder='add new task ...'
                   value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addNewTask}>Add Task</button>
        </div>
    );
};

export default InputItems;
