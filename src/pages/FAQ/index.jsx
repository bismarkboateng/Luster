import { Navbar } from "../../components";

export default function index() {
  const backgroundImageUrl = 'https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c43f76f4bbf900dc7ec834_Page%20Banner%20Background.svg';
// <img src="https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c43f76f4bbf900dc7ec834_Page%20Banner%20Background.svg"/>
  return (
  <div>
  <Navbar />
    <div className="page-banner-wrapper mt-20 ">
      <div
      className="flex-col bg-blue-50 bg-center bg-no-repeat w-full py-20 sm:justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="heading-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-20">
      <h1 className="heading text-5xl text-blue-800 font-semibold mb-16">FAQs</h1>
      </div>
      <div className="paragraph-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-20">
        <p className="paragraph text-lg">Lorem ipsum dolor sit amet consectetur. Id tortor amet</p>
        <p className="paragraph text-lg"> aliquet vestibulum.</p>
      </div>
    </div>
    </div>

    {/* second div */}
    <div className="flex flex-col justify-center items-center mt-8"> 
      <h2 className="font-bold">What ingredients are in each Luster product?</h2>
      <h6 className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      <h6 className="">Suspendisse varius enim in eros elementum tristique. Duis</h6>
      <h6 className="">cursus, mi quis viverra ornare, eros dolor interdum nulla, ut</h6>
      <h6 className="">commodo diam libero vitae erat. Aenean faucibus nibh et justo</h6>
      <h6 className="">cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus</h6>
      <h6 className="">tristique posuere.</h6>
      <div className="border-b border-blue-200 w-1/3 h-0 mt-12">
      <h6 className="text-white">j</h6>
      </div>
    </div>
    

    <div className="flex flex-col justify-center items-center mt-8"> 
      <h2 className="font-bold">Do Luster products really work?</h2>
      <h6 className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      <h6 className="">Suspendisse varius enim in eros elementum tristique. Duis</h6>
      <h6 className="">cursus, mi quis viverra ornare, eros dolor interdum nulla, ut</h6>
      <h6 className="">commodo diam libero vitae erat. Aenean faucibus nibh et justo</h6>
      <h6 className="">cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus</h6>
      <h6 className="">tristique posuere.</h6>
      <div className="border-b border-blue-200 w-1/3 h-0 mt-12">
      <h6 className="text-white">j</h6>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center mt-8"> 
      <h2 className="font-bold">Will the face cleanser work for my skin type?</h2>
      <h6 className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      <h6 className="">Suspendisse varius enim in eros elementum tristique. Duis</h6>
      <h6 className="">cursus, mi quis viverra ornare, eros dolor interdum nulla, ut</h6>
      <h6 className="">commodo diam libero vitae erat. Aenean faucibus nibh et justo</h6>
      <h6 className="">cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus</h6>
      <h6 className="">tristique posuere.</h6>
      <div className="border-b border-blue-200 w-1/3 h-0 mt-12">
      <h6 className="text-white">j</h6>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center mt-8"> 
      <h2 className="font-bold">Are the Luster products sustainable?</h2>
      <h6 className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      <h6 className="">Suspendisse varius enim in eros elementum tristique. Duis</h6>
      <h6 className="">cursus, mi quis viverra ornare, eros dolor interdum nulla, ut</h6>
      <h6 className="">commodo diam libero vitae erat. Aenean faucibus nibh et justo</h6>
      <h6 className="">cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus</h6>
      <h6 className="">tristique posuere.</h6>
      <div className="border-b border-blue-200 w-1/3 h-0 mt-12">
      <h6 className="text-white">j</h6>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center mt-8"> 
      <h2 className="font-bold">Will Luster be releasing new products?</h2>
      <h6 className="flex text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      <h6 className="flex text-left">Suspendisse varius enim in eros elementum tristique. Duis</h6>
      <h6 className="flex text-left">cursus, mi quis viverra ornare, eros dolor interdum nulla, ut</h6>
      <h6 className="flex text-left">commodo diam libero vitae erat. Aenean faucibus nibh et justo</h6>
      <h6 className="flex text-left">cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus</h6>
      <h6 className="flex text-left">tristique posuere.</h6>
      <div className="border-b border-blue-200 w-1/3 h-0 mt-12">
      <h6 className="text-white">j</h6>
      </div>
    </div>


    {/* subscribe with the email letter */}
    <div className="flex justify-between items-center font-inter text-neutral-950 text-base leading-1.5 font-normal box-border mt-24 relative p-12 bg-blue-50 bg-no-repeat bg-cover bg-center sm:flex flex-col gap-y-4 md:flex-row" style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c427574f45d1dc642c3d1c_Newsletter%20Background.svg")` }}>
      <div>
      <h3 className="text-4xl font-semibold text-blue-950 ml-20">Subscribe for</h3>
      <h3 className="text-4xl font-semibold text-blue-950 ml-20">Exclusive Discounts</h3>
      <h3 className="text-4xl font-semibold text-blue-950 ml-20">and Skin Care Tips</h3>  
      </div>

      <div className="relative sm:flex justify-center items-center">
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
    
    {/* bottom nav */}
    <div className="bg-blue-950">
    {/* first div */}
      <div className="flex justify-around items-center text-white sm:flex flex-col gap-y-12 md:flex-row">
        {/* luster shop company and the admin divs*/}
        <div className="flex justify-start items-start mt-0">
          <h1 className="text-2xl font-bold">LUSTER</h1>
        </div>
        {/* second div */}
        <div className="flex-col">
          <h6 className="text-sm text-blue-500">SHOP</h6>
          <div className="text-white">
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">All Products</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Starter Kits</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Best Sellers</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Cleanser</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Serum</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Moisturizer</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Kit</h6>
        </div>
        </div> 
        
        {/* second div */}
        <div>
        <h6 className="text-sm text-blue-500">COMPANY</h6>
          <div className="text-white">
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Blog</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">About</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Contact</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">FAQ</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Privacy Policy</h6>
          </div>
        </div>

        {/* third div */}
        <div>
        <h6 className="text-sm text-blue-500">ADMIN</h6>
          <div className="text-white">
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Style Guide</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Components</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Licenses</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Instructions</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Changelog</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">Password</h6>
          <h6 className="py-2 hover:translate-x-2 cursor-pointer transform transition-transform hover:text-gray-400">404</h6>
          </div>
        </div>
      </div>
        {/* lower div */}
        <div className="flex justify-around mt-20 text-white">
         <div className="p-4">© Luster 2023. All rights reserved.</div>
          <div className="ml-40 p-4">Built by <span className="text-blue-500 underline">Amoh Ntim</span></div>
          <div className="mr-4 py-4">
            <div>Powered by</div>
            <div><span className="text-blue-500 underline">Webflow</span></div>
          </div>
         <div>
         </div>
        </div>
    </div>
    
  </div>

  )
}
