

import { 
  Navbar, Hero, Category, Productcard,
  Homerating
} from "../../components"
import { StarterKit, BestSeller } from "../../assets"



export default function index() {
  const classes=`absolute bottom-2 left-[30%] w-[90%] 
    flex flex-row items-center` 
  const iconClasses = "text-white text-2xl font-Inter"
  const largeScreenStyles = "2xl:w-[97%] 2xl:h-[600px]"
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <div
        className="w-[81%] mx-auto h-[1px] 
          bg-gray-300 mt-20 mb-20"
      />
      
      {/* <section className="w-[90%] mx-auto mb-20">
        <h1 className="text-[28px] font-Inter 
          text-[#003057] text-center font-medium md:mb-10">
          Need Some Help Choosing ?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-x-7
          2xl:w-[81%] 2xl:ml-20">
          <Productcard
            image={StarterKit}
            classes={classes}
            category="SHOP NOW"
            iconClasses={iconClasses}
            largeScreenStyles={largeScreenStyles}
          >
            <p className="absolute top-[71%] left-[29%]
              text-white text-2xl 2xl:text-[36px] font-Inter
              2xl:top-[83%]">
              Starter Kits
            </p>
          </Productcard>

          <Productcard
            image={BestSeller}
            classes={classes}
            category="SHOP NOW"
            iconClasses={iconClasses}
            largeScreenStyles={largeScreenStyles}
          >
            <p className="absolute top-[71%] left-[29%]
              text-white text-2xl 2xl:text-[36px] font-Inter 
              2xl:top-[83%]">
              Best Sellers
            </p>
          </Productcard>
        </div>
      </section> */}
      
      <Homerating />

    </div>
  )
}