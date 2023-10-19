import { BsArrowRightShort } from "react-icons/bs"



export default function index(props) {
  return (
    <div className={`relative w-[100%] h-[300px] ${props.largeScreenStyles}`}>
      <img
        src={props.image}
        alt="product"
        className="object-fit w-[100%] h-[100%] rounded-lg"
      />
      {props.children}
      <div className={props.classes}> 
        <span className="text-[18px] text-white font-Inter font-medium">
          {props.category}
        </span>
        <span><BsArrowRightShort className={props.iconClasses} /></span>
      </div>
    </div>
  )
}