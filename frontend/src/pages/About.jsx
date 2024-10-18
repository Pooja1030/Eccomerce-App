/* eslint-disable no-unused-vars */
import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='About Us' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
          Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            At our core, we value integrity, transparency, and customer satisfaction. We aim to create a community that thrives on trust and reliability.
          </p>
          <b>Our Mission</b>
          <p>
            Our mission is to deliver exceptional products that enrich the lives of our customers. We strive to provide a seamless shopping experience through outstanding service and support.
          </p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            We meticulously select our products to ensure they meet the highest standards of quality and performance, providing you with peace of mind with every purchase.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>
            Our user-friendly platform makes shopping easy and efficient, allowing you to find and purchase products with just a few clicks from the comfort of your home.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            Our dedicated support team is always available to assist you with any inquiries or issues, ensuring a smooth and enjoyable shopping experience.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
}

export default About;
