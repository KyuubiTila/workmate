import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { AddTask } from './components/AddTask';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('taskList')) || []
  );
  const [task, setTask] = useState({});
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  });
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
