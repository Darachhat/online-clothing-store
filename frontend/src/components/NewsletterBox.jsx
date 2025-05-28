const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>ចុះឈ្មោះឥឡូវនេះ & ទទួលបានបញ្ចុះតម្លៃ 20%</p>
        <p className='text-gray-400 mt-3'>
            ចុះឈ្មោះដើម្បីទទួលបានព័ត៌មានថ្មីៗអំពីផលិតផលថ្មី ការផ្តល់ជូនពិសេស និងការបញ្ចុះតម្លៃសម្រាប់សមាជិកជាពិសេស។
        </p> 
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='បញ្ចូលអ៊ីមែលរបស់អ្នក' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>ចុះឈ្មោះ</button>
        </form>
    </div>
  )
}

export default NewsletterBox;
