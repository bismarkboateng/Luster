
export default function index() {

    return (
      <footer className="flex mt-52 pl-[140px] bg-[url('https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c427574f45d1dc642c3d1c_Newsletter%20Background.svg')] py-[48px] h-56 bg-cover bg-center bg-no-repeat bg-blue-50 bg-[50%]-[50%] items-center justify-between  gap-40 font-Inter">
        <h1 className="text-[#003057] text-[36px] font-[500] leading-[1.2] w-[500px]">Subscribe for Exclusive Discounts and Skin Care Tips</h1>
        <form action="" className="flex items-center justify-between px-4 rounded-xl w-80  border active:border-blue-500 outline-none mr-20">
          <input type="text" placeholder="Enter your email" className="py-3 outline-none bg-inherit"/>
          <button type="submit" className="">
             <i class='bx bx-right-arrow-alt text-[25px] text-gray-700 '></i>
          </button>
          
        </form>
      </footer>
    )
}