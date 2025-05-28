import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'អំពី'} text2={'យើង'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2.4 text-gray-600'>
          <p>ស្វាគមន៍មកកាន់ TOS! យើងផ្តល់ជូននូវសំលៀកបំពាក់ទាន់សម័យ និងមានគុណភាពខ្ពស់សម្រាប់បុរស ស្ត្រី និងកុមារ។ មិនថាជាសំលៀកបំពាក់ក្នុងជីវិតប្រចាំថ្ងៃ ឬសំលៀកបំពាក់ជាស្វែងរកការសំរេចលក្ខណៈ យើងមានអ្វីៗគ្រប់យ៉ាងសម្រាប់អ្នក។ រីករាយនឹងការបញ្ជាទិញតាមអនឡាញ ជាមួយនឹងការដឹកជញ្ជូនរហ័ស និងការផ្តល់ជូនពិសេសច្រើន។ ចូលរួមជាមួយសហគមន៍ម៉ូតរបស់យើងទាំងអស់នៅថ្ងៃនេះ ដើម្បីបង្ហាញរចនាប័ទ្មរបស់អ្នកយ៉ាងស្រស់ស្អាត!</p>
          <p>នៅ TOS យើងមានបំណងផ្តល់នូវសម្លៀកបំពាក់ទាន់សម័យ មានតម្លៃសមរម្យ និងសម្រាប់គ្រប់ឱកាស។ ពីសម្លៀកបំពាក់ធម្មតាដល់សម្លៀកបំពាក់ជាផ្លូវការ យើងរៀបចំជម្រើសដែលសាកសមនឹងបែបផែន និងអត្ថបទនៃអាការៈរបស់អ្នក។ ស្វែងរកបទពិសោធន៍ទិញឥវ៉ាន់ដ៏ងាយស្រួល ជាមួយនឹងប្រព័ន្ធទូទាត់សុវត្ថិភាព និងសេវាកម្មអតិថិជនមុននិងក្រោយការលក់។</p>
          <p className='text-gray-800'>បេសកកម្មរបស់យើង</p>
          <p>យើងមានបំណងផ្តល់សេវាកម្មទិញឥវ៉ាន់តាមអនឡាញដែលងាយស្រួល និងមានប្រសិទ្ធភាព។ នៅ TOS យើងធ្វើឱ្យការទិញអនឡាញរបស់អ្នកក្លាយជាបទពិសោធន៍ដ៏រីករាយ តាមរយៈការប្រើប្រាស់មុខងារកាន់តែងាយស្រួល និងការគាំទ្រអតិថិជនពេញមួយថ្ងៃ។</p>
        </div>
      </div>
      
      <div className='text-4xl py-4'>
        <Title text1={'ហេតុអ្វី'} text2={'ជ្រើសយើង'} />
      </div>
      
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>ការធានាគុណភាព:</b>
          <p className='text-gray-600'>យើងផ្តោតលើគុណភាពនៃផលិតផល ដើម្បីធានាថាអ្នកទទួលបានអ្វីដែលល្អបំផុត។</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>ភាពងាយស្រួល:</b>
          <p className='text-gray-600'>ការទិញឥវ៉ាន់តាមអនឡាញកាន់តែងាយស្រួល ដោយប្រព័ន្ធរុករកងាយស្រួល និងទូទាត់សុវត្ថិភាព។</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>សេវាកម្មអតិថិជនដ៏ល្អឥតខ្ចោះ:</b>
          <p className='text-gray-600'>ក្រុមការងារយើងតែងតែមានសម្រាប់ជួយអ្នក ដោយផ្តល់សេវាកម្មល្អបំផុត។</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
