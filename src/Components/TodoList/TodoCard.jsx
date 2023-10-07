import React from 'react'
import { useEffect, useState } from "react"
import Replay from './Replay'
import {LiaTimesSolid} from 'react-icons/lia'
import {VscSettings} from 'react-icons/vsc'
import TodoMenu from './TodoMenu'
import TodoSearch from './TodoSearch'

const TodoCard = ( {PaserTodo} ) => {
  const [filters, setFilters] = useState('filter')
    if(PaserTodo.length === 0) {
       return (
           <div>
               <Replay />
           </div>
       )
    }
  return (
    <div>
      {/* <aside><TodoSearch  paserFilter={filters}/></aside> */}
        <div>
        <div className="list">
              <h3 className="list__title">Vos taches</h3>  
               <ul className="list__items">
                  {PaserTodo.map(todNew =>            
                    <li className="list__ite" key={todNew.id}>
                        <div className="list__priority"></div>
                        <div className="list__card">
                        <span className="list__content">
                          {todNew.content}
                          </span>
                          <time className="list__time">{todNew.hours}:{todNew.minutes}</time>
                        </div>
                      <TodoMenu />
                    </li>
                  )}
                 </ul>
              </div>
        </div>
    </div>
  )
                  
}

export default TodoCard