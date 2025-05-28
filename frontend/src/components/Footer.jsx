import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                ស្វែងរកនិន្នាការសំខាន់ៗក្នុងម៉ូដនៅ TOS! ពីម៉ូដបែបបុរាណដល់សម្លៀកបំពាក់តាមរដូវកាល យើងផ្តល់ជូននូវសម្លៀកបំពាក់ដែលមានគុណភាព ដើម្បីបំពេញបន្ថែមនឹងរចនាប័ទ្មផ្ទាល់ខ្លួនរបស់អ្នក។ មិនថាអ្នកកំពុងស្វែងរកសម្លៀកបំពាក់ធម្មតា សម្លៀកបំពាក់ធ្វើការ ឬសម្លៀកបំពាក់បែបពិសេស ការប្រមូលផ្តុំរបស់យើងត្រូវបានរៀបចំ ដើម្បីលើកស្ទួយស្ទីលរបស់អ្នក។ រីករាយនឹងការដើរទិញទំនិញតាមអ៊ីនធឺណិតជាមួយយើង និងទទួលបានការដឹកជញ្ជូនងាយស្រួល ការផ្តល់ជូនពិសេស និងសេវាកម្មអតិថិជនល្អ។ ចូលរួមជាមួយសហគមន៍ម៉ូដរបស់យើងថ្ងៃនេះ ហើយអោយយើងជួយអ្នកបង្ហាញរចនាប័ទ្មបានយ៉ាងស្រស់ស្អាត!
                </p>
            </div>
            
            <div>
                <p className='text-xl font-medium mb-5'>ក្រុមហ៊ុន</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>ទំព័រដើម</li>
                    <li>អំពីយើង</li>
                    <li>ការដឹកជញ្ជូន</li>
                    <li>គោលការណ៍ឯកជនភាព</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>ទំនាក់ទំនង</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+855-693-821-65</li>
                    <li>contact@tos.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>រក្សាសិទ្ធិ 2024@ tos.com - រក្សាសិទ្ធិគ្រប់យ៉ាង</p>
        </div>
    </div>
  );
};

export default Footer;
