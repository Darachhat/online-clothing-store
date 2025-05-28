import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>គោលការណ៍ប្ដូរសំលៀកបំពាក់ងាយស្រួល</p>
            <p className='text-gray-400'>យើងផ្តល់នូវគោលការណ៍ប្ដូរសំលៀកបំពាក់បើមានបញ្ហា។</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>គោលការណ៍ផ្តូរទំនិញ ៧ថ្ងៃ</p>
            <p className='text-gray-400'>យើងផ្តល់នូវសេវាកម្មត្រឡប់ផ្តូរក្នុងរយៈពេល ៧ថ្ងៃ ដោយមិនគិតថ្លៃ។</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>សេវាកម្មអតិថិជនល្អបំផុត</p>
            <p className='text-gray-400'>យើងមានអ្នកព្រឹក្សាជាមួយអតិថិជន ២៤/៧ ដើម្បីជួយដោះស្រាយបញ្ហារបស់អ្នក។</p>
        </div>

    </div>
  )
}

export default OurPolicy