import React, {useState} from 'react';

const UpdateInput = ({editTaskID, editName, tasks, setTasks, editCancel}) => {

    // eslint-disable-next-line no-use-before-define
    const [inputValue, setInputValue] = useState(editName)

    const saveButton = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, name: inputValue} : el))
        setInputValue(inputValue)
        editCancel()
    }

    return (
        <div>
            <input type='text'
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => saveButton(editTaskID)}>Save</button>
            <button onClick={editCancel}>Cancel</button>
        </div>
    );
};

export default UpdateInput;
