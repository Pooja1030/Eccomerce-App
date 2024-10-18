/* eslint-disable no-unused-vars */
import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }


  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-600 mt-2'>
        Join our community and be the first to know about exclusive offers, new arrivals, and the latest trends. Stay updated and enjoy 20% off your next purchase as a warm welcome to our family. Do not miss out on the opportunity to elevate your style and enjoy fantastic savings!
    </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
