import React from 'react';

const TasksItems = ({tasks, setTasks, editTask}) => {

    const doneButton = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, done: !el.done} : el))
    }

    const deleteButton = (id) => {
        setTasks(tasks.filter(el => el.id !== id))
    }


    return (
        <div>
            <ol>
                {tasks.map(el =>
                    (
                        <li key={el.id}>
                            {el.done ? <s>{el.name}</s> : el.name}
                            <button onClick={() => editTask(el.id, el.name)}>Edit</button>
                            <button onClick={() => doneButton(el.id)}>Done</button>
                            <button onClick={() => deleteButton(el.id)}>Delete</button>
                        </li>
                    ))}
            </ol>
        </div>
    );
};

export default TasksItems;
