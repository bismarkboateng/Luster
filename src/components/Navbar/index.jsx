import { useState } from "react"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { BsCart3 } from "react-icons/bs"
import { GoSearch } from "react-icons/go"
import { Link } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"

import { Navlinks, Input } from ".."


export default function index() {
  const [searchTerm, setSearchTerm] = useState("")
  const [onMobile, setOnMobile] = useState(false)


  const onMenuClickHandler = () => {
    setOnMobile(prevOnMobile => !prevOnMobile)
  }

  const onCartClickHandler = () => {
    console.log("Cart clicked")
  }

  const onInputChangeHandler = (event) => {
    setSearchTerm(event.target.value)
  }

  const onSearchClickHandler = () => {
    console.log(searchTerm)
    setSearchTerm("")
  }

  const liStyles = `text-base font-Inter text-[#003057] font-medium
  px-[4px] py-[3px] rounded-md hover:bg-blue-100 hover:text-blue-600
  transition-all`

  return (
    <nav className="relative w-[90%] mx-auto flex flex-row 
      justify-between lg:justify-start items-center mt-7 md:w-[95%]
      xl:w-[75%]">

        <Navlinks />

        <i className="lg:hidden">
          { onMobile ? (
          <AiOutlineClose  
            className="text-[#003057] text-3xl leading-[36px] cursor-pointer
            font-normal font-Inter"
            onClick={onMenuClickHandler}
          />
          ) : (
            
          <HiOutlineMenuAlt1  
            className="text-[#003057] text-3xl leading-[36px] cursor-pointer
            font-normal font-Inter"
            onClick={onMenuClickHandler}
          />
          )}
        </i>

        {onMobile && (
          <div className="absolute top-10 left-6 z-[10]">
            <ul className="flex flex-col bg-white items-center gap-2 rounded-md shadow-md
                p-5" data-aos="fade-right">
                <Link to={"/all-product"}>
                  <li className={liStyles}>Shop</li>
                </Link>

                <Link to={"/privacy"} style={{ textDecoration: "none"}}>
                  <li className={liStyles}>Privacy</li>
                </Link>
                
                <Link to={"/faq"} style={{ textDecoration: "none"}}>
                  <li className={liStyles}>FAQ</li>
                </Link>

                <Link to={"/contact"} style={{ textDecoration: "none"}}>
                  <li className={liStyles}>Contact</li>
                </Link>
            </ul>
          </div>
        )}


          <div className="lg:mr-auto">
          <Link to={"/"} style={{ textDecoration: "none"}}>
              <img src="https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c2f5c21e2d449f68e67eb7_Luster%20Logo.svg"
              />
          </Link>
          </div>

        <div className="flex flex-row gap-8 items-center">

          <div className="flex flex-row items-center py-[10px] px-[16px] text-base
            border border-[#E0E8ED] rounded-lg h-[38px] hidden lg:flex
          ">
            <Input
              className="outline-none border-none focus:outline-none
              placeholder:font-Inter placeholer:text-gray-500 text-gray-500"
              onChange={onInputChangeHandler}
              value={searchTerm}
            />

            <i className="cursor-pointer">
              <GoSearch 
                className="text-[#003057] w-[40px] h-[26px]"
                onClick={onSearchClickHandler}
              />
            </i>
          </div>

          <i className="relative">
              <div className="absolute top-0 left-5 w-[10px] h-[10px] rounded-full
              font-Inter text-[#2660FF] bg-[#EEF4FF] text-[10px]
              flex flex-row justify-center items-center">3</div>
              <BsCart3 
                className="w-[28px] h-[28px] text-gray-600"
                onClick={onCartClickHandler}
              />
          </i>

        </div>
    </nav>
  )
}
