import Image from 'next/image'
import { motion } from "framer-motion"
import { textslide } from "../constants"
import Typewriter from 'typewriter-effect'
import {useState} from "react"

export default function Body() {

    const [index, setIndex] = useState(0)

    function loop(count: number) {
        if (count == textslide.length){
            return count = 0
        }
        if (count < 0){
            return count = textslide.length
        }
        return count
    }

    return (
        <>
        <section className='flex flex-col justify-center h-screen w-full'>
            <section className='mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    <section className='font-bold text-white text-4xl tracking-wide p-2 text-center sm:text-left sm:text-4xl '>
                        <h1><Typewriter
                            options={{
                                strings: ["Lorem ipsum", "Lorem ipsum"],
                                autoStart: true,
                                loop: true
                            }}
                            />
                        </h1>
                    </section>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    <section className='relative bg-white w-[350px] h-[450px] rounded-2xl shadow-xl sm:w-[700px] sm:h-[300px]'>
                        <h1 className='flex p-6 font-bold text-1xl'>
                            <span className=''>
                                {textslide[index]}
                            </span>
                        </h1>
                    </section>
                </motion.div>
            </section>
            
            <section className='w-full flex flex-row justify-between relative p-4 md:absolute :p-0'>
                <motion.div className='flex justify-between w-full'
                    initial={{ opacity: 0, y: 80}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    <Image onClick={()=>setIndex(count => loop(count-1))} src="/images/chevron-left.png" width={140/2} height={140/2} alt="arrow-left" className='_arrow'/>
                    <Image onClick={()=>setIndex(count => loop(count+1))} src="/images/chevron-right.png" width={140/2} height={140/2} alt="arrow-right" className='_arrow'/>
                </motion.div>
            </section>
        </section>
        </>
    )

}