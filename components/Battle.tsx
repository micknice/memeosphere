import CardSlot from "./CardSlot"
import HeroCard from "./HeroCard"
import EnemyCard from "./EnemyCard"
import Memeosphere from "../public/assets/bg/MEMEOSPHERE6.png"
import Image from 'next/image'
import GigaChad from '../public/assets/memecards/gigachad.png'
import {useState, useEffect} from 'react'





const Battle = () => {
    return (
        
        <div className="w-full h-screen bg-gradient-to-t from-[#ecf0f3] to-gray-400 flex justify-center items-center content-center rounded-lg">
    <div className="w-full h-screen bg-gradient-to-t from-[#ecf0f3] to-gray-400 flex justify-center items-center ">
        <Image className="" src={Memeosphere} alt={""}/>
        <div className="  border-2 border-gray-400 p-10 absolute inset-10 flex flex-col shadow-md ">
            <div className="flex gap-6">
                <CardSlot img={GigaChad}/>
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