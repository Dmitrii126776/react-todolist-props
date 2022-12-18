import {v4 as uuidv4} from 'uuid';
import './App.css';
import {useState} from "react";
import InputItems from "./InputItems";
import ListItems from "./ListItems";
import TrashItems from "./TrashItems";
import EditTaskInput from "./EditTaskInput";


function App() {
    const [tasks, setTasks] = useState([
        {id: uuidv4(), name: 'Learn React', done: false, trash: false},
        {id: uuidv4(), name: 'Learn HTML', done: false, trash: false},
    ])

    const [editTaskId, setEditTaskID] = useState(null)
    const [editName, setEditName] = useState('')


    const editTask = (id, name) => {
        console.log(name)
        setEditTaskID(id)
        setEditName(name)
    }

    const cancelEdit = () => {
        setEditTaskID(null)
    }

    const moveToTrashOrBack = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, trash: !el.trash} : el))
    }


    return (
        <div className="App">
            <h1>Tasks List</h1>
            <InputItems tasks={tasks} setTasks={setTasks}/>
            <ListItems tasks={tasks} setTasks={setTasks}
                       moveToTrashOrBack={moveToTrashOrBack}
                       editTask={editTask}
            />
            {editTaskId && <EditTaskInput cancelEdit={cancelEdit}
                                          tasks={tasks} editTaskId={editTaskId}
                                          setTasks={setTasks} editName={editName}
            />}
            <hr/>
            <TrashItems tasks={tasks} setTasks={setTasks}
                        moveToTrashOrBack={moveToTrashOrBack}/>
        </div>
    );
}

export default App;
