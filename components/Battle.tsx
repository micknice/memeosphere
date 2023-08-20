import CardSlot from "./CardSlot"
import HeroCard from "./HeroCard"
import EnemyCard from "./EnemyCard"
import Memeosphere from "../public/assets/bg/MEMEOSPHERE6.png"
import Image from 'next/image'
import GigaChad from '../public/assets/memecards/gigachad.png'
import {useState, useEffect} from 'react'
import {observer} from 'mobx-react'





const Battle = () => {
    const [p1State, setP1State] = useState()
    const [p2State, setP2State] = useState()
    const [p3State, setP3State] = useState()
    const [p4State, setP4State] = useState()
    const [p5State, setP5State] = useState()
    
    const [e1State, setE1State] = useState()
    const [e2State, setE2State] = useState()
    const [e3State, setE3State] = useState()
    const [e4State, setE4State] = useState()
    const [e5State, setE5State] = useState()

    return (

        
        <div className="w-full h-screen bg-gradient-to-t from-[#ecf0f3] to-gray-400 flex justify-center items-center content-center rounded-lg">
    <div className="w-full h-screen bg-gradient-to-t from-[#ecf0f3] to-gray-400 flex justify-center items-center ">
        <Image className="" src={Memeosphere} alt={""}/>
        <div className="  border-2 border-gray-400 p-10 absolute inset-10 flex flex-col shadow-md ">
            <div className="flex gap-6">
                <CardSlot img={p1State.img}/>
                <CardSlot />
                <CardSlot />
                <CardSlot />
                <CardSlot />
            </div>
        </div>
        <div className="  p-10 absolute inset-10 flex flex-col justify-end items-end rounded-lg">
            <div className="flex gap-6">
                <CardSlot />
                <CardSlot />
                <CardSlot />
                <CardSlot />
                <CardSlot />
            </div>
        </div>
        <div className="border border-solid border-black p-10 absolute inset-10 flex flex-col justify-start items-end">
            <EnemyCard />
        </div>
        <div className="border border-solid border-black p-10 absolute inset-10 flex flex-col justify-end items-start">
            <HeroCard />
        </div>
    </div>
    </div>

    
    )
}

export default Battle