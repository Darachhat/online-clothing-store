import  { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async  () => {
    products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ---------- Product Data -------- */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            {/* Product Image */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                  <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                      {
                        productData.image.map((item,index)=>(
                          <img 
                          onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                        ))
                      }
                  </div>
                  <div className='w-full sm:w-[80%]'>
                      <img className='w-full h-auto' src={image} alt="" />
                  </div>
            </div>
            {/* -------- Product Info -------- */}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-4'>
                  <p>ជ្រើសរើសទំហំ</p>
                  <div className='flex gap-2'>
                      {productData.sizes.map((item,index)=>(
                        <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                      ))}
                  </div>    
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>បញ្ចូលទៅក្នុងកន្ត្រក</button>
              <hr className='mt-8 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>ផលិតផលដើម ១០០%។</p>
                  <p>អាចបង់ប្រាក់នៅពេលទទួលបានទំនិញ។</p>
                  <p>មានគោលការណ៍ប្តូរត្រឡប់ងាយស្រួលក្នុងរយៈពេល ៧ ថ្ងៃ។</p>
              </div>
            </div>
        </div>
        {/* ---------------- Description & Review Section -------------------- */}
        <div className='mt-20'>
          <div className='flex'>
              <b className='border px-5 py-3 text-sm'>ពិពណ៌នា</b>
              <p className='border px-5 py-3 text-sm'>មតិវិចារ (122)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 text-sm text-gray-500'>
            <p>ស្វាគមន៍មកកាន់ TOS ដែលជាគោលដៅម៉ូដឈានមុខនិងសមរម្យសម្រាប់អ្នក។ យើងផ្ដល់ជូននូវសម្លៀកបំពាក់មានគុណភាពខ្ពស់ និងទាន់សម័យសម្រាប់បុរស ស្ត្រី និងកុមារ។ ចាប់ពីសម្លៀកបំពាក់ធម្មតា ដល់អាវធំសម្រាប់ឱកាសពិសេស។</p>
            <p>រីករាយជាមួយបទពិសោធន៍ទិញឥវ៉ាន់ដែលមានភាពងាយស្រួលដោយមានការរុករកងាយ សុវត្ថិភាពក្នុងការបង់ប្រាក់ និងការគាំទ្រអតិថិជន។ កែសម្រួលសម្លៀកបំពាក់របស់អ្នក និងបង្កើតរចនាប័ទ្មថ្មីជាមួយ TOS—កន្លែងដែលម៉ូដជួបជាមួយផាសុខភាព។</p>
          </div>
        </div>
      {/* -------------------- Display related products ----------------------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className=' opacity-0'></div> 
}

export default Product
