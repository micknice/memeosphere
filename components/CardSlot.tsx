import Image from 'next/image';
import Link from 'next/link';
import CardBack from '../public/assets/memecards/cardbacks/cardback.jpg'
import ReactCardFlip from 'react-card-flip';
import { useEffect, useState } from 'react';




const CardSlot = (props: any) => {

    const [flipped, setFlipped] = useState(false)
    const [cardImg, setCardImg] = useState(CardBack)

    useEffect(() =>{
        if (props.img) {
            setCardImg(props.img)
            setFlipped(true)
        }
    })
    
    
    if (props.img) {
        setCardImg(props.img)
        
    }
    const handleit = () => {
        console.log('!!!!!')
        setFlipped(!flipped)
    }

    

    return (
        <div onClick={handleit} className="h-44 w-28  rounded-lg shadow-2xl">
            <Link href="/">
                <ReactCardFlip containerClassName='outline outline-8 rounded-lg w-full h-full ' isFlipped={flipped} flipDirection='horizontal'>
                    <Image className='  rounded-lg w-full h-full'
                        src={CardBack}
                        
                        alt="/" 
                    />

                    <Image className=' rounded-lg w-full h-full'
                        src={cardImg}
                        
                        alt="/" 
                        
                        />
                </ReactCardFlip>
            </Link>
        </div>
    )
}

export default CardSlot