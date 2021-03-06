import Head from 'next/head'
import Navbar from './Navbar'
import Heading from './Heading';
import Footer from './Footer'
import react from 'react'
import {useRouter} from 'next/router';


export default function Layout({ children }) {
  const {asPath, pathname} = useRouter();


  return (
    <> 
      <Navbar />
      {/* <GetHeader /> */}
      <>{children}</>
      <Footer/>
    </>
  )
}