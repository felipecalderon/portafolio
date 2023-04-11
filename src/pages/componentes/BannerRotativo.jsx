import Image from "next/image"
import next from '../../../public/next.svg'
import react from '../../../public/react.svg'
import redux from '../../../public/redux.svg'
import wordpress from '../../../public/wordpress.svg'
import woo from '../../../public/woo.svg'
import anime from 'animejs';
import { useEffect, useRef } from "react"
const BannerRotativo = () => {
    const imgs = [woo, wordpress, next, react, redux]
    const ref = useRef(null);

    useEffect(() => {
        anime({
        targets: ref.current,
        scale: 1.1,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad',
        duration: 3000,
        });
      }, []);
    
    return (
      <div className="bg-gray-400 dark:bg-blue-950 py-6 overflow-hidden">
        <h2 className="text-gray-800 pb-3 dark:text-white text-2xl font-extrabold tracking-tight text-center sm:text-4xl">
        Constante aprendizaje
        </h2>
            <div ref={ref} className="flex justify-evenly items-center">
                {
                    imgs.map((img, i) => {
                        return <Image key={i} src={img} alt="nextlogo" className="h-8 sm:h-10 w-fit"/>
                    })
                }
            </div>
    </div>
    )
}

export default BannerRotativo