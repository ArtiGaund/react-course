
import { useEffect, useState } from 'react'
import './App.css'
import { TodoContext, TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {
  // creating todos
  const [ todos, setTodos ] = useState([])
  // defining methos
  // todo is coming from form below not from the state in TodoContext.js file
  const addTodo = (todo) => {
    // we dnt want to change previous stored value, we want to add value in that( adding prev value by [...prev])
    setTodos((prev) => [...prev, { id:Date.now(), ...todo}])
  }

  const updateTodo = ( id, todo ) => {
    setTodos( (prev) => prev.map( (prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  } 

  const deleteTodo = (id) => {
    setTodos( (prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo)))
  }

  // local storage
  useEffect(() => {
   const todos =  JSON.parse(localStorage.getItem("todos"))
   if( todos && todos.length>0)
   {
      setTodos(todos)
   } 
  },[])
  // for added todos in local storage when there is a change in todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo) => (
                            <div key={todo.id}
                            className='w-full'
                            >
                                <TodoItem todo={todo} />
                            </div>
                          ))}
                    </div>
                </div>
      </div>
    </TodoProvider>
  )
}

export default App
