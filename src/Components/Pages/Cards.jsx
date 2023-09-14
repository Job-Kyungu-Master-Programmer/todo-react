import imageIcon from '../image/heart.svg'

const Cards = ( {CardDetails} ) => {
      return (
         <div>
            <div className="list">
                <div className="cards">
                    <div className="card">
                        <div className="card__image">
                            <img src={CardDetails.imageRoom} alt="card" className="card__img" />
                        </div>
                        <div className="card__text">
                            <h1 className="card__title">{CardDetails.name}</h1>
                            <div className="card__date">Date <span className="card-d-span" >{CardDetails.date}</span></div>
                            <div className="card__content">
                             {CardDetails.content}
                            </div>
                            <div className="card__btns">
                                <span className="card__price"><article>$</article>{CardDetails.price}</span>
                                <button className="card__btn" onClick={CardDetails.data} >
                                    <img src={imageIcon} alt="" className="icon" />
                                    <div className="card__icon-po">{CardDetails.incre}</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
      )
}
export default Cards