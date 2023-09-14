import ListCards from "./Components/Pages/ListCards"
import Comments from "./Components/Comments/Comments"
import TodoList from "./Components/TodoList/Todo"

const App = () => {
  return (
    <div>
       {/* <div className="container">
          <div className="loge">
          <ListCards />
          </div>
          <div className="comments">
           <Comments />
          </div>
       </div> */}
       <TodoList />
    </div>
  )
}

export default App