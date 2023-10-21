import { Data } from "./BlogData"
import { Button } from ".."
export default function index() {
    return (
      <section className="grid grid-cols-3 ml-[140px] gap-x-12 gap-y-32 w-[80%]">{

        Data.map(Blog => (
            <div className="relative w-[300px] h-[180px]" role="button">
                <img
                    src={Blog.image}
                    alt="product"
                    className="object-fit w-[100%] h-[100%] rounded-lg"
                /> 
            <span className="text-[22px] text-[#003057] font-Inter font-[500] leading[1.3]">
                {Blog.summary}
            </span>
            <Button className='absolute top-0 left-0 bg-white ml-5 mt-5 rounded-3xl px-3 py-1 uppercase font-Inter text-[12px] text-[#4D6E89] font-[500]'>
                {Blog.category}
            </Button>
        </div>

        ))
    }
      </section>
    )
  }
  