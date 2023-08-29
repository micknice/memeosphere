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
import { Shake } from 'reshake'




const HeroCard = observer((props: any) => {

    const [shake, setShake] = useState(false)

    const [playHitSfx] = useSound('assets/sfx/liteExploSfx.mp3')

    useEffect(() => {
        if(battleStore.battleEngine.playerEffectsInProgress) {
            playHitSfx()
            setShake(true)
            setTimeout(() => {
                setShake(false)
            }, 1000);
        } else {
            setShake(false)
        }

    })
    
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
        }, 1500);
        return () => clearInterval(intervalId); 
    }, [apLow]);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setArrowImageSrc(prevSrc => prevSrc === arrowGreen ? arrowGray : arrowGreen);
            
        }, 750);
        return () => clearInterval(intervalId); 
    }, []);

    
    
    const player = props.player

    const handleButtonHover = (move: any) => {
        if (!battleStore.hoverLock){
            playMenuPlink()
            battleStore.hoverVal = move

        }
        
    }
    const handleButtonHoverOff = () => {
        if(!battleStore.hoverLock){
            battleStore.hoverVal = battleStore.hoverValDefault
        }
    }
    
    
    const handleMoveSelect = (move: any) => {
        if (!battleStore.hoverLock) {
            battleStore.hoverVal = move
            battleStore.hoverLock = true
            battleStore.battleEngine.playerAction = move.name
            playMenuSelect()
        }
    }

    const handleNotEnoughPoints = (move: any) => {
        playMenuNegative()
    }

    let playerImg = Anonymous
    if (player.img) {
        playerImg = player.img
    }
    if (props.active) {
        return (
            <Shake dur={500} active={shake} fixed={true }className='h-5/6 w-96 outline outline-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300  relative  shadow-2xl' h={10} v={0} r={3}>

            {/* <div className='h-5/6 w-96 outline outline-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300  relative  shadow-2xl'> */}
                {/* top div */}
                <div className=' p-4 h-3/5'>
                    <div className='outline outline-4 rounded-lg h-full w-full p-4 flex-row bg-gradient-to-r from-blue-200 to-blue-900 '>
                        <p>moves go here</p>
                    </div>

                </div>
                {/* bottom div */}
                <div className=' h-2/5 relative  p-4 flex justify-end items-end ' >
                <div className='outline outline-4 rounded-lg h-full w-full flex justify-end items-end '>

                    <div className='outline outline-4 rounded-lg h-full  bg-gradient-to-r from-blue-100 to-blue-900 00 w-2/3 p-4 flex-row'>
                                <p className='p-2 font-mono text-xl text-white'>HP: {player.hp}</p>
                                <p className='p-2 font-mono text-xl text-white'>AP: {player.ap}</p>
                                <p className='p-2 font-mono text-xl text-white'>MP: {player.mp}</p>
                            </div>
                            <div className='outline outline-4 rounded-lg h-full w-1/3 '>
                                <Image className='h-full w-full' src={playerImg} alt={''}/>
                            </div>

                    </div>
            
                </div>
            {/* </div> */}
            </Shake>

        )
    } else {
        // inactive
        return (
            <Shake dur={500} active={shake} fixed={true }className='h-5/6 w-96 outline outline-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300  relative  shadow-2xl' h={10} v={0} r={3}>
            {/* <div className='h-5/6 w-96 outline outline-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300  relative  shadow-2xl'> */}
                {/* top div */}
                <div className=' p-4 h-3/5 '>
                    <div className='outline outline-4 rounded-lg h-full w-full p-2  grid grid-cols-7  bg-gradient-to-r from-blue-200 to-blue-900 '>
                        {/* left col */}
                        <div className='flex flex-col col-span-3'>
                            {player.movesArr.map((move : any) => {
                                if(move.cost[0] > battleStore.battleEngine.playerBase[move.cost[1]]) {
                                    return (
                                        <div  onClick={(event) => handleNotEnoughPoints(move)} className='  w-5/6  select-none' >
                                            <p className={altTxtTW2}>{move.name}</p>
                                            <p></p>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div 
                                            onMouseEnter={(event) => {handleButtonHover(move)}}  
                                            onMouseLeave={(event) => {handleButtonHoverOff()}} 
                                            onClick={(event) => handleMoveSelect(move)} 
                                            className='  w-5/6 hover:scale-105 select-none' >
                                            <p className='rounded-lg p-2 font-mono text-l text-white shadow-xl hover:scale-110'>{move.name}</p>
                                            <p></p>
                                        </div>
                                    )

                                }
                            })}
                        </div>
                        {/* middle col */}
                        <div className='col-span-1'>
                        {player.movesArr.map((move : any) => {
                                if(move.cost[0] > battleStore.battleEngine.playerBase[move.cost[1]]) {
                                    return (
                                        <div className='  w-full h-1/6 pt-2 pr-4 hover:scale-105 select-none col-span-2' >
                                            <Image src={crossImageSrc} alt={''}/>
                                            <p></p>
                                        </div>
                                    )
                                } else if (battleStore.hoverLock && move.name === battleStore.hoverVal.name && !battleStore.moveLock) {
                                    return (
                                        <div  className='  w-full h-1/6 pt-2 pr-4 hover:scale-105 select-none col-span-2' >
                                            <Image src={arrowImageSrc} alt={''}/>
                                            <p></p>
                                        </div>
                                    )

                                } else if (battleStore.hoverLock && move.name === battleStore.hoverVal.name && battleStore.moveLock) {
                                    return (
                                        <div  className='  w-full h-1/6 pt-2 pr-4 hover:scale-105 select-none col-span-2' >
                                            <Image src={arrowImageSrc} alt={''}/>
                                            <p></p>
                                        </div>
                                    )

                                } else if (battleStore.hoverLock){
                                    return (
                                        <div  className='  w-full h-1/6 pt-2 pr-4 hover:scale-105 select-none col-span-2' >
                                            <Image src={arrowGray} alt={''}/>
                                            <p></p>
                                        </div>
                                    )

                                } else {
                                    return (
                                        <div  className='  w-full h-1/6 pt-2 pr-4 hover:scale-105 select-none col-span-2' >
                                            <Image src={arrowGreen} alt={''}/>
                                            <p></p>
                                        </div>
                                    )

                                }
                            })}
                            
                        </div>
                        {/* right col */}
                        <div className='flex flex-col col-span-2'>
                        {player.movesArr.map((move : any) => {
                                if(move.cost[0] > battleStore.battleEngine.playerBase[move.cost[1]]) {
                                    return (
                                        <div className='  w-full  select-none col-span-3' >
                                            <p className={altTxtTW}>{move.cost[1].toUpperCase()} LOW</p>
                                            <p></p>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div  className='  w-full  select-none col-span-3' >
                                            <p className='rounded-lg p-2 font-mono text-l text-white shadow-xl '>{move.cost[1].toUpperCase()}: {move.cost[0]}</p>
                                            <p></p>
                                        </div>
                                    )

                                }
                            })}
                        </div>
                    </div>
                </div>
                {/* bottom div */}
                <div className=' h-2/5 relative  pb-4 px-4 pt-2 flex justify-end items-end ' >
                <div className='outline outline-4 rounded-lg h-full w-full flex justify-end items-end '>
                    <div className='outline outline-4 rounded-lg h-full  bg-gradient-to-r from-blue-100 to-blue-900 00 w-2/3 p-2 flex-row'>
                                <div className='py-1'></div>
                                <p className='rounded-lg p-2 font-mono text-xl text-white shadow-xl'>HP: {player.hp}</p>
                                <p className='rounded-lg p-2 font-mono text-xl text-white shadow-xl'>AP: {player.ap}</p>
                                <p className='rounded-lg p-2 font-mono text-xl text-white shadow-xl'>MP: {player.mp}</p>
                            </div>
                            <div className='outline outline-4 rounded-lg h-full w-1/3 '>
                                <Image className='h-full w-full' src={playerImg} alt={'/'}/>
                            </div>

                    </div>
            
                </div>
            {/* </div> */}
            </Shake>

        )
    }
})

export default HeroCard