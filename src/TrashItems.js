import React from 'react';

const TrashItems = (props) => {
    return (
        <div>
            <ol>
                {props.list.filter(el => el.trash)
                    .map(el =>
                        (
                            <li key={el.id}>
                                {el.name}
                                <button onClick={() => props.moveToTrashOrBack(el.id)}>Restore</button>
                                <button onClick={() => props.deleteTask(el.id)}>Delete</button>
                            </li>
                        ))}
            </ol>
        </div>
    );
};

export default TrashItems;
