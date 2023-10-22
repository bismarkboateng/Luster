import { useState } from "react"


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
            <button
                className="absolute bottom-[33%] left-[5%] py-[12px] px-[16px] rounded-lg text-sm
                bg-[#2660ff] font-semibold font-Inter leading-[21px] 
                text-white w-[70%] mx-auto transition ease-in delay-100"
            >
                View Details
            </button>
        )}
    </div>
  )
}
