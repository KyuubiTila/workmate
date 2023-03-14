export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    // console.log(e.target.task.value);
    // console.log(date.getTime);
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTaskList([...taskList, newTask]);
    e.target.task.value = '';
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="add Task"
          autoComplete="off"
          maxLength="25"
        />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};
