import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom';

const Verify = () => {

    const { navigate, token, setCartItems } =useContext(ShopContext);
    const { searchParams, setSearchParams  } = useSearchParams();

    const verifyPayment = async () => {

    }

  return (
    <div>
        
    </div>
  )
}

export default Verify
