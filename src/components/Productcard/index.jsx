import { BsArrowRightShort } from "react-icons/bs"



export default function index({ image, category }) {
  return (
    <div className="relative w-[100%] h-[300px]">
      <img
        src={image}
        alt="product"
        className="object-fit w-[100%] h-[100%] rounded-lg"
      />
      <div className="absolute bottom-2 left-3 flex flex-row 
        justify-between items-center w-[90%]">
        <span className="text-[18px] text-white font-Inter font-medium">
          {category}
        </span>
        <span><BsArrowRightShort className="text-[36px] text-[#2660ff]" /></span>
      </div>
    </div>
  )
}
