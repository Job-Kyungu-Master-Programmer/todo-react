import { useState } from "react"
import TodoCard from "./TodoCard"

const TodoList = () => {

     const [todo , setTodo] = useState([])
     const [NewTodo, setNewTodo] = useState('Ajouter une nouvelle tâche')
     
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
      }

     const handlerChange = (e) => {
         console.log(e.target.value)
         setNewTodo(e.target.value)
     }

     console.log('Ne touchez a rien dans ce console, car tout est controler et nous pouvons traquez votre IP adress')

     return (
        <div>
         <article>
           <div className="todo">
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
        </div>
     )
}
export default TodoList