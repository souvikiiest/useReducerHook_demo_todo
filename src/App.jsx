import { useReducer } from 'react'
import TaskReducer from '../Reducer/taskReducer'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'
import { initialTasks } from '../data/data'
import './App.css'

function App() {
  const [tasks, dispatch] = useReducer(TaskReducer,initialTasks);
  //function to get the next Id
  const getNextId = ()=>{
    const nextId = tasks[tasks.length-1].id + 1;
    return nextId;
  }
  //handlers
  function handleAddtask(text){
    dispatch({
      type: "AddTask",
      text: text,
      id: getNextId(),

    })
    
  }
  function handleChangetask(task){
    dispatch({
      type:"changeTask",
      task
    })
    
  }
  function handleDeleteTask(id){
    dispatch({
      type:"deleteTask",
      id
    })
    
  }
  return (
    <>
      <h1>Todo Task List</h1>
      <AddTask handleAddtask={handleAddtask}/>
      <TaskList tasks={tasks} onChangetask={handleChangetask} onDeleteTask={handleDeleteTask}/>
    </>
  )
}

export default App
