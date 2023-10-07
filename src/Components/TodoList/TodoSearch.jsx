import React from 'react'

const TodoSearch = ( {paserFilter, paserHandFilter} ) => {
  return (
    <div>
        <div className='todo__head__inputs'>
            <input value={paserFilter}
             onChange={paserHandFilter}
             placeholder='recherche'
              className='todo__head__input' />
        </div>
    </div>
  )
}

export default TodoSearch
