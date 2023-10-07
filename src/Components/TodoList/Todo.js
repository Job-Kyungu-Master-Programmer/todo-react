import { useEffect, useState } from "react"
import axios from "axios";
import TodoCard from "./TodoCard"
import TodoSearch from "./TodoSearch"
import {IoMdNotifications} from 'react-icons/io';
import {BiSearch} from 'react-icons/bi'
import Welcom from "./Welcom";

const TodoList = () => {

     const [todo , setTodo] = useState([])
     const [NewTodo, setNewTodo] = useState('Ajouter une nouvelle tâche')
   //   const [filters, setFilters] = useState('filter')

     //Respn json API
     useEffect(() => {
         axios.get('http://localhost:3001/notes').then(resp => {
             setTodo(resp.data)
         })
     },[])
     
     const addTodo = (event) => {
        event.preventDefault()
        let date = new Date()
        const todoObject = {
                content:NewTodo,
                hours: date.getHours(),
                minutes: date.getMinutes(),
                id:todo.length + 1,
               }
               setTodo(todo.concat(todoObject))
               setNewTodo('')
         
         axios.post('http://localhost:3001/notes', todoObject).then(request => {
               setTodo(todo.concat(request.data))
         })
      }

     const handlerChange = (e) => {
         console.log(e.target.value)
         setNewTodo(e.target.value)
     }

     const handlerFilter = (e) => setFilters(e.target.value)

     //For Search <=>
     const hand = () => {
        document.querySelector('.todo__head__inputs').classList.toggle("openSearch")
     }

     console.log('Ne touchez a rien dans ce console, car tout est controler et nous pouvons traquez votre IP adress')

     return (
        <div>
         <article>
           <div className="todo">
            <header className="todo__head">
               <div className="todo__head_header">
               <div className="todo__head__icon">
                  <IoMdNotifications className="todo__head-ico" />
                  <span className="count">
                     {todo.length}
                  </span>
               </div>
               <h1 className="todo__head__title">My Todo</h1>
               <button onClick={hand} className='todo__head__btn-search'>
               { <BiSearch className="todo__head-ico"/>}
               </button>
               </div>
               <TodoSearch
                paserFilter={filters}
                paserHandFilter={handlerFilter}
                />
            </header>
              <h2 className="todo__title">Organisez vos taches</h2>
              <form className="todo__top" onSubmit={addTodo}>
                <fieldset className="todo__field">
                <legend>Task todolist</legend>
                <textarea 
                className="todo__textarea"
                placeholder="Editez..."
                value={NewTodo}
                onChange={handlerChange}>
                </textarea>
                </fieldset>
                <button className="todo__btn">+</button>
              </form>
              <TodoCard PaserTodo={todo} className="list"/>
           </div>
         </article>
         <Welcom />
        </div>
     )
}
export default TodoList