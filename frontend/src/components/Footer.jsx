import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Discover the latest trends in fashion at TOS! From timeless classics to must-have seasonal pieces, we bring you quality clothing that complements your unique style. Whether you’re looking for casual wear, business attire, or statement pieces, our collections are crafted to elevate your wardrobe. Enjoy shopping with us online and experience seamless delivery, exclusive offers, and exceptional customer support. Join our fashion community today, and let us help you express your style beautifully!
                </p>
            </div>
                
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className=' flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='tex-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className=' flex flex-col gap-1 text-gray-600'>
                    <li>+855-693-821-65</li>
                    <li>contact@tos.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ tos.com - ALL Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer
