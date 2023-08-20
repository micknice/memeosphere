import Image from 'next/image';
import Link from 'next/link';
import CardBack from '../public/assets/memecards/cardbacks/card back.jpg'


const CardSlot = (props: any) => {

    let cardImg = CardBack
    if (props.img) {
        cardImg = props.img
    }
    return (
        <div className="h-44 w-28 outline rounded-lg shadow-2xl">
            <Link href="/">
                
                    <Image className='w-full h-full'
                        src={cardImg}
                        
                        alt="/" 
                    />
                
            </Link>
        </div>
    )
}

export default CardSlot