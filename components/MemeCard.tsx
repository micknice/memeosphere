import Image from 'next/image';
import Link from 'next/link';

const MemeCard = (props: any) => {
    return (
        <div className="h-44 w-28 outline rounded-lg shadow-2xl">
            <Link href="/">
                <a>
                    <Image 
                        src={props.imgPath}
                        width={28}
                        height={44}
                        alt="/" 
                    />
                </a>
            </Link>
        </div>
    );
};

export default MemeCard;