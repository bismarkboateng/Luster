
export default function index() {
  return (
    <section className=" bg-blue-50 w-[30%] ml-[140px] pl-[60px] pt-10 mb-10 h-[350px] rounded-2xl text-primaryColor font-Inter">
        <h2 class='text-primaryColor text-[24px] font-[500] mb-6'>Get in Touch</h2>
        <ul>
            <li class='flex items-center gap-4 mb-4 font-[500]'>
            <i class='bx bx-phone text-[#2660FF] text-[28px]'></i>
                <p className="text-[16px]">(555) 555-5555</p>
            </li>
            <li class='flex items-center gap-4 mb-4 font-[500]'>
            <i class='bx bx-envelope text-[#2660FF] text-[28px]'></i>
                <p className="text-[16px]">info@luster.com</p>
            </li>
            <li class='flex items-center gap-4 mb-4 font-[500]'>
            <i class='bx bxl-twitter text-[#2660FF] text-[28px]'></i>
                <p className="text-[16px]">Twitter</p>
            </li>
            <li class='flex items-center gap-4 mb-4 font-[500]'>
            <i class='bx bxl-instagram text-[#2660FF] text-[28px]'></i>
                <p className="text-[16px]">Instagram</p>
            </li>
            <li class='flex items-center gap-4 mb-4 font-[500]'>
            <i class='bx bxl-linkedin-square text-[#2660FF] text-[28px]'></i>
                <p className="text-[16px]">LinkedIn</p>
            </li>
        </ul>
    </section>
  )
}