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
    const a = () => {
        console.log('!!!ggggg')
    }
    

    return (
        <div className="outline outline-red-500 w-full h-screen bg-gradient-to-t from-[#ecf0f3] to-gray-400 flex  rounded-lg">
            <div className="outline outline-green-400w-full h-screen bg-gradient-to-t from-[#ecf0f3] to-gray-400  grid grid-cols-3 grid-rows-8">
                <div className=" outline outline-yellow-500  row-span-1  p-10   flex  justify-start items-start  " >
                    <div className="col-span-1 row-span-1">
                        <CardSlot img={battleStore.battleEngine.pCardSlot1.img}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot img={battleStore.battleEngine.pCardSlot2.img}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot img={battleStore.battleEngine.pCardSlot3.img}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot img={battleStore.battleEngine.pCardSlot4.img}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot img={battleStore.battleEngine.pCardSlot5.img}/>
                    </div>
                    
                    
                </div>
                <div className=" flex justify-center items-center">

                    
                </div>
                <div className=" outline outline-yellow-500 row-span-1 p-10   flex flex-row justify-start items-start " >
                
                    <div className="col-span-1 row-span-1">
                        <CardSlot img={battleStore.battleEngine.eCardSlot5.img}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot img={battleStore.battleEngine.eCardSlot4.img}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot img={battleStore.battleEngine.eCardSlot3.img}/>
                    </div>
                    <div className="col-span-1 row-span-2">
                        <CardSlot img={battleStore.battleEngine.eCardSlot2.img}/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <CardSlot img={battleStore.battleEngine.eCardSlot1.img}/>
                    </div>
                </div>
                {/* <div className="outline"></div>
                <div className="outline"></div>
                <div className="outline"></div> */}
                <div className="outline"></div>
                <div className="outline flex justify-center items-start"><Image className="" src={Memeosphere} alt={""}/></div>
                <div className="outline"></div>
                <div className=" outline px-10 h-full row-span-5 flex flex-col justify-end items-end " >
                <HeroCard 
                        onClick={a}
                        player={battleStore.battleEngine.playerBase}
                        // style={{ pointerEvents: 'auto' }}
                    />
                    
                </div>
                <div className='outline outline-blue-400 '>

                </div>
                <div className=" outline px-10 h-full  row-span-5 flex flex-col justify-end items-start " >
                    
                    <EnemyCard 
                        
                        img={battleStore.battleEngine.enemyBase.img}
                        hp={battleStore.battleEngine.enemyBase.hp}
                        ap={battleStore.battleEngine.enemyBase.ap}
                        mp={battleStore.battleEngine.enemyBase.mp}
                        // style={{ pointerEvents: 'auto', flexGrow: 1, minHeight: '500px' }}
                    />
                </div>
                {/* <Image   src={SpeechLeft} alt={""}/> */}
                <div className="outline justify-start"></div>
                <div className="outline"></div>
                <div className="outline"></div>
                <div className="outline"></div>
               
            </div>
        </div>
    )
})

export default  Battle