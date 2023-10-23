import { Button } from ".."


export default function index() {
  return (
    <section className="absolute top-[80%] left-6 w-[85%] mx-auto p-[32px] rounded-2xl 
      bg-[#eef4ff] md:w-[50%] md:top-[20%] xl:w-[35%] 2xl:w-[30%]
      2xl:left-[10%]" data-aos="fade-right" data-aos-duration="1000" >
        <h1 className="text-[26px] font-Inter text-[#003057]
          font-medium leading-[36.4px] mb-2 2xl:text-[44px] 2xl:leading-[50px]">
            All-Natural Skin Care Made
            for You and the Planet
        </h1>
        <p className="text-sm text-[#003057] leading-5 mb-7 2xl:text-[20px]
          leading-[32px]">
            Lorem ipsum dolor sit amet consectetur. Id tortor amet aliquet vestibulum.
        </p>
        <Button
          className="p-[15px] bg-[#2660ff] text-white font-semibold cursor-pointer
          w-[100%] md:w-[40%] 2xl:w-[34%] rounded-lg text-sm font-Inter leading-5"
        >
          Shop Now
        </Button>
    </section>
  )
}
