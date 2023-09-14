//Import images
import { useState } from 'react'
import img1 from '../image/img1.avif'
import img2 from '../image/img2.avif'
import img3 from '../image/img3.avif'
import img4 from '../image/img4.avif'
import img5 from '../image/img5.avif'
import img6 from '../image/img6.avif'
import Card from './Card'


const ListCards = () => {
    //Hooks
    const [clicks, setClicks] = useState( {
        card1: 0, card2: 0, card3: 0, card4: 0, card5: 0, card6: 0
    })
    const handleCard1 = () => setClicks({...clicks, card1: clicks.card1 + 1 }) 
    const handleCard2 = () => setClicks({...clicks, card2: clicks.card2 + 1 })
    const handleCard3 = () => setClicks({...clicks, card3: clicks.card3 + 1 })
    const handleCard4 = () => setClicks({...clicks, card4: clicks.card4 + 1 }) 
    const handleCard5 = () => setClicks({...clicks, card5: clicks.card5 + 1 })
    const handleCard6 = () => setClicks({...clicks, card6: clicks.card6 + 1 })

    //Tables Data
    const home = {
        title : 'Trouver votre logement',

        rooms : [
        
       {
            id: 1,
            name: 'Chambre Double',
            content: 'Le refrigerateur est vraiment mobile et intact',
            date: '2023',
            price: 400,
            data: handleCard1,
            incre: clicks.card1,
            imageRoom: img1,
            likeNomination: 25
        },
        {
            id: 2,
            name: 'Chambre Francaise',
            content: 'Le refrigerateur est vraiment mobile et intact',
            date: '1995',
            price: 550,
            data: handleCard2,
            incre: clicks.card2,
             imageRoom: img2,
            likeNomination: 25
        },
        {
            id: 3,
            name: 'Chambre Epiganr',
            content: 'Le refrigerateur est vraiment mobile et intact',
            date: '2026',
            price: 500,
            data: handleCard3,
            incre: clicks.card3,
             imageRoom: img3,
            likeNomination: 25
        },
        {
            id: 4,
            name: 'Chambre Rouge',
            content: 'Le refrigerateur est vraiment mobile et intact',
            date: '2025',
            price: 504,
            data: handleCard4,
            incre: clicks.card4,
             imageRoom: img4,
            likeNomination: 25
        },
        {
            id: 5,
            name: 'Chambre Renfermer',
            content: 'Le refrigerateur est vraiment mobile et intact',
            date: '2020',
            price: 600,
            data: handleCard5,
            incre: clicks.card5,
             imageRoom: img5,
            likeNomination: 25
        },
        {
            id: 6,
            name: 'Chambre Libre',
            content: 'Le refrigerateur est vraiment mobile et intact',
            date: '2023',
            price: 540,
            data: handleCard6,
            incre: clicks.card6,
             imageRoom: img6,
            likeNomination: 25
        }
      ]
    }
  return (
    <div>
       <Card CardTitle={home} CardMaps={home.rooms} />       
    </div>
  )
}

export default ListCards