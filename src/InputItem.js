import React, {useState} from 'react';

const InputItem = (props) => {
    const [inputItem, setInputItem] = useState('')
    const addNewTask = () => {
        props.addTask(inputItem)
        setInputItem('')
    }

    return (
        <div>
            <input type='text'
                   placeholder='new task'
                   value={inputItem}
                   onChange={(e) => setInputItem(e.target.value)}
            />
            <button onClick={addNewTask} disabled={inputItem === ''}>Add Task</button>
        </div>
    );
};

export default InputItem;
