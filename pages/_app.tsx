import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components'
import { motion } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className='overflow-hidden'>
      <Header/>
      <Component {...pageProps} />
  </div>)
}