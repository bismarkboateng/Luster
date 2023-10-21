export default function index(props) {
    return (
      <section className=" bg-titleGradient relative  bg-center bg-no-repeat bg-cover w-[100%] bg-blue-50 bg-[50%]-[50%] mt-10 pl-[140px] py-[80px]">
         <h1 className=" font-Inter font-[500] text-[52px] text-primaryColor ">{props.title}</h1>
         <p className=" font-Inter text-[20px] text-primaryColor w-[450px]">{props.titleDescription}</p>
      </section>
    )
  }
  