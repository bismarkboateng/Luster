import { useState } from "react"
import { Link } from "react-router-dom"


export default function index(props) {
  const [onHover, setOnHover] = useState(false)

  const onMouseHoverHandler = () => {
    setOnHover(true)
  }

  const onMouseLeaveHandler = () => {
    setOnHover(false)
  }  

  return (
    <div
        className="relative"
        onMouseOver={onMouseHoverHandler}
        onMouseLeave={onMouseLeaveHandler}
    >
        {props.children}
        { onHover && (
          <Link to={"/product-detail"} style={{ textDecoration: "none"}}>
            <button
                className="absolute bottom-[44%] left-[8%] md:bottom-[24%] md:left-[5%] lg:bottom-[33%] lg:left-[5%] 
                py-[6px] px-[3px] md:py-[12px] md:px-[16px] rounded-lg text-xs
                bg-[#2660ff] font-semibold font-Inter leading-[21px] 
                text-white w-[70%] mx-auto transition ease-in delay-100"
            >
                View Details
            </button>
          </Link>
        )}
    </div>
  )
}
