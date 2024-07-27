import { useState } from "react"

const Select = ({ tasks, setTasks }) => {
    const [filter, setFilter] = useState('all')

    const [activeTasks, setActiveTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])

    if (filter == 'active') {
        setActiveTasks(activeTasks.filter(task => !task.isCompleted))
    } else if (filter == 'completed') {
        setCompletedTasks(completedTasks.filter(task => task.isCompleted))
    } else {
        setTasks(tasks)
    }
    return (
        <select className="todo__options" onChange={(e) => setFilter(e.target.value)}>
            <option value="all">все</option>
            <option value="active">активные</option>
            <option value="completed">завершённые</option>
        </select >
    )
}
export default Select