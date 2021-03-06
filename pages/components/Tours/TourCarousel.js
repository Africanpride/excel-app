/* eslint-disable @next/next/no-img-element */
import react from 'react';
// import 'flowbite'
import { Carousel } from 'flowbite-react'

const TourCarousel = () => {


  return (
    <>
      {/* <div className="h-full w-full "> */}
      
       <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">

        <Carousel indicators={false} >          
         <img src="/images/yoga/ramesseII.jpg " alt="..." />       
         <img src="/images/tours/elephant.jpg " alt="..." />
         <img src="/images/tours/borabora.jpg " alt="..." />
         <img src="/images/tours/elephant2.jpg " alt="..." />
         <img src="/images/tours/kakum.jpg " alt="..." />       
         <img src="/images/tours/hippo.jpg " alt="..." />
         <img src="/images/yoga/yoga.jpg " alt="..." />       
         <img src="/images/tours/kakum3.jpg " alt="..." />       
         <img src="/images/yoga/yoga2.jpg " alt="..." />       
         <img src="/images/yoga/pyramid.jpg " alt="..." />       
      </Carousel>
      </div>

   
    </>
  )
}

export default TourCarousel