import Image from 'next/image'
import { motion } from "framer-motion"

export default function Body() {
    return (
        <>
        <section className='flex flex-col justify-center h-screen w-max-1xl md:w-full'>
            <section className='mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    <section className='font-bold text-white text-5xl tracking-wide p-2 text-center sm:text-left sm:text-4xl '>
                        <h1>Lorem ipsum...</h1>
                    </section>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    <section className='relative bg-white w-[350px] h-[550px] rounded-2xl shadow-xl sm:w-[700px] sm:h-[300px]'>
                        <span className='flex p-6 font-bold text-1xl'>
                            <h1>Lorem ipsum in integer vel nunc blandit ultricies amet iaculis fermentum feugiat senectus sollicitudin, ultricies pharetra primis sociosqu quam diam integer volutpat euismod facilisis vitae facilisis. eleifend conubia massa mollis dui maecenas pharetra potenti, sodales ad blandit aenean class non elementum, quisque vivamus ullamcorper luctus molestie bibendum. faucibus condimentum tellus nunc quisque etiam cursus dolor scelerisque, ante varius vehicula felis netus cras curabitur aliquet quisque, blandit malesuada luctus fringilla lorem curabitur nulla. lacinia iaculis quam ut ultrices quis urna hac dapibus odio, posuere feugiat sodales quam maecenas quis cursus gravida eros, facilisis augue mi etiam tempus eleifend curae vivamus.</h1>
                        </span>
                    </section>
                </motion.div>
            </section>
            
            <section className='w-full flex flex-row justify-between relative p-4 md:absolute :p-0'>
                <motion.div className='flex justify-between w-full'
                    initial={{ opacity: 0, y: 80}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    <Image src="/images/chevron-left.png" width={140/2} height={140/2} alt="arrow-left" className='_arrow'/>
                    <Image src="/images/chevron-right.png" width={140/2} height={140/2} alt="arrow-right" className='_arrow'/>
                </motion.div>
            </section>
        </section>
        </>
    )

}