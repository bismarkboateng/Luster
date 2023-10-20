import { HiOutlineBeaker } from "react-icons/hi2"
import { PiLeafLight } from "react-icons/pi"
import { IoIosHeartEmpty } from "react-icons/io"

import { image02 } from "../../assets"
import { Button } from ".."


export default function index() {

  const listClasses = "flex flex-row gap-3 items-center"
  const listTextClasses = "text-sm text-[#003057] font-Inter font-normal"
  const listIcon = "w-[24px] h-[24px] text-[#003057]"

  return (
    <section className="w-[90%] mx-auto mt-20 flex flex-col lg:flex-row 
        lg:items-start lg:justify-start 2xl:items-center lg:gap-[6%] 2xl:w-[81%]">
        <div className="w-[100%]">
            <img 
                src={image02} 
                alt="naturals" 
                className="object-fit w-[100%] rounded-lg 2xl:h-[700px]"
            />
        </div>

        <div className="mt-8 lg:mt-0 ">
            <h2 className="text-[28px] font-Inter text-[#003057] font-medium leading-8
                md:w-[70%] lg:text-[44px] lg:leading-[50px] 2xl:w-[84%] 2xl:mb-8">
                All-Natural and Organic Ingredients, Every Time.
            </h2>
            <p className="text-sm text-[#003057] font-Inter font-normal mt-5 lg:text-[18px]
                lg:w-[75%] lg:leading-[30px]">
                Lorem ipsum dolor sit amet consectetur. Id tortor amet aliquet vestibulum.
                Bibendum placerat sed quam a est. Vel aenean massa volutpat.
            </p>

            <ul className="flex flex-col gap-3 mt-4 mb-4 2xl:gap-7 2xl:mb-6">
                <li className={listClasses}>
                    <i><HiOutlineBeaker className={listIcon} /></i>
                    <span className={listTextClasses}>Simple, effective formulas</span>
                </li>

                <li className={listClasses}>
                    <i><PiLeafLight className={listIcon} /></i>
                    <span className={listTextClasses}>100% organic ingredients</span>
                </li>

                <li className={listClasses}>
                    <i><IoIosHeartEmpty className={listIcon} /></i>
                    <span className={listTextClasses}>Never tested on animals</span>
                </li>

            </ul>

            <Button
                className="p-[15px] bg-[#2660ff] text-white font-semibold cursor-pointer
                w-[100%] md:w-[40%] 2xl:w-[34%] rounded-lg text-sm font-Inter leading-5"
            >
                Shop Now
            </Button>
        </div>

    </section>
  )
}
