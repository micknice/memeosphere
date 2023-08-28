import SideEye from '../public/assets/enemy/side-eye-chloe.png'
import Image from 'next/image'
import battleStore from '@/engine/BattleStore/BattleStore'
import Anonymous from '../public/assets/character/anonymous.png'
import SpeechLeft from '../public/assets/bg/speechbubbleleft.png'
import {observer} from 'mobx-react'
import { Shake } from 'reshake'
import {useState, useEffect} from 'react'
import {useSound} from 'use-sound'


const EnemyCard = observer((props: any) => {
    const enemy = props.enemy

    const [shake, setShake] = useState(false)

    const [playHitSfx] = useSound('assets/sfx/liteExploSfx.mp3')

    useEffect(() => {
        if(battleStore.battleEngine.enemyEffectsInProgress) {
            playHitSfx()
            setShake(true)
            setTimeout(() => {
                setShake(false)
            }, 1000);
        } else {
            setShake(false)
        }

    })

    const handleMoveSelect = (move: any) => {
        const pointType = move.cost[1]
        const cost = move.cost[0]
        const finalValue = battleStore.battleEngine.playerBase[pointType] - cost
        battleStore.battleEngine.playerBase[pointType] = finalValue
        console.log('move', battleStore.battleEngine.playerBase.moves[move.name])
    }

    let enemyImg = Anonymous
    if (enemy.img) {
        enemyImg = enemy.img
    }
    if (props.active) {
        return (
            <Shake h={10} v={0} r={3}>
            <div className='h-5/6 w-96 outline outline-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300  relative  shadow-2xl'>
                {/* top div */}
                <div className=' p-4 h-3/5'>
                    <div className='outline outline-4 rounded-lg h-full w-full p-4 flex-row bg-gradient-to-r from-blue-100 to-blue-900 '>
                        <p>moves go here</p>
                    </div>

                </div>
                {/* bottom div */}
                <div className=' h-2/5 relative  p-4 flex justify-end items-end ' >
                <div className='outline outline-4 rounded-lg h-full w-full flex justify-end items-end '>

                    <div className='outline outline-4 rounded-lg h-full  bg-gradient-to-r from-blue-100 to-blue-900 00 w-2/3 p-4 flex-row'>
                                <p className='p-2 font-mono text-xl text-white'>HP: {enemy.hp}</p>
                                <p className='p-2 font-mono text-xl text-white'>AP: {enemy.ap}</p>
                                <p className='p-2 font-mono text-xl text-white'>MP: {enemy.mp}</p>
                            </div>
                            <div className='outline outline-4 rounded-lg h-full w-1/3 '>
                                <Image className='h-full w-full' src={enemyImg} alt={''}/>
                            </div>

                    </div>
            
                </div>
            </div>
            </Shake>

        )

    } else {
        return (
            <Shake dur={500} active={shake} fixed={true }className='h-5/6 w-96 outline outline-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300  relative  shadow-2xl' h={10} v={0} r={3}>

            {/* <div className='h-5/6 w-96 outline outline-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300  relative  shadow-2xl'> */}
                {/* top div */}
                
                <div className=' p-4 h-3/5 '>
                    <div className='outline outline-4 rounded-lg h-full w-full p-2  grid grid-cols-2  bg-gradient-to-r from-blue-100 to-blue-900 '>
                        <div className='flex flex-col'>
                            {enemy.movesArr.map((move : any) => {
                                return (
                                    <div onClick={(event) => handleMoveSelect(move)} className='  w-5/6 hover:scale-105 select-none' >
                                        <p className='rounded-lg p-2 font-mono text-l text-white shadow-xl hover:scale-110'>{move.name}</p>
                                        <p></p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex flex-col'>
                            {enemy.movesArr.map((move : any) => {
                                return (
                                    <div className='  w-5/6 hover:scale-105 '>
                                        <p className='rounded-lg p-2 font-mono text-l text-white shadow-xl hover:scale-110'>{move.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        
                    </div>

                </div>
                {/* bottom div */}
                <div className=' h-2/5 relative  pb-4 px-4 pt-2 flex justify-end items-end ' >
                <div className='outline outline-4 rounded-lg h-full w-full flex justify-end items-end '>

                    <div className='outline outline-4 rounded-lg h-full  bg-gradient-to-r from-blue-100 to-blue-900 00 w-2/3 p-2 flex-row'>
                                <div className='py-1'></div>
                                <p className='rounded-lg p-2 font-mono text-xl text-white shadow-xl'>HP: {enemy.hp}</p>
                                <p className='rounded-lg p-2 font-mono text-xl text-white shadow-xl'>AP: {enemy.ap}</p>
                                <p className='rounded-lg p-2 font-mono text-xl text-white shadow-xl'>MP: {enemy.mp}</p>
                            </div>
                            <div className='outline outline-4 rounded-lg h-full w-1/3 '>
                                <Image className='h-full w-full' src={enemyImg} alt={'/'}/>
                            </div>

                    </div>
            
                </div>
            {/* </div> */}
            </Shake>

        )
    }
})

export default EnemyCard