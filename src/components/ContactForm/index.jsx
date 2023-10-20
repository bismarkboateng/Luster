
export default function index() {

    return (
      <form action="" class="font-Inter w-[500px] mb-6">
            <label htmlFor="name" class="block mb-2 text-primaryColor font-medium">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your email" class='border w-[500px] py-[8px] px-[12px] mb-4 rounded placeholder:font-Inter placeholder:text-[#5D7B94] outline-blue-500'/>
            <label htmlFor="email" class="block mb-2 font-medium">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your name" class='border w-[500px] py-[8px] px-[12px] mb-4 rounded placeholder:font-Inter placeholder:text-[#5D7B94] outline-blue-500 '/>
            <label htmlFor="message" class="block mb-2 font-medium">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter message here" class="w-[500px] border h-[150px] py-[8px] px-[12px] rounded placeholder:font-Inter placeholder:text-[#5D7B94] block mb-4 outline-blue-500"></textarea>
            <input type="submit" role="button" value="Submit" class='bg-[#2660FF] text-white py-[12px] px-[24px] rounded-lg font-bold'/>
      </form>
    )
  }
  