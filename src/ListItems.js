import React from 'react';

const ListItems = (props) => {
    return (
        <div>
            <ol>
                {props.list.filter(el => !el.trash).map(el =>
                    (
                        <li
                            key={el.id}>
                            <span style={el.done ? {textDecoration: "line-through"} : null}>
                            {el.name}
                            </span>
                            <button onClick={() => props.checkAsDone(el.id)}>Done</button>
                            <button onClick={() => props.moveToTrashOrBack(el.id)}>Trash</button>
                        </li>
                    ))}
            </ol>

        </div>
    );
};

export default ListItems;
