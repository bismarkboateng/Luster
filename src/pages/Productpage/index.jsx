
import { Navbar, Productcard, Cardwrapper } from "../../components"
import { products } from "./products"

export default function index() {

  const actionStyles = `text-xs text-[#4d6e89] font-Inter py-[4px] px-[12px] 
    bg-[#eef4ff] font-medium leading-[16.5px] tracking-[1px] rounded-full`

  return (
    <section className="w-[100%]">
      <Navbar />
      <div className="mt-10 w-[100%] bg-rating bg-cover bg-no-repeat
        h-[150px] bg-[#eef4ff] 2xl:h-[180px]">
        <h1 className="text-[32px] text-[#003057] font-Inter font-medium
          ml-5 pt-[11%] md:pt-[5%] lg:pt-[5%] 2xl:mt-0 2xl:ml-[12.5%] 2xl:pt-[3%]
          lg:text-[52px]">
          All Products
        </h1>
      </div>

      <div className="mt-20 flex flex-col items-center 
       justify-center gap-3 2xl:flex-row gap-3">

        <div className="md:flex md:flex-row md:gap-3 flex flex-col gap-3
          items-center jusitfy-center">
          <div className="flex flex-row gap-2">
            <p className={actionStyles}>ALL PRODUCTS</p>
            <p className={actionStyles}>STARTER KITS</p>
          </div>

          <div className={actionStyles}>
            BEST SELLERS
          </div>
        </div>

        <div className="md:flex md:flex-row md:gap-3 flex flex-col gap-3">
          <div className="flex flex-row gap-2">
            <p className={actionStyles}>CLEANSER</p>
            <p className={actionStyles}>SERUM</p>
          </div>

          <div className="flex flex-row gap-2">
            <p className={actionStyles}>MOISTURIZER</p>
            <p className={actionStyles}>KIT</p>
          </div>
        </div>
      </div>

      <section className="w-[90%] mx-auto mt-5 grid grid-cols-2 gap-x-4
          border border-red-500 gap-y-4 md:mt-10 md:gap-x-7 md:gap-y-7
          lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4 2xl:w-[75%] 2xl:grid-cols-4">
        {
          products.map((product) => (
          <Cardwrapper  key={product.id}>
            <div className="relative lg:w-[80%]">
              <Productcard
                image={product.image}
                category="Starter kit"
              >
                <p className="text-[10px] font-Inter bg-white
                  py-[4px] px-[8px] text-[#4d6e89] rounded-full
                  absolute top-2 left-2 md:text-[13px]">
                    {product.tag}
                </p>
              </Productcard>
              <h1 className="text-lg font-Inter text-[#003057]
                font-medium leading-[25.2px] mt-3">
                  {product.name}
              </h1>

              <p className="text-sm text-[#4d6e89] font-Inter font-normal
              leading-[21px] mt-2 mb-2">
                {product.description}
              </p>
              
              <p className="text-sm font-Inter leading-[21px] cursor-pointer
                text-[#4d6e89] mt-2 md:text-[#2660ff]
                md:text-[16px]">
                  ${product.price}
              </p>
            </div>
          </Cardwrapper>
          ))
        }


        {/* <div className="relative lg:w-[80%]">
          <Productcard
            image={secondImage}
            category="Starter kit"
          >
            <p className="text-[10px] font-Inter bg-white
              py-[4px] px-[8px] text-[#4d6e89] rounded-full
              absolute top-2 left-2 md:text-[13px]">
                BEST SELLER
            </p>
          </Productcard>
          <h1 className="text-lg font-Inter text-[#003057]
            font-medium leading-[25.2px] mt-3">Cleaner</h1>
          <p className="text-sm font-Inter leading-[21px] cursor-pointer
            text-[#4d6e89] mt-2 md:text-[#2660ff]
            md:text-[16px]">
              $18.00
          </p>
        </div>

        <div className="relative lg:w-[80%]">
          <Productcard
            image={thirdImage}
            category="Starter kit"
          >
            <p className="text-[10px] font-Inter bg-white
              py-[4px] px-[8px] text-[#4d6e89] rounded-full
              absolute top-2 left-2 md:text-[13px]">
                SERUM
            </p>
          </Productcard>
          <h1 className="text-lg font-Inter text-[#003057]
            font-medium leading-[25.2px] mt-3">SERUM</h1>
          <p className="text-sm font-Inter leading-[21px] cursor-pointer
            text-[#4d6e89] mt-2 md:text-[#2660ff]
            md:text-[16px]">
              $18.00
          </p>
        </div> */}
      </section>

    </section>
  )
}
