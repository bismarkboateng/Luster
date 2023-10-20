import { FaStar } from "react-icons/fa"


export default function index() {

  const starStyle = "w-[20px] h-[20px] text-[#003057]"
  return (
    <section className="w-full py-[96px] bg-[#eef4ff] bg-rating
        bg-cover bg-center bg-no-repeat flex flex-col justify-center
        items-center 2xl:py-[100px]">
        
        <div className="flex flex-row gap-2 mb-10">
            <FaStar className={starStyle} />
            <FaStar className={starStyle} />
            <FaStar className={starStyle} />
            <FaStar className={starStyle} />
            <FaStar className={starStyle} />
        </div>

        <p className="text-xl font-Inter text-[#003057] text-center font-medium
            w-[90%] mb-5 md:w-[78%] md:text-2xl 2xl:w-[50%] 2xl:text-[30px]">
            “These products have simplified my entire skin care routine and my skin has never been better!”
        </p>

        <p className="text-[10px] font-Inter text-[#003057] text-center tracking-[2px]
            font-medium md:text-[14px]">
            JENNIFER, LOS ANGELES
        </p>
    </section>
  )
}
