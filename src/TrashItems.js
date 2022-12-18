import React from 'react';

const TrashItems = ({tasks, setTasks, moveToTrashOrBack}) => {
    const deleteTask = (id) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    return (
        <div>
            <h2>Trash Tasks</h2>
            <ol>
                {tasks.filter(el => el.trash).map(el =>
                    (
                        <li key={el.id}>

                            {el.done ? <s>{el.name}</s> : el.name}
                            <button onClick={() => moveToTrashOrBack(el.id)}>Restore</button>
                            <button onClick={() => deleteTask(el.id)}>Delete</button>
                        </li>
                    ))}
            </ol>
        </div>
    );
};

export default TrashItems;
