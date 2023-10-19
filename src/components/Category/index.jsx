import { BsArrowRightShort } from "react-icons/bs"

import { Productcard } from ".."
import { productData } from "./product-card-data"




export default function index() {
  return (
    <section className="category mt-[93%] md:mt-[10%] w-[90%] mx-auto
        2xl:w-[81%] 2xl:mt-[5%]">
        <div className="2xl:flex 2xl:flex-row 2xl:justify-between
          2xl:items-center">
          <h1 className="text-[20px] font-Inter text-[#003057] font-medium leading-[26px]
              mb-5 2xl:mb-1 2xl:text-[30px]">
              Shop by Category
          </h1>
          <div className="flex flex-row gap-2 items-center text-xs text-[#2660ff]
              font-semibold font-Inter tracking-[2px]">
              <span>VIEW ALL PRODUCTS</span>
              <span><BsArrowRightShort className="text-[25px]" /></span>
          </div>
        </div>

        <section className="mt-5 w-[100%] grid grid-cols-1 md:grid-cols-2 
        gap-7 xl:grid-cols-4">
          {
            productData.map((product) => (
              <Productcard 
                key={product.id}
                image={product.image}
                category={product.category}
              />
            ))
          }
        </section>
    </section>

  )
}