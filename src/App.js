import {v4 as uuidv4} from 'uuid';
import './App.css';
import {useState} from "react";
import TasksItems from "./TasksItems";
import InputItems from "./InputItems";
import UpdateInput from "./UpdateInput";


function App() {
    const [tasks, setTasks] = useState([
        {id: uuidv4(), name: 'Learn React', done: false},
        {id: uuidv4(), name: 'Learn HTML', done: false},
    ])
    const [editTaskID, setEditTaskID] = useState(false)
    const [editName, setEditName] = useState('')
    const editTask = (id, name) => {
        //console.log(name)
        setEditTaskID(id)
        setEditName(name)
    }
    const editCancel = () => {
        setEditTaskID(null)
    }


    return (
        <div className="App">
            <h2>Tasks List</h2>
            <InputItems tasks={tasks} setTasks={setTasks}/>
            <TasksItems tasks={tasks} setTasks={setTasks} editTask={editTask}/>
            {editTaskID && <UpdateInput
                tasks={tasks} setTasks={setTasks} editName={editName}
                editTaskID={editTaskID} editCancel={editCancel}/>}
        </div>
    );
}

export default App;
