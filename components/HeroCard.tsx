import Nerd from '../public/assets/character/nerd_smoking.png'
import Image from 'next/image'



const HeroCard = () => {
    return (
        <div className='h-2/3 w-96 outline bg-gray-800 rounded-lg relative p-1 flex justify-end items-end shadow-2xl'>
            <div className='h-full w-96 outline bg-gradient-to-t from-[#ecf0f3] to-gray-400 rounded-lg relative p-4 flex justify-end items-end '>
            
            
                <div className='outline rounded-lg h-1/3 w-2/3 p-4'>
                    <p className='p-2'>HP:</p>
                    <p className='p-2'>AP:</p>
                    <p className='p-2'>MP:</p>
                </div>
                <div className='outline rounded-lg h-1/3 w-1/3'>
                    <Image className='h-full w-full' src={Nerd} alt={''}/>
                </div>
        
            </div>
        </div>

    )
}

export default HeroCard