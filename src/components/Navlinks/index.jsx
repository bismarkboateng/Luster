import { Link } from "react-router-dom"


export default function index() {

  const liStyles = `text-base font-Inter text-[#003057] font-medium
    px-[4px] py-[5px] rounded-md hover:bg-blue-100 hover:text-blue-600
    transition-all`

  return (
    <ul className="flex flex-row items-center hidden gap-7 
        lg:flex lg:mr-auto cursor-pointer">
        <Link to={"/all-product"}>
          <li className={liStyles}>Shop</li>
        </Link>

        <Link to={"/blog"} style={{ textDecoration: "none"}}>
          <li className={liStyles}>Blog</li>
        </Link>
        
        <Link to={"/faq"} style={{ textDecoration: "none"}}>
          <li className={liStyles}>FAQ</li>
        </Link>

        <Link to={"/contact"} style={{ textDecoration: "none"}}>
          <li className={liStyles}>Contact</li>
        </Link>
    </ul>
  )
}
