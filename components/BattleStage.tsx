import Nerd from '../public/assets/character/nerd_smoking.png'
import Anonymous from '../public/assets/character/anonymous.png'
import Image from 'next/image'
import battleStore from '@/engine/BattleStore/BattleStore'
import {observer} from 'mobx-react'
import arrowGreen from '../public/assets/ui/pixelArrowGreen.png'
import arrowGray from '../public/assets/ui/pixelArrowGrey.png'
import crossRed from '../public/assets/ui/pixelCrossRed.png'
import crossGray from '../public/assets/ui/pixelCrossGrey.png'
import {useState, useEffect} from 'react'
import {useSound} from 'use-sound'
import menuPlink from '/assets/sfx/menuPlink.mp3'




const HeroCard = observer((props: any) => {
    
    const altTxt1 = 'rounded-lg p-2 font-mono text-l text-gray-300 '
    const altTxt2 = 'rounded-lg p-2 font-mono text-l text-gray-600 '
    const altTxt3 = 'rounded-lg p-2 font-mono text-l text-gray-200 '
    const altTxt4 = 'rounded-lg p-2 font-mono text-l text-gray-400 '



    const [arrowImageSrc, setArrowImageSrc] = useState(arrowGreen);
    const [crossImageSrc, setCrossImageSrc] = useState(crossRed);
    const [altTxtTW, setAltTxtTW] = useState(altTxt1)
    const [altTxtTW2, setAltTxtTW2] = useState(altTxt3)
    const [apLow, setApLow] = useState(false)
    

    const [playMenuPlink] = useSound('assets/sfx/menuPlink.mp3')
    const [playMenuSelect] = useSound('assets/sfx/menuSelect.mp3')
    const [playMenuNegative] = useSound('assets/sfx/menuNegative.mp3')
    const [playMenuPulse] = useSound('assets/sfx/menuPulse.mp3')

   
    useEffect(() => {
        const intervalId = setInterval(() => {
            // setArrowImageSrc(prevSrc => prevSrc === arrowGreen ? arrowGray : arrowGreen);
            setAltTxtTW(prevSrc => prevSrc === altTxt1 ? altTxt2 : altTxt1);
            setAltTxtTW2(prevSrc => prevSrc === altTxt3 ? altTxt4 : altTxt3);
            setCrossImageSrc(prevSrc => prevSrc === crossRed ? crossGray : crossRed);
            // playMenuPulse()
            // if (apLow){playMenuPulse()}
        }, 1500);
        return () => clearInterval(intervalId); 
    }, [apLow]);

    
    
    const player = props.player

    const handleButtonHover = () => {
        playMenuPlink()
    }

    
    const handleMoveSelect = (move: any) => {
        battleStore.battleEngine.executePlayerMove(move.name)
        playMenuSelect()
    }

    const handleNotEnoughPoints = (move: any) => {
        playMenuNegative()
    }

    let playerImg = Anonymous
    if (player.img) {
        playerImg = player.img
    }
    
        return (
            <div className='h-6/6 w-full outline outline-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300  relative  shadow-2xl'>
                {/* top div */}
                <div className=' p-4 h-5/5 '>
                    <div className='outline outline-4 rounded-lg h-[32rem] w-full p-2  grid grid-cols-7  bg-gradient-to-r from-blue-200 to-blue-900 '>
                        {/* left col */}
                        <div className='grid grid-rows-5 col-span-7'>
                            <div className='flex col-span-7'>
                                <p className='p-2 font-mono text-xl text-white'>{battleStore.hoverVal.name}:</p>
                            </div>
                            <div className='flex col-span-7'>
                                <p className='p-2 font-mono text-xl text-white'>{battleStore.hoverVal.effect}</p>
                            </div>

                        </div>
                        {/* middle col */}
                        
                        {/* right col */}
                        
                    </div>
                </div>
                {/* bottom div */}
                
            </div>

        )
    
})

export default HeroCard