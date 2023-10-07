import task from '../image/Task-pana.svg'

const Replay = () => {
  return (
    <div>
        <div className='list__replay'>
            <img src={task} alt="todo list tache" />
            <h1 className='list__replay__title'>Vous n'avez pas des tâches ?</h1>
            <p className='list__replay__content'>Veuillez éditer vos tâches journalières</p>
        </div>
    </div>
  )
}

export default Replay