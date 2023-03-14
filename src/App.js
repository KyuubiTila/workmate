import { useState } from 'react';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { AddTask } from './components/AddTask';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  return (
    <div className="App">
      <h1>this is workmate</h1>
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
