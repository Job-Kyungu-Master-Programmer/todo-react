import React from 'react'
import Replay from './Replay'

const TodoCard = ( {PaserTodo} ) => {
    if(PaserTodo.length === 0) {
       return (
           <div>
               <Replay />
           </div>
       )
    }
  return (
    <div>
        <div>
        <div className="list">
              <h3 className="list__title">Vos taches</h3>  
               <ul className="list__items">
                  {PaserTodo.map(todNew =>            
                    <li className="list__ite" key={todNew.id}>
                      <div className="list__icons">X</div>
                      <span className="list__content">
                       {todNew.content}
                      </span>
                      <time className="list__time">{todNew.hours}:{todNew.minutes}</time>
                    </li>
                  )}
                 </ul>
              </div>
        </div>
    </div>
  )
                  
}

export default TodoCard