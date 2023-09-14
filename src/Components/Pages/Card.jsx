import Cards from "./Cards"

const Card = ( {CardMaps, CardTitle} ) => {
  return (
    <div>
        <div className='list-list'>
            <h2 className="title">
                {CardTitle.title}
            </h2>
            <ul className="list-cardos">
              {CardMaps.map(Items => 
               <Cards key={Items.id} CardDetails={Items} />
               )}
            </ul>
        </div>
    </div>
  )
}

export default Card