import React, { use } from 'react'
import '../assets/CSS/todolist.css'
import { useState } from 'react'

const ProfileTodo = () => {
const [todo, setTodo] = useState('')
const [list, setList] = useState([
  {
    id: 1,
    deskripsi: 'Belajar ReactJs',
  },
])


  const addTodoHandler = () => {
    if (!todo.trim()) return

    const data = {
      id: Date.now(), 
      deskripsi: todo,
    }

    
    setList((prev) => [...prev, data])
    setTodo('')
  }


  const handleDelete = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id))
  }


{list.map((item) => (
  <div key={item.id}>
    <span>{item.deskripsi}</span>

    <button onClick={() => handleDelete(item.id)}>
      Delete
    </button>
  </div>
))}

  return (
    <div className="card todo-section">
      <h3>My Tasks</h3>

      <div className="input-group">
        <input
          type="text"
          placeholder="Tulis tugas baru..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodoHandler}>
          Add
        </button>
      </div>

      <ul id="todo-list" className="todo-list">
        {list.map((item) => (
          <li key={item.id} className="todo-item">
            <span>{item.deskripsi}</span>

            {}
            <button
              className="btn btn-error"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileTodo
