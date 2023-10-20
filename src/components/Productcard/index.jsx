export default function index(props) {
  return (
    <div className={props.className}>
      <img
        src={props.image}
        alt={props.category}
        className="object-fit w-[100%] h-[100%] rounded-lg"
      />
      {props.children}
    </div>
  )
}