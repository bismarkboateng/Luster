
export default function index() {

  const liStyles = "text-base font-Inter text-[#003057] font-medium"
  return (
    <ul className="flex flex-row items-center hidden gap-7 
        lg:flex lg:mr-auto cursor-pointer">
        <li className={liStyles}>Shop</li>
        <li className={liStyles}>Blog</li>
        <li className={liStyles}>FAQ</li>
        <li className={liStyles}>Contact</li>
    </ul>
  )
}
