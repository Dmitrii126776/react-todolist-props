import {v4 as uuidv4} from 'uuid';
import './App.css';
import InputItem from "./InputItem";
import ListItems from "./ListItems";
import TrashItems from "./TrashItems";
import {useState} from "react";

function App() {
    const [list, setList] = useState([
        {id: uuidv4(), name: 'Learn React', done: false, trash: false},
        {id: uuidv4(), name: 'Learn HTML', done: false, trash: false}
    ])
    const addTask = (input) => {
        setList([...list, {id: uuidv4(), name: input, done: false, trash: false}])
    }

    const checkAsDone = (id) => {
        setList(list.map(el => el.id === id ? {...el, done: !el.done} : el))
    }
    const moveToTrashOrBack = (id) => {
        setList(list.map(el => el.id === id ? {...el, trash: !el.trash} : el))
    }

    const deleteTask = (id) => {
        setList(list.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <h2>TodoList</h2>
            <InputItem addTask={addTask}/>
            <ListItems list={list} checkAsDone={checkAsDone}
                       moveToTrashOrBack={moveToTrashOrBack}/>
            <hr/>
            <TrashItems list={list}
                        moveToTrashOrBack={moveToTrashOrBack}
                        deleteTask={deleteTask}/>
        </div>
    );
}

export default App;
