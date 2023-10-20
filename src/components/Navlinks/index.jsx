import { Link } from "react-router-dom"


export default function index() {

  const liStyles = "text-base font-Inter text-[#003057] font-medium"
  return (
    <ul className="flex flex-row items-center hidden gap-7 
        lg:flex lg:mr-auto cursor-pointer">
        <li className={liStyles}>Shop</li>

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
