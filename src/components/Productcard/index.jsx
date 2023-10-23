export default function index(props) {
  return (
    <div className={props.className}>
      <img
        src={props.image}
        alt={props.category}
        className="object-fit w-[100%] h-[100%] rounded-lg"
        data-aos="zoom-in"
        data-aos-duration="500"
      />
      {props.children}
    </div>
  )
}