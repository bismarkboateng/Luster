
import { Hero } from "../../assets"
import { Herocard } from ".."



export default function index() {
  return (
    <section className="relative w-[100%] mt-10">
      <section className="w-[100%] h-[280px] md:h-[440px] 
        lg:h-[450px] xl:h-[490px] 2xl:h-[680px]">
        <img
          src={Hero}
          alt="hero"
          className="object-fit w-[100%] h-[100%]"
        />
      </section>
      <Herocard />
    </section>
  )
}
