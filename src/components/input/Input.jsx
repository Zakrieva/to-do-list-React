import { useState } from "react"

const Input = ({ tasks, setTasks }) => {
    const [id, setId] = useState(localStorage.getItem('id') ? +localStorage.getItem('id') : 0)
    const [value, setValue] = useState('')
    const getTaskValue = (e) => {
        e.preventDefault();
        if (value != '') {
            setTasks([
                ...tasks,
                {
                    value: value.trim(),
                    date: new Date().toLocaleString(),
                    isCompleted: false,
                    id: id
                }
            ]
            );
            setId(id + 1)
            localStorage.setItem('id', id + 1)
            setValue('')
        }

    }
    return (
        < div className="todo__input" >
            <form>
                <input className="todo__text" type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
                <button className="todo__add" onClick={getTaskValue}></button>
            </form >
        </div >
    )
}
export default Input