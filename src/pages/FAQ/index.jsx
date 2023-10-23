import { Navbar, Footer } from "../../components";

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
      <div className="heading-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-5
        lg:ml-7 xl:ml-40 2xl:ml-60">
        <h1 className="heading text-5xl text-blue-800 font-semibold mb-16">FAQs</h1>
      </div>
      <div className="paragraph-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-5
        lg:ml-7 xl:ml-40 2xl:ml-60">
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

    <Footer />
  </div>

  )
}
