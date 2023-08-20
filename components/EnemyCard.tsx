import SideEye from '../public/assets/enemy/side-eye-chloe.png'
import Image from 'next/image'

import Anonymous from '../public/assets/character/anonymous.png'
import SpeechLeft from '../public/assets/bg/speechbubbleleft.png'



const HeroCard = (props: any) => {

    let enemyImg = Anonymous
    if (props.img) {
        enemyImg = props.img
    }
    return (
        <div className='h-5/6 w-96 outline outline-8 rounded-lg bg-gradient-to-r from-gray-300 to-gray-400  relative  shadow-2xl'>
            
            <div className='  h-2/5 relative  p-4 flex justify-end items-end pb-2 px-4 pt-4' >
                <div className='outline outline-4 rounded-lg h-full w-full flex justify-end items-end '>

                    <div className='outline outline-4 rounded-lg h-full w-1/3 '>
                        <Image className='h-full w-full' src={enemyImg} alt={''}/>
                    </div>
                    <div className='outline outline-4 rounded-lg h-full  bg-gradient-to-r from-blue-100 to-blue-900 00 w-2/3 p-4 flex-row'>
                        <p className='p-2 font-mono text-xl text-white'>HP: {props.hp}</p>
                        <p className='p-2 font-mono text-xl text-white'>AP: {props.ap}</p>
                        <p className='p-2 font-mono text-xl text-white'>MP: {props.mp}</p>
                    </div>

                </div>
        
            </div>
            <div className=' p-4 h-3/5'>
                <div className='outline outline-4 rounded-lg h-full w-full p-4 flex-row bg-gradient-to-r from-blue-100 to-blue-900 '>
                    <p>moves go here</p>
                </div>

            </div>
        </div>
    )
}

export default HeroCard