import { dom } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head'
import Script from 'next/script'
import {useEffect, useState } from 'react'

export default function Scrolltest() {

  // new function:


    return (
        <>
          <Head>
            <title>Scrolltest Excel Travel Services {scrollY}</title>
          </Head>
        <main className=' flex  flex-col justify-center items-center h-screen w-full bg-black md:mx-auto  px-4'>
         <div className='flex justify-center items-center text-4xl  text-center capitalize  text-pink-600 font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 font-bold  md:text-6xl  lg:text-8xl '>Scroll position: {scrollY} px </div>
         
      </main>
      </>

      )
}

