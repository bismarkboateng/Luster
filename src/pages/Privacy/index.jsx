import { Navbar } from "../../components";

export default function index() {
  const backgroundImageUrl = 'https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c43f76f4bbf900dc7ec834_Page%20Banner%20Background.svg';
  const loremIpsumContent = [
    "Lorem ipsum dolor sit amet consectetur. Quis metus aenean nullam quis sed eleifend interdum nulla est. Aliquet pellentesque risus risus eu eu nec diam fusce. Condimentum massa libero egestas lacus dignissim ut non. Tristique pellentesque nam pellentesque imperdiet leo sed. Sapien tempor platea tristique egestas at.",
    "Aliquam sapien lectus pharetra nulla amet vel proin facilisis. Enim nunc nunc purus adipiscing tristique cursus nisl mattis. Lacus ac urna ornare odio adipiscing montes in at ut. Nullam elementum in eu hac tincidunt ipsum morbi pellentesque. Elit ornare purus mi fermentum malesuada volutpat molestie.",
    "Neque diam lectus ac nisl pellentesque scelerisque vitae pretium. Sed mauris erat nec elementum. Cursus at pharetra aenean tellus accumsan adipiscing integer eleifend in. Auctor mi condimentum blandit orci enim ullamcorper arcu sodales consequat. In a vulputate magna urna vitae cursus vel.",
    ];
  return (
    <div>
      <Navbar />
      <div
      className="flex-col bg-blue-50 bg-center bg-no-repeat w-full py-20 mt-20"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="heading-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-20">
      <h1 className="heading text-5xl text-blue-950 font-semibold mb-8 ">Privacy Policy</h1>
      </div>
      <div className="paragraph-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-20">
        <p className="paragraph text-lg">Last updated July 2023</p>
      </div>
    </div>
    {/* lorem paragraphs */}
      {/* first */}
    <div className="bg-white p-4">
      <div className="max-w-xl mx-auto">
        <p className="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet</p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Quis metus aenean nullam quis sed eleifend interdum nulla est. Aliquet pellentesque risus risus eu eu nec diam fusce. Condimentum massa libero egestas lacus dignissim ut non. Tristique pellentesque nam pellentesque imperdiet leo sed. Sapien tempor platea tristique egestas at.
        </p>
        <p className="mb-4">
          Aliquam sapien lectus pharetra nulla amet vel proin facilisis. Enim nunc nunc purus adipiscing tristique cursus nisl mattis. Lacus ac urna ornare odio adipiscing montes in at ut. Nullam elementum in eu hac tincidunt ipsum morbi pellentesque. Elit ornare purus mi fermentum malesuada volutpat molestie.
        </p>
        <p className="mb-4">
          Neque diam lectus ac nisl pellentesque scelerisque vitae pretium. Sed mauris erat nec elementum. Cursus at pharetra aenean tellus accumsan adipiscing integer eleifend in. Auctor mi condimentum blandit orci enim ullamcorper arcu sodales consequat. In a vulputate magna urna vitae cursus vel.
        </p>
        <p className="mb-4">
          Faucibus sed fringilla amet tortor lorem proin pellentesque et nisi. Sit purus quisque elementum in sollicitudin congue augue ullamcorper porta. Cursus cursus ultrices nec commodo imperdiet posuere velit. Aliquet viverra volutpat pellentesque faucibus. Dictum ultricies tellus nibh feugiat lectus. Sed maecenas vitae ut elementum eget porta. Praesent fames vehicula scelerisque auctor sit urna eros sed odio. Varius quis magna purus venenatis at condimentum. Et nec vestibulum vitae ipsum eget venenatis nunc.
        </p>
      </div>
    </div>
    {/* second paragraph */}
    <div className="bg-white p-4">
      <div className="max-w-xl mx-auto">
        <p className="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet</p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Quis metus aenean nullam quis sed eleifend interdum nulla est. Aliquet pellentesque risus risus eu eu nec diam fusce. Condimentum massa libero egestas lacus dignissim ut non. Tristique pellentesque nam pellentesque imperdiet leo sed. Sapien tempor platea tristique egestas at.
        </p>
        <p className="mb-4">
          Aliquam sapien lectus pharetra nulla amet vel proin facilisis. Enim nunc nunc purus adipiscing tristique cursus nisl mattis. Lacus ac urna ornare odio adipiscing montes in at ut. Nullam elementum in eu hac tincidunt ipsum morbi pellentesque. Elit ornare purus mi fermentum malesuada volutpat molestie.
        </p>
        <p className="mb-4">
          Neque diam lectus ac nisl pellentesque scelerisque vitae pretium. Sed mauris erat nec elementum. Cursus at pharetra aenean tellus accumsan adipiscing integer eleifend in. Auctor mi condimentum blandit orci enim ullamcorper arcu sodales consequat. In a vulputate magna urna vitae cursus vel.
        </p>
        <p className="mb-4">
          Faucibus sed fringilla amet tortor lorem proin pellentesque et nisi. Sit purus quisque elementum in sollicitudin congue augue ullamcorper porta. Cursus cursus ultrices nec commodo imperdiet posuere velit. Aliquet viverra volutpat pellentesque faucibus. Dictum ultricies tellus nibh feugiat lectus. Sed maecenas vitae ut elementum eget porta. Praesent fames vehicula scelerisque auctor sit urna eros sed odio. Varius quis magna purus venenatis at condimentum. Et nec vestibulum vitae ipsum eget venenatis nunc.
        </p>
        <div className="bg-white p-4">
      <div className="max-w-xl mx-auto">
        <ol className="list-decimal pl-4 mb-4">
          {loremIpsumContent.map((content, index) => (
            <li key={index} className="mb-2">{content}</li>
          ))}
        </ol>
      </div>
    </div>
    {/* body in light blue wrap */}
    <div className="bg-blue-200 rounded-lg p-4 text-left">
      Neque diam lectus ac nisl pellentesque scelerisque vitae pretium. Sed mauris erat nec elementum. Cursus at pharetra aenean tellus accumsan adipiscing integer eleifend in.
    </div>
    {/* last lorem */}
    <div className="p-4 mt-8">
      <p className="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet</p>
      <p className="mb-2">Faucibus sed fringilla amet tortor lorem proin pellentesque et nisi.</p>
      <p className="mb-2">Sit purus quisque elementum in sollicitudin congue augue ullamcorper porta.</p>
      <p className="mb-2">Cursus cursus ultrices nec commodo imperdiet posuere velit.</p>
      <p className="mb-2">Aliquet viverra volutpat pellentesque faucibus.</p>
      <p className="mb-2">Dictum ultricies tellus nibh feugiat lectus.</p>
      <p className="mb-2">Sed maecenas vitae ut elementum eget porta.</p>
      <p className="mb-2">Praesent fames vehicula scelerisque auctor sit urna eros sed odio.</p>
      <p className="mb-2">Varius quis magna purus venenatis at condimentum.</p>
      <p className="mb-2">Et nec vestibulum vitae ipsum eget venenatis nunc.</p>
    </div>
      </div>
    </div>

    {/* email sub */}
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
        <div className="flex items-start md:mb-60">
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
        <div className="md:mb-20">
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

{/* end of big div */}
    </div>
  )
}
