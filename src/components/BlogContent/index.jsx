import { Button } from ".."

export default function index() {
    return (
      <section className="font-Inter w-[340px]">
        <h3 className="uppercase text-[#2660ff] text-[14px] font-[500] mb-[16px]">Latest article</h3>
        <h1 className="tracking-[2px] text-[#003057] text-[44px] font-[500] leading-[1.2] mb-[16px]">Benefits of Organic Skin Care Products</h1>
        <p className=" text-[#003057] text-[18px]  leading-[1.5] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt. Pharetra aliquam vulputate et nibh quis lacus.</p>
        <Button className="p-[15px] bg-[#2660ff] text-white font-semibold cursor-pointer
          w-[100%] md:w-[40%] 2xl:w-[34%] rounded-lg text-sm font-Inter leading-5">Read Article</Button>
      </section>
    )
  }
  