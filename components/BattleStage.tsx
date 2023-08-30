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
import MenuButtonOk from './MenuButtonOk'
import MenuButtonCancel from './MenuButtonCancel'
import Moony from '../public/assets/ui/moony.gif'
import Typewriter from 'typewriter-effect';





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
    const [playMoveSfx] = useSound(battleStore.battleEngine.playActionSfx)
    const [playEnemyMoveSfx] = useSound(battleStore.battleEngine.enemyActionSfx)
   
    useEffect(() => {
        const intervalId = setInterval(() => {
            setAltTxtTW(prevSrc => prevSrc === altTxt1 ? altTxt2 : altTxt1);
            setAltTxtTW2(prevSrc => prevSrc === altTxt3 ? altTxt4 : altTxt3);
            setCrossImageSrc(prevSrc => prevSrc === crossRed ? crossGray : crossRed);
        }, 1500);
        return () => clearInterval(intervalId); 
    }, [apLow]);
    // play Player attack sfx 
    useEffect(()=> {
        const awaitDelays = async () => {
            const delay = (ms : number) => new Promise(resolve => setTimeout(resolve, ms));
            await delay(500)
            playMoveSfx()
        }
        if(battleStore.battleEngine.playerActionInProgress) {
            awaitDelays()
                
        }

    }, [battleStore.battleEngine.playActionSfx])
    // play enemy attack sfx
    useEffect(()=> {
        console.log('llllll')
        console.log('dddd', battleStore.battleEngine.enemyActionSfx)

        const awaitDelays = async () => {
            const delay = (ms : number) => new Promise(resolve => setTimeout(resolve, ms));
            await delay(500)
            console.log('mmmm', battleStore.battleEngine.enemyActionSfx)
            playEnemyMoveSfx()
        }
        if(battleStore.battleEngine.enemyActionInProgress) {
            console.log('nnnnn', battleStore.battleEngine.enemyActionSfx)
            awaitDelays()
                
        }

    }, [battleStore.battleEngine.enemyActionSfx])
    const player = props.player

    let playerImg = Anonymous
    if (player.img) {
        playerImg = player.img
    }
    
        return (
            <div className='h-6/6 w-full outline outline-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300  relative  shadow-2xl'>
                {/* top div */}
                <div className=' p-4 h-5/5 '>
                    <div className='outline outline-4 rounded-lg h-[32rem]  w-full p-2  grid grid-cols-7  bg-gradient-to-r from-blue-200 to-blue-900 '>
                        {/* left col */}
                        <div className='  grid grid-rows-6 col-span-7 overflow-hidden'>
                            <div className='  row span-2'>
                                {battleStore.hoverVal.name  && !battleStore.battleEngine.playerActionConfirmed &&
                                    <p className='p-2 font-mono text-xl text-white'>{battleStore.hoverVal.name}:</p>
                                }
                                {battleStore.battleEngine.playerActionInProgress && battleStore.battleEngine.battleStatus === 0 &&
                                    <p className='p-2 font-mono text-xl text-white'>{battleStore.playerName} used {battleStore.battleEngine.playerAction}...</p>
                                }
                                {battleStore.battleEngine.enemyActionInProgress && battleStore.battleEngine.battleStatus === 0 &&
                                    <p className='p-2 font-mono text-xl text-white'>{battleStore.enemyName} used {battleStore.battleEngine.enemyAction}...</p>
                                }
                                {battleStore.battleEngine.battleStatus === 1 &&
                                    <p className='p-2 font-mono text-xl text-white'>GG EZ...</p>
                                }
                                {battleStore.battleEngine.battleStatus === 2 &&
                                    <p className='p-2 font-mono text-xl text-white'>Get REKT nerd lmao...</p>
                                }
                            </div>
                            <div className='col-span-7'>
                                {battleStore.hoverVal.name  && !battleStore.battleEngine.playerActionConfirmed &&
                                    <p className='p-2 font-mono text-xl text-white'>{battleStore.hoverVal.effect}</p>
                                }
                                {/* {battleStore.hoverVal.name  && !battleStore.battleEngine.playerActionConfirmed &&
                                    <p className='p-2 font-mono text-xl text-white'>{battleStore.hoverVal.effect}</p>
                                } */}
                                {/* {battleStore.battleEngine.battleStatus === 1 &&
                                    <Image className='rounded-lg ' src={Moony} alt={''}/>
                                } */}
                            </div>
                            <div></div>
                            <div className=' grid grid-cols-6 justify-center items-center col-span-7'>
                                {battleStore.battleEngine.playerActionInProgress && battleStore.battleEngine.battleStatus === 0 &&
                                    <div className='p-2 font-mono text-xl text-white col-span-6 '>
                                        <Typewriter options={{delay: 20}} onInit={(typewriter) => {
                                            typewriter.typeString('---->')
                                            .pauseFor(100)
                                            .typeString(' ---->')
                                            .pauseFor(100)
                                            .typeString(' ---->')
                                            .pauseFor(100)
                                            .typeString(' ---{-----}-->')
                                            .pauseFor(100)
                                            .typeString(' ---->')
                                            .pauseFor(100)
                                            .typeString(' ---->')
                                            .pauseFor(100)
                                            .typeString(' ---->')
                                            .start()
                                        }}/>
                                    </div>
                                }
                                {battleStore.battleEngine.enemyActionInProgress && battleStore.battleEngine.battleStatus === 0 &&
                                    <div className='p-2 font-mono text-xl text-white col-span-6 rotate-180'>
                                        <Typewriter options={{delay: 15}} onInit={(typewriter) => {
                                            typewriter.typeString('---->')
                                            .pauseFor(100)
                                            .typeString(' ---->')
                                            .pauseFor(100)
                                            .typeString(' ---->')
                                            .pauseFor(100)
                                            .typeString(' ---{-----}-->')
                                            .pauseFor(100)
                                            .typeString(' ---->')
                                            .pauseFor(100)
                                            .typeString(' ---->')
                                            .pauseFor(100)
                                            .typeString(' ---->')
                                            .callFunction(() => {
                                                battleStore.eAttackUploaded = true
                                                console.log('callback')
                                            })
                                            .start()

                                        }}/>
                                    </div>
                                }
                                <div></div>
                                <div></div>
                                {battleStore.hoverLock  && !battleStore.battleEngine.playerActionConfirmed &&
                                    <div>
                                    <MenuButtonOk  className='w-full' text='OK'/>
                                    </div>
                                }
                                {battleStore.hoverLock  && !battleStore.battleEngine.playerActionConfirmed &&
                                    <div>
                                    <MenuButtonCancel className='w-full' text='CANCEL'/>
                                    </div>
                                }
                                

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