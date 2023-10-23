
export default function index() {

    return (
      <form action="" className="font-Inter w-[99%] lg:w-[90%] 2xl:w-[500px] ml-1 mx-auto 2xl:w-[500px] 
        mb-6 md:ml-8">
            <label htmlFor="name" className="block mb-2 text-primaryColor font-medium">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your email" className='border w-[90%] py-[8px] px-[12px] mb-4 rounded placeholder:font-Inter placeholder:text-[#5D7B94] outline-blue-500'/>
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your name" className='border w-[90%] py-[8px] px-[12px] mb-4 rounded placeholder:font-Inter placeholder:text-[#5D7B94] outline-blue-500 '/>
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter message here" className="w-[90%] border h-[150px] py-[8px] px-[12px] rounded placeholder:font-Inter placeholder:text-[#5D7B94] block mb-4 outline-blue-500"></textarea>
            <input type="submit" role="button" value="Submit" className='bg-[#2660FF] text-white py-[12px] px-[24px] rounded-lg font-bold'/>
      </form>
    )
  }
  