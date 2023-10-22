import { Navbar } from "../../components";

export default function index() {
  const backgroundImageUrl = 'https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c43f76f4bbf900dc7ec834_Page%20Banner%20Background.svg';

  return (
    <div>
      <Navbar />
      <div
      className="flex-col bg-blue-50 bg-center bg-no-repeat w-full py-20 mt-20 sm:justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="heading-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-20">
      <h1 className="heading text-5xl text-blue-950 font-semibold mb-8">Privacy Policy</h1>
      </div>
      <div className="paragraph-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-20">
        <p className="paragraph text-lg">Last updated July 2023</p>
      </div>
    </div>

    {/* email sub */}
    <div className="flex justify-between items-center font-inter text-neutral-950 text-base leading-1.5 font-normal box-border mt-24 relative p-12 bg-blue-50 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c427574f45d1dc642c3d1c_Newsletter%20Background.svg")` }}>
      <div>
      <h3 className="text-4xl font-semibold text-blue-950 ml-20">Subscribe for</h3>
      <h3 className="text-4xl font-semibold text-blue-950 ml-20">Exclusive Discounts</h3>
      <h3 className="text-4xl font-semibold text-blue-950 ml-20">and Skin Care Tips</h3>  
      </div>

      <div className="relative">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-64 p-4 text-gray-600 placeholder-gray-400 border-2 border-gray-400 rounded-md opacity-70 focus:opacity-100"
      />
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      </div>
   </div>
{/* end of big div */}
    </div>
  )
}
