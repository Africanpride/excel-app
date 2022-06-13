import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'
import {useEffect,useState } from 'react'
import * as flagIcons from 'flag-icons'

import { useRouter } from 'next/router'


export default function Navbar({props}) {
  
  const { asPath, pathname } = useRouter();

  const [scrollY, setScrollY] = useState(0);
  const [fixed, setFixed] = useState("")

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    function logit() {
      setScrollY(window.pageYOffset);
    }

   const doMagic = () => {
    (scrollY > 100)? setFixed("fixed") : setFixed("");
    }

    watchScroll();
    doMagic();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, [fixed, scrollY]);

 
  return (
    <>

    <Head>
      <title>{fixed}</title>
    </Head>

    <header id='MainNav'  className='bg-slate-800 body-font  top-0 w-full shadow-sm fixed' >
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

        <span> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>

        </span>

        <span className="ml-3 text-xl">Excel Travel Services </span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/" ><a className="mr-5 hover:text-white">Home</a></Link>     
        <Link href="/about" ><a className="mr-5 hover:text-white">About</a></Link>     
        <Link href="/locale" ><a className="mr-5 hover:text-white">Local</a></Link>     
        <Link href="/scrolltest " ><a className="mr-5 hover:text-white">Scroll</a></Link>     
        <Link href="/flights" ><a className="mr-5 hover:text-white">Flights</a></Link>     

      </nav>

    

      <div className='flex justify-center items-center'>
      <Link href={asPath} locale="en">
      <a><span className="fi fi-gb mr-2"></span> </a>
      </Link> 
      <Link href={pathname} locale="fr">
      <a><span className="fi fi-fr mr-2"></span></a>
      </Link>
              
      <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Book Now 
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>

      </button>
      </div>
  </div>
</header>
    
    
    
    </>
  )
}

