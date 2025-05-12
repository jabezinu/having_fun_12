import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch todos from API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get('/api/todos')
        setTodos(res.data)
        setError(null)
      } catch (err) {
        setError('Failed to fetch todos')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTodos()
  }, [])

  // Add todo
  const addTodo = async (e) => {
    e.preventDefault()
    if (!text.trim()) return

    try {
      const res = await axios.post('/api/todos', { text })
      setTodos([res.data, ...todos])
      setText('')
    } catch (err) {
      setError('Failed to add todo')
      console.error(err)
    }
  }

  // Toggle todo completion
  const toggleComplete = async (id, completed) => {
    try {
      const res = await axios.put(`/api/todos/${id}`, { completed: !completed })
      setTodos(todos.map(todo => todo._id === id ? res.data : todo))
    } catch (err) {
      setError('Failed to update todo')
      console.error(err)
    }
  }

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`)
      setTodos(todos.filter(todo => todo._id !== id))
    } catch (err) {
      setError('Failed to delete todo')
      console.error(err)
    }
  }

  return (
    <div className="container">
      <h1>MERN Todo App</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>
      
      {isLoading ? (
        <p>Loading todos...</p>
      ) : (
        <ul className="todo-list">
          {todos.length === 0 ? (
            <p>No todos yet. Add one above!</p>
          ) : (
            todos.map(todo => (
              <li key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <div className="todo-text" onClick={() => toggleComplete(todo._id, todo.completed)}>
                  {todo.text}
                </div>
                <button 
                  onClick={() => deleteTodo(todo._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}

export default App
