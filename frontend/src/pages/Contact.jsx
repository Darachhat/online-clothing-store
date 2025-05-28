import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'> 
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Contact Information</p>
          <p className='text-gray-500'>271 Ou Bek K'om <br /> Ou Bek K'om, Sen Sok, Cambodia</p>
          <p className='text-gray-500'>Tel: (855) 693-821-65 <br /> Email: admin@tos.com</p>
          <p className='font-semibold text-xl text-gray-600'>Developer: Sothun Darachhhat</p>
          <p className='text-gray-500'>Software Engineering student at RUPP.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Hire Me</button>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Contact
