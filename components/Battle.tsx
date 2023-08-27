import CardSlot from "./CardSlot"
import HeroCard from "./HeroCard"
import EnemyCard from "./EnemyCard"
import Memeosphere from "../public/assets/bg/MEMEOSPHERE6.png"
import Image from 'next/image'
import GigaChad from '../public/assets/memecards/gigachad.png'
import BadLuckBrian from '../public/assets/memecards/badluckbrian.png'
import {useState, useEffect} from 'react'
import {observer} from 'mobx-react'
import dynamic from 'next/dynamic'
import battleStore from '../engine/BattleStore/BattleStore'
import SpeechLeft from '../public/assets/bg/speechbubbleleft.png'

const Battle = observer(() => {
    const [text, setText] =useState('')
    
    useEffect(() => {
        console.log('!!!!!', battleStore.battleEngine.pCardSlot1.img)
    }, [battleStore]) 

    return (
        <div className=" outline-red-500 w-full h-screen bg-gradient-to-t from-[#ecf0f3] to-gray-400 flex  rounded-lg">
            <div className="outline outline-green-400w-full h-screen bg-gradient-to-t from-[#ecf0f3] to-gray-400  grid grid-cols-3 grid-rows-8">
                <div className="  outline-yellow-500  row-span-1  p-10   flex  justify-start items-start  " >
                    <div className="col-span-1 row-span-1">
                        <CardSlot targetSlot={'pCardSlot1'}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot targetSlot={'pCardSlot2'}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot targetSlot={'pCardSlot3'}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot targetSlot={'pCardSlot4'}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot targetSlot={'pCardSlot5'}/>
                    </div>
                    
                    
                </div>
                <div className=" flex justify-center items-center">

                    {/* <Image src={battleStore.battleEngine.pCardSlot1.img} alt={""}/> */}
                </div>
                <div className="  outline-yellow-500 row-span-1 p-10   flex flex-row justify-start items-start " >
                
                    <div className="col-span-1 row-span-1" >
                        <CardSlot targetSlot={'eCardSlot5'}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot targetSlot={'eCardSlot4'}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot targetSlot={'eCardSlot3'}/>
                    </div>
                    <div className="col-span-1 row-span-2">
                        <CardSlot targetSlot={'eCardSlot2'}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot targetSlot={'eCardSlot1'}/>
                    </div>
                </div>
                {/* <div className="outline"></div>
                <div className="outline"></div>
                <div className="outline"></div> */}
                <div className=""></div>
                <div className=" flex justify-center items-start"><Image className="" src={Memeosphere} alt={""}/></div>
                <div className=""></div>
                <div className="  px-10 h-full row-span-5 flex flex-col justify-end items-start " >
                <HeroCard 
                        player={battleStore.battleEngine.playerBase}
                        // style={{ pointerEvents: 'auto' }}
                    />
                    
                </div>
                <div className=' outline-blue-400 justify-center items-center flex'>
                    
                    
                </div>
                <div className="  px-10 h-full  row-span-5 flex flex-col justify-end items-end " >
                    <div className="h-full justify-end flex items-end">

                    <EnemyCard 
                        enemy={battleStore.battleEngine.enemyBase}
                        // style={{ pointerEvents: 'auto', flexGrow: 1, minHeight: '500px' }}
                        />
                    </div>
                </div>
                {/* <Image   src={SpeechLeft} alt={""}/> */}
                <div className=" justify-start"></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
               
            </div>
        </div>
    )
})


export default   Battle