import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


// Blue Green
// #75E6DA

// Baby Blue
// #D4F1F4

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }

  }, [])

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished)

  }



  const handleEdit = (e, id) => {
    let t = todos.find(i => i.id === id)
    setTodo(t.todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLocalStorage()
  }

  const handleDelete = (e, id) => {

    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLocalStorage()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLocalStorage()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => { return item.id == id; });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLocalStorage()
  }


  return (
    <>

      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 md:w-1/2 bg-[#D4F1F4] min-h-[80vh]">
        <h1 className='font-bold text-center text-base italic'>Empower Your Ambitions with GoalGrid: Charting Success, One Goal at a Time.</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} className="w-full rounded-sm px-5 py-1" type="text" name="" id="" />
          <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-[#189AB4] hover:bg-[#05445E] px-3 py-1 text-white rounded-md font-semibold disabled:bg-slate-400" type="submit">Save</button>
        </div>

        <input onChange={toggleFinished} type="checkbox" checked={showFinished} name="" id="" className='my-4' />Show Finished
        <div className='h-[1px] bg-[#05445E] w-3/4 mx-auto my-2'></div>
        <h2 className='text-lg font-bold text-center my-5'>Your Todos</h2>
        <div className="todos">
          {todos.length == 0 ? <div>No Todos to display</div> : <div></div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-1/2 my-3 justify-between">
              <div className='flex gap-5 flex-wrap'>
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""} >{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className="bg-[#189AB4] hover:bg-[#05445E] px-3 py-1 text-white rounded-md mx-2 font-semibold"><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-[#189AB4] hover:bg-[#05445E] px-3 py-1 text-white rounded-md mx-2 font-semibold"><MdDeleteForever /></button>
              </div>

            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
