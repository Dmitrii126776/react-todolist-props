import React from 'react';

const ListItems = ({tasks, setTasks, moveToTrashOrBack, editTask}) => {

    const doneTask = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, done: !el.done} : el))
    }

    return (
        <div>
            <ol>
                {tasks.filter(el => !el.trash).map(el =>
                    (
                        <li key={el.id}>
                            {el.done ? <s>{el.name}</s> : el.name}
                            <button onClick={() => editTask(el.id, el.name)}>Edit</button>
                            <button onClick={() => doneTask(el.id)}>Done</button>
                            <button onClick={() => moveToTrashOrBack(el.id)}>Trash</button>
                        </li>
                    ))}
            </ol>
        </div>
    );
};

export default ListItems;
