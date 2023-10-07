import {AiOutlinePushpin} from 'react-icons/ai'
import {RiDeleteBinLine} from 'react-icons/ri'

const TodoMenu = () => {
  return (
    <div className='menu'>
        <div className="list__menu">
            <button  className="list__menu__btn">
             Priorite 
             <AiOutlinePushpin className='list__menu__icon'/>
            </button>
            <button  className="list__menu__btn">
             Supprimer
             <RiDeleteBinLine className='list__menu__icon'/>
            </button>
        </div>
    </div>
  )
}

export default TodoMenu