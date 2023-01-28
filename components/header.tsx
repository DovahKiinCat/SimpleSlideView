import { SocialIcon } from 'react-social-icons'
import { Icons } from '../constants/index.js'
import { motion } from "framer-motion"

export default function Header() {
    return (
        <header className='w-full absolute'>
            <motion.div 
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
            >
                <section className='flex justify-between w-4/4 max-w-6xl z-20 mx-auto top-0 p-2 overflow-hidden'>
                    <section className=''>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {Icons.Firsts.map((icon, index) => (
                                <SocialIcon 
                                key={index}
                                url={`https://www${icon.url}`}
                                fgColor={!icon.hover? Icons.color.primary: Icons.color.bg}
                                bgColor={Icons.color.bg}
                                />
                            ))}
                        </motion.div>
                    </section>
                    <section className='flex max-w-6xl z-20 top-0 pr-2 overflow-hidden tracking-wide text-white font-bold'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {Icons.secondary.map((icon, index) => (
                                <SocialIcon
                                    url={`https://www${icon.url}`}
                                    fgColor={Icons.color.primary}
                                    bgColor={Icons.color.bg}
                                    key={index}
                                />
                            ))}
                        </motion.div>
                    </section>
                </section>
            </motion.div>
        </header>
    )
}