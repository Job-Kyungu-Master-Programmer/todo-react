import { useState } from "react"

const Comments = ( ) => {
    const [content, setContent] = useState([])
    const [newComment, setNewComment] = useState('Entrer votre commentaires')

    const addNote = (e) => {
         e.preventDefault();
         const NewCommentObject = {
            content: newComment,
            important: Math.random() < 0.5,
            id: content.length + 1
         }
         setContent(content.concat(NewCommentObject))
         setNewComment('')
         console.log('button clicked' + e.target)
     }

    const handleChange = (e) => {
        setNewComment(e.target.value)
        console.log(e.target.value)
    }
       return (
           <div>
                <div className="blog">
                  <aside>
                    <h1 className="blog__title">Commentaire des Utilisateurs</h1>
                    <div className="comments">
                        <form onSubmit={addNote} className="comments__top">
                            <fieldset className="comments__field">
                                <legend>Vos commentaires</legend>
                                <input onChange={handleChange} value={newComment} type="text" className="comments__input" placeholder={newComment} />
                            </fieldset>
                                <button className="comments__button__send">Envoyer</button>
                        </form>
                        <span>{newComment}</span>
                        <div className="comments__bottom">
                            <ul className="comments__bottom__list">
                                {content.map(NewContent => 
                                 <li className="comments__bottom__item" key={NewContent.id}>
                                 <span className="comments__bottom__span">
                                    {NewContent.content}
                                 </span>
                                 <div className="icons">X</div>
                               </li>
                                )}
                            </ul>
                        </div>
                    </div>
                 </aside>
                </div>
           </div>
       )
}
export default Comments