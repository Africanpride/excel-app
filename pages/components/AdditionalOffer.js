/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AdditionalOffer = (props) => {
  return (
<>
 <div className={'flex max-w-3xl h-auto md:max-h-52 my-5 bg-white dark:bg-slate-700 shadow-lg rounded-lg overflow-hidden' + props.hidden}>
 <div className="w-1/3 bg-cover bg-landscape">
    {/*tailwind full bg image */}
    <img className="w-full h-full object-cover rounded-l-lg  " src={props.image} alt="Tour Package" />
  </div>
  <div className="w-2/3 p-4">
    <h1 className="text-gray-900 dark:text-gray-100  font-bold text-2xl">
      {props.offerTitle}
    </h1>
    <p className="mt-2 text-gray-600 dark:text-gray-100 text-sm">
      {props.offerText}
    </p>
    <div className="flex item-center mt-2">
      <svg className="w-5 h-5 fill-current text-gray-700 dark:text-gray-200" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
        </path>
      </svg>
      <svg className="w-5 h-5 fill-current text-gray-700 dark:text-gray-200" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
        </path>
      </svg>
      <svg className="w-5 h-5 fill-current text-gray-700 dark:text-gray-200" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
        </path>
      </svg>

    </div>
    <div className="flex item-center justify-between mt-3">
      <h1 className="text-gray-700 dark:text-gray-200 font-bold text-xl">
        {props.offerPrice ?? ''}
      </h1>
      <button className="px-3 py-2 dark:bg-navy-800   dark:hover:bg-navy-700 bg-navy-800 hover:bg-navy-900 text-white dark:text-navy-50 text-xs font-bold uppercase rounded">
        Add to Card
      </button>
    </div>
  </div>
</div>
 

</>
  )
}

export default AdditionalOffer