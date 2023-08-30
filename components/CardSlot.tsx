import Image from 'next/image';
import Link from 'next/link';
import CardBack from '../public/assets/memecards/cardbacks/cardback.jpg'
import ReactCardFlip from 'react-card-flip';
import { useEffect, useState } from 'react';
import GigaChad from '../engine/memes/self/GigaChad'
import { observer } from 'mobx-react';
import battleStore from '../engine/BattleStore/BattleStore'
import BattleEngine from '@/engine/BattleEngine';
import {useSound} from 'use-sound'




const CardSlot = observer((props : any) => {

    const [flipped, setFlipped] = useState(true)

    const [playMenuShwipp] = useSound('assets/sfx/menuShwipp.mp3')
    const [playMenuPop] = useSound('assets/sfx/menuPop.mp3')

    
    const targetSlot = props.targetSlot
    const cardImg  = battleStore.battleEngine[targetSlot as keyof BattleEngine].img
    

    
    const handleit = () => {
        console.log('!!!!!')
        setTimeout(() => {
            setFlipped(!flipped)
            playMenuShwipp()

        }, 1000)
        setTimeout(() => {
            playMenuPop();
        }, 320);
    }
    useEffect(() => {
        console.log('AAAAAAAAAAA')
        handleit()
    },[cardImg])

    

    

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
})

export default CardSlot