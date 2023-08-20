import SideEye from '../public/assets/enemy/side-eye-chloe.png'
import Image from 'next/image'



const HeroCard = () => {
    return (
        <div className='h-2/3 w-96 outline bg-gray-800 rounded-lg relative p-1 flex justify-end items-end shadow-2xl'>
        <div className='h-full w-96 outline bg-gradient-to-t from-[#ecf0f3] to-gray-400 rounded-lg relative p-4 flex justify-start items-start '>
    
        <div className='outline rounded-lg h-1/3 w-2/3 items-center p-4'>
            <p className='p-2'>HP:</p>
            <p className='p-2'>AP:</p>
            <p className='p-2'>MP:</p>
        </div>
        <div className='outline rounded-lg h-1/3 w-1/3 '>
            <Image className='h-full w-full'src={SideEye} alt={''}/>
        </div>
    </div>
    </div>
    )
}

export default HeroCard