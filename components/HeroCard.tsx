import Nerd from '../public/assets/character/nerd_smoking.png'
import Anonymous from '../public/assets/character/anonymous.png'
import Image from 'next/image'




const HeroCard = (props: any) => {
    const player = props.player

    const movesArr = Object.keys(player.moves)
    console.log(movesArr)

    let playerImg = Anonymous
    if (player.img) {
        playerImg = player.img
    }
    if (props.active) {
        return (
            
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
                                <p className='p-2 font-mono text-xl text-white'>HP: {player.hp}</p>
                                <p className='p-2 font-mono text-xl text-white'>AP: {player.ap}</p>
                                <p className='p-2 font-mono text-xl text-white'>MP: {player.mp}</p>
                            </div>
                            <div className='outline outline-4 rounded-lg h-full w-1/3 '>
                                <Image className='h-full w-full' src={playerImg} alt={''}/>
                            </div>

                    </div>
            
                </div>
            </div>

        )
    } else {
        return (
            <div className='h-5/6 w-96 outline outline-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300  relative  shadow-2xl'>
                {/* top div */}
                <div className=' p-4 h-3/5 '>
                    <div className='outline outline-4 rounded-lg h-full w-full p-2  grid-cols-2 flex-row bg-gradient-to-r from-blue-100 to-blue-900 '>
                        {movesArr.map((move) => {
                            return (
                                <div className='  w-1/2 hover:scale-105'>
                                    <p className='rounded-lg p-2 font-mono text-xl text-white shadow-xl hover:scale-105'>{move}</p>
                                </div>
                            )
                        })}
                        
                    </div>

                </div>
                {/* bottom div */}
                <div className=' h-2/5 relative  pb-4 px-4 pt-2 flex justify-end items-end ' >
                <div className='outline outline-4 rounded-lg h-full w-full flex justify-end items-end '>

                    <div className='outline outline-4 rounded-lg h-full  bg-gradient-to-r from-blue-100 to-blue-900 00 w-2/3 p-2 flex-row'>
                                <div className='p-1'></div>
                                <p className='rounded-lg p-2 font-mono text-xl text-white shadow-xl'>HP: {player.hp}</p>
                                <p className='rounded-lg p-2 font-mono text-xl text-white shadow-xl'>AP: {player.ap}</p>
                                <p className='rounded-lg p-2 font-mono text-xl text-white shadow-xl'>MP: {player.mp}</p>
                            </div>
                            <div className='outline outline-4 rounded-lg h-full w-1/3 '>
                                <Image className='h-full w-full' src={playerImg} alt={'/'}/>
                            </div>

                    </div>
            
                </div>
            </div>

        )
    }
}

export default HeroCard