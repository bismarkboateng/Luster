import { BsArrowRightShort } from "react-icons/bs"


import { 
  Navbar, Hero, Category, Productcard,
  Homerating, Natural, Skincare, Footer
} from "../../components"
import { StarterKit, BestSeller } from "../../assets"



export default function index() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <div
        className="w-[81%] mx-auto h-[1px] 
          bg-gray-300 mt-20 mb-20"
      />
      
      <section className="w-[90%] 2xl:w-[81%] mx-auto mb-20 flex flex-col
          justify-center items-center"
      >
        <h1 className="text-[28px] w-[80%] font-Inter text-[#003057] 
          text-center font-medium md:mb-10"
        >
          Need Some Help Choosing?
        </h1>

        <div className="w-[100%] grid grid-cols-1 mt-7
          gap-y-7 md:grid-cols-2 md:gap-x-7">
          <Productcard
            image={StarterKit}
            Category="starter kit"
            className="relative"
          >
            <div className="flex flex-col absolute z-[2] 
                bottom-5 left-[30%]">
              <h3 className="text-2xl font-Inter text-white font-medium">
                Starter Kits
              </h3>
              <div className="flex flex-row gap-1 items-center mt-3 ml-2">
                <p className="text-xs font-Inter text-white tracking-[2px]
                  font-semibold">SHOP NOW</p>
                <span>
                  <BsArrowRightShort
                     className="text-[33px] text-white" 
                  />
                </span>
              </div>
            </div>
          </Productcard>

          <Productcard
            image={BestSeller}
            Category="starter kit"
            className="relative"

          >
            <div className="flex flex-col absolute z-[2] 
                bottom-5 left-[30%]">
              <h3 className="text-2xl font-Inter text-white font-medium">
                Best Sellers
              </h3>
              <div className="flex flex-row gap-1 items-center mt-3 ml-2">
                <p className="text-xs font-Inter text-white tracking-[2px]
                  font-semibold">SHOP NOW</p>
                <span>
                  <BsArrowRightShort
                     className="text-[33px] text-white" 
                  />
                </span>
              </div>
            </div>
          </Productcard>
        </div>
      </section>
      
      <Homerating />
      <Natural />
      <Skincare />
      <div className="mt-10 2xl:mt-20">
        <Footer />
      </div>
    </div>
  )
}