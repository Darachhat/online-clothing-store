import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2.4 text-gray-600'>
          <p>Discover the latest trends in fashion at TOS! From timeless classics to must-have seasonal pieces, we bring you quality clothing that complements your unique style. Whether you’re looking for casual wear, business attire, or statement pieces, our collections are crafted to elevate your wardrobe. Enjoy shopping with us online and experience seamless delivery, exclusive offers, and exceptional customer support. Join our fashion community today, and let us help you express your style beautifully!</p>
          <p>Welcome to TOS, your ultimate fashion destination for stylish and affordable clothing. We offer a curated selection of high-quality, trendy apparel for men, women, and children. From casual wear to formal attire, our collection is designed to suit every style and occasion.Enjoy a seamless shopping experience with easy navigation, secure checkout, and dedicated customer support. Refresh your wardrobe and elevate your style effortlessly with TOS—where fashion meets comfort, all in one place. Shop now to discover the latest trends and exclusive deals!</p>
          <p className='text-gray-800'>Our Mission</p>
          <p>Enjoy a seamless shopping experience with easy navigation, secure checkout, and dedicated customer support. Refresh your wardrobe and elevate your style effortlessly with TOS—where fashion meets comfort, all in one place. Shop now to discover the latest trends and exclusive deals!</p>
        </div>
      </div>
      
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quantity Assurance:</b>
          <p className='text-gray-600'>Refresh your wardrobe and elevate your style effortlessly with TOS—where fashion meets comfort, all in one place. Shop now to discover the latest trends and exclusive deals!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenince:</b>
          <p className='text-gray-600'>Refresh your wardrobe and elevate your style effortlessly with TOS—where fashion meets comfort, all in one place. Shop now to discover the latest trends and exclusive deals!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exception Customer Service:</b>
          <p className='text-gray-600'>Refresh your wardrobe and elevate your style effortlessly with TOS—where fashion meets comfort, all in one place. Shop now to discover the latest trends and exclusive deals!</p>
        </div>
      </div>

    </div>
  )
}

export default About
