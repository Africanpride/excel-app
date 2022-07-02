/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ItineraryCard from './ItineraryCard'
import TourCarousel from './TourCarousel'
import { Card } from 'flowbite-react'


const TourDestination = () => {
  return (
    <>


        <div className='container md:mx-auto'>
                <div className="px-4 md:px-8 mb-2 max-w-lg mx-auto rounded-lg shadow overflow-hidden lg:max-w-none lg:flex justify-between">
                    <div className="w-full shadow-lg md:pr-2 md:w-[75%] h-[26rem] md:h-auto ">
                        <TourCarousel />
                    </div>

                    <div className="w-full md:w-[25%] md:pl-3">
                    <div className="shadow-lg rounded-xl md:max-w-xs w-full p-6 bg-white dark:bg-gray-800 overflow-hidden">
    <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-start w-full flex-grow">
            <a href="#" className="block relative">
                <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
            <div className="flex flex-col items-start ml-4">
                <span className="dark:text-white text-gray-700">
                    Charlie Rabiller
                </span>
                <span className="text-gray-400 font-light text-sm dark:text-gray-300">
                    Updated 3 min ago
                </span>
            </div>
        </div>
        <div className="flex-none hidden md:block ">
            <span className="w-full px-3 py-1 text-sm rounded-full text-white bg-blue-500">
                Design
            </span>
        </div>
    </div>
    <p className="text-gray-800 dark:text-white text-lg mt-4 mb-2">
        Need a designer to form branding for my business.
    </p>
    <p className="text-gray-400 font-normal text-sm">
        Looking for a talented brand designer to create all the branding materials for my new startup. This should be a long term project and my hope I hight on the person whom I would like to hire.
    </p>
    <div className="flex items-center rounded justify-between p-2 bg-blue-100 my-6">
        <div className="flex items-start w-full justify-between">
            <p className="flex-grow w-full text-2xl text-gray-700">
                <span className="text-gray-400 font-light text-md">
                    $
                </span>
                4,500
                <span className="text-sm font-light text-gray-400">
                    /Month
                </span>
            </p>
            <span className="px-3 py-1 flex-none text-sm rounded-full text-indigo-500 border border-indigo-500">
                Full time
            </span>
        </div>
    </div>
    <button type="button" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        Apply for this Job
    </button>
                    </div>

                    </div>
                </div>
        </div>


            <div className="container mx-auto py-2 ">
            <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="pricing-box max-w-lg mx-auto rounded-lg shadow overflow-hidden lg:max-w-none lg:flex">

            <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <div className="flex items-center">

                <h2 className="text-3xl leading-9 font-extrabold text-navy-800 sm:text-3xl sm:leading-9 dark:text-white">
                Togo - Ghana Adventure &amp; Culinary Trip
                </h2>
                <br />
                <br />
                </div>
                <h4 className="flex-shrink-0 pt-4 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600 dark:text-blue-300">
                    Overview of the Tour
                </h4>

            <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200 text-justify ">
            Explore West Africa, the place that is known for rich culture, legacy, warmth and cadence. Find where nature is as yet unadulterated and warmth streams without any problem. Ghana, formally know as the Gold Coast sits between Côte d’ivoire and Togo while sharing a boarder with Burkina Faso to the north. It came in to prominence in its early days for its huge gold reserves. There are many reasons why a tourists will choose Ghana as a place to experience. Ranging from colonial era castles, to beaches, to scenic high routs etc.
            </p>   
            <div className="flex items-center my-5 p-8 bg-navy-500 text-white text-justify rounded-lg ">
            Togo & Ghana are both countries found in the West Africa. They host extremely colourful and diverse cultures as well as tourist sites. Togo is a nation in the Gulf of Guinea that lies between Ghana and Benin. Its is know for its serene beaches, busy markets and scenic spots which make it ideal for vacations and tours. You are guaranteed to have a memorable time anytime you visit.



            </div>     
            <img src="/images/tours/borabora.jpg" alt="Ghana &amp; Togo" className="w-full h-auto rounded-lg my-10 shadow bg-cover " />

            {/* <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200 text-justify ">

                Ghana, formally know as the Gold Coast sits between Côte d’ivoire and Togo while sharing a boarder with Burkina Faso to the north. It came in to prominence in its early days for its huge gold reserves. There are many reasons why a tourists will choose Ghana as a place to experience. Ranging from colonial era castles, to beaches, to scenic high routs etc.
            </p> */}




            <div className="mt-8">
                <div className="flex items-center">

                <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600">
                    Package Includes

                </h4>
                <div className="flex-1 border-t-2 border-gray-200">
                </div>
                </div>

                <div className="pt-10  py-5 ">

  <div className="flex flex-wrap  sm:mx-auto sm:mb-2 ">
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
      <svg  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
        <span className="title-font dark:text-white font-medium">Hotel Accommodation</span>
      </div>
    </div>
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
      <svg  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        <span className="title-font dark:text-white font-medium">Breakfast</span>
      </div>
    </div>
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
      <svg  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
        <span className="title-font dark:text-white font-medium">Tourist Guide</span>
      </div>
    </div>
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
      <svg  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
        <span className="title-font dark:text-white font-medium">All Entry and Admissions</span>
      </div>
    </div>
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
      <svg  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
</svg>
        <span className="title-font dark:text-white font-medium">Transportation</span>
      </div>
    </div>
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 dark:bg-gray-900 rounded flex p-4 h-full items-center">
      <svg  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
</svg>
        <span className="title-font dark:text-white font-medium">Airport Pickups and Drop-Offs</span>
      </div>
    </div>
  </div>
</div>

            </div>
            <div className="mt-8">
                <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600">
                Highlights Shall Include

                </h4>
                <div className="flex-1 border-t-2 border-gray-200">
                </div>
                </div>
                <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                <li className="flex items-start lg:col-span-1 py-1">
                    <div className="flex-shrink-0">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width={6} height={6} stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                    </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Akwapim hills 
                    </p>
                </li>
                <li className="flex items-start lg:col-span-1 py-1">
                    <div className="flex-shrink-0">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width={6} height={6} stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                    </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Kwame Nkrumah Mausoleum
                    </p>
                </li>
                <li className="flex items-start lg:col-span-1 py-1">
                    <div className="flex-shrink-0">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width={6} height={6} stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                    </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Agbodrafo Slave house and Aného 
                    </p>
                </li>
                <li className="flex items-start lg:col-span-1 py-1">
                    <div className="flex-shrink-0">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width={6} height={6} stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                    </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    W.E. B. Du Bois Centre
                    </p>
                </li>
                <li className="flex items-start lg:col-span-1 py-1">
                    <div className="flex-shrink-0">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width={6} height={6} stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                    </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Kpalime City Tour                    </p>
                </li>
                <li className="flex items-start lg:col-span-1 py-1">
                    <div className="flex-shrink-0">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width={6} height={6} stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                    </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Agou and Yikpa Waterfalls
                    </p>
                </li>
                <li className="flex items-start lg:col-span-1 py-1">
                    <div className="flex-shrink-0">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width={6} height={6} stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                    </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Agou and Yikpa Waterfalls
                    </p>
                </li>
                <li className="flex items-start lg:col-span-1 py-1">
                    <div className="flex-shrink-0">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width={6} height={6} stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                    </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Keta Beaches and St Paul Lighthouse
                    </p>
                </li>
                </ul>
            </div>


            </div>
            <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p className="text-lg leading-6 font-bold text-gray-900 dark:text-white">
                Double Occupancy
            </p>
            <div className="mt-4 mb-10 flex items-center justify-center text-4xl leading-none font-extrabold text-gray-900 dark:text-white">
                <span>
                $2399 Only
                </span>
            </div>
            <hr className='my-5 '/>

            <p className="mt-5  text-lg leading-6 font-bold text-gray-900 dark:text-white">
                Single Occupancy
            </p>
            <div className="mt-4 pb-5 flex items-center justify-center text-4xl leading-none font-extrabold text-gray-900 dark:text-white">
                <span>
                $2799 Only
                </span>
            </div>
            <hr className='my-5 '/>
            <p className="mt-4 text-sm leading-5">
                <span className="block font-medium text-gray-500 dark:text-gray-400">
                Card payments:
                </span>
                <span className=" inline-block font-medium text-gray-500 dark:text-gray-400">
                2.9% + 20p per transaction
                </span>
            </p>
            <div className="mt-6">
                <div className="rounded-md shadow">
                <button type="button" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Book Tour
                </button>
                </div>
            </div>
            </div>
        </div>

        </div>


       </div>
    </>
  )
}

export default TourDestination