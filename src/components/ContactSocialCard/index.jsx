
export default function index() {
  return (
    <section className="bg-blue-50 w-[95%] mx-auto 2xl:w-[30%] 2xl:ml-[140px] pl-[60px] pt-10 mb-10 h-[350px] rounded-2xl text-primaryColor font-Inter">
        <h2 className='text-primaryColor text-[24px] font-[500] mb-6'>Get in Touch</h2>
        <ul>
            <li className='flex items-center gap-4 mb-4 font-[500]'>
            <i className='bx bx-phone text-[#2660FF] text-[28px]'></i>
                <p className="text-[16px]">(555) 555-5555</p>
            </li>
            <li className='flex items-center gap-4 mb-4 font-[500]'>
            <i className='bx bx-envelope text-[#2660FF] text-[28px]'></i>
                <p className="text-[16px]">info@luster.com</p>
            </li>
            <li className='flex items-center gap-4 mb-4 font-[500]'>
            <i className='bx bxl-twitter text-[#2660FF] text-[28px]'></i>
                <p className="text-[16px]">Twitter</p>
            </li>
            <li className='flex items-center gap-4 mb-4 font-[500]'>
            <i className='bx bxl-instagram text-[#2660FF] text-[28px]'></i>
                <p className="text-[16px]">Instagram</p>
            </li>
            <li className='flex items-center gap-4 mb-4 font-[500]'>
            <i className='bx bxl-linkedin-square text-[#2660FF] text-[28px]'></i>
                <p className="text-[16px]">LinkedIn</p>
            </li>
        </ul>
    </section>
  )
}