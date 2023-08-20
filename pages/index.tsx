import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Battle from '../components/Battle'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to The Memosphere</title>
        <meta name='description' content='etc...'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      

      <Battle/>
      



    </>
   
  )
}
