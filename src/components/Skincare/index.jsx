import { Button } from ".."
import { SkinCare } from "../../assets"



export default function index() {
  return (
    <section className="w-[90%] mx-auto mt-20 flex flex-col lg:flex-row-reverse
        lg:gap-10 2xl:w-[81%] 2xl:gap-0">
        <div className="w-[100%]">
            <img
                src={SkinCare}
                alt="skin care"
                className="object-fit w-[100%] rounded-lg"
            />
        </div>
        
        <div className="w-[100%] mt-8 lg:mt-20 xl:mt-32
            2xl:mt-[17%]">
            <h2 className="text-[28px] w-[81%] text-[#003057] font-medium 
                font-Inter leading-[36.5px] md:text-[38px] md:w-[100%] lg:leading-[50px]
                2xl:w-[80%]">
                Making Skin Care More Accessible
            </h2>
            <p className="text-sm font-Inter text-[#003057] font-normal mt-4
                md:text-[16px] lg:mt-7 2xl:w-[70%]">
                Lorem ipsum dolor sit amet consectetur. Pretium sit massa semper vestibulum tellus ut tristique.
                Nibh placerat in id vestibulum lacus tellus non. Iaculis natoque gravida bibendum parturient. 
            </p>
            <Button
                className="bg-[#eef4ff] text-sm font-Inter text-[#2660ff] p-[16px]
                    w-[100%] md:w-[50%] rounded-lg font-semibold mt-5 md:text-[16px]
                    lg:mt-8"
            >
                Read Our Story
            </Button>
        </div>
    </section>
  )
}
