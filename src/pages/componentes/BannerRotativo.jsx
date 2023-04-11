import Image from "next/image"
import next from '../../../public/next.svg'
import react from '../../../public/react.svg'
import redux from '../../../public/redux.svg'
import wordpress from '../../../public/wordpress.svg'
import woo from '../../../public/woo.svg'
const BannerRotativo = () => {
    return (
      <div className="bg-gray-400 dark:bg-blue-950 py-6">
            <div className="flex justify-evenly items-center">
                <Image src={woo} alt="nextlogo" className="h-10 w-fit hover:scale-125 transition-all"/>
                <Image src={wordpress} alt="nextlogo" className="h-10 w-fit hover:scale-125 transition-all"/>
                <Image src={react} alt="nextlogo" className="h-12 w-fit hover:scale-125 transition-all"/>
                <Image src={redux} alt="nextlogo" className="h-10 w-fit hover:scale-125 transition-all"/>
                <Image src={next} alt="nextlogo" className="h-8 w-fit hover:scale-125 transition-all"/>
            </div>
    </div>
    )
}

export default BannerRotativo