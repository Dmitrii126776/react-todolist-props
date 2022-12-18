import React, {useState} from 'react';

const EditTaskInput = ({editName, editTaskId, cancelEdit, tasks, setTasks}) => {
    const [inputValue, setInputValue] = useState(editName)

    const saveEditInput = () => {
        setTasks(tasks.map(el => el.id === editTaskId ? {...el, name: inputValue} : el))
        cancelEdit()
    }

    return (
        <div>
            <h2>Edit Task</h2>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={saveEditInput}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
        </div>
    );
};

export default EditTaskInput;
