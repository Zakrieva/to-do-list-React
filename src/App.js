import { useEffect, useState } from "react";
import Input from "./components/input/Input";
import Select from "./components/select/Select";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [])
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  return (
    <div className="todo" >
      <Input setTasks={setTasks} tasks={tasks} />
      <Select setTasks={setTasks} tasks={tasks} />
      <TodoList setTasks={setTasks} tasks={tasks} />
    </div >
  );
}

export default App;
