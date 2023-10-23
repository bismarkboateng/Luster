import { TitleCard, ContactForm, ContactSocialCard, Navbar, Footer } from "../../components";

export default function index() {
  const backgroundImageUrl = 'https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c43f76f4bbf900dc7ec834_Page%20Banner%20Background.svg';

  return (
    <div>
      <Navbar />
      {/* <TitleCard 
        title={"Contact"}
        titleDescription={"Lorem ipsum dolor sit amet consectetur. Id tortor amet aliquet vestibulum."}
      /> */}

      <div className="page-banner-wrapper mt-20 ">
        <div
        className="flex-col bg-blue-50 bg-center bg-no-repeat w-full py-20 sm:justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <div className="heading-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-5
          lg:ml-7 xl:ml-40 2xl:ml-60">
          <h1 className="heading text-5xl text-blue-800 font-semibold mb-16">Contact</h1>
        </div>
        <div className="paragraph-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-5
          lg:ml-7 xl:ml-40 2xl:ml-60">
          <p className="paragraph text-lg">Lorem ipsum dolor sit amet consectetur. Id tortor amet</p>
          <p className="paragraph text-lg"> aliquet vestibulum.</p>
        </div>
      </div>
      <div className="flex flex-col 2xl:flex-row mt-20 gap-32 2xl:ml-20">
        <ContactSocialCard/>
        <ContactForm />
      </div>
    </div>

    <div className="mt-20">
      <Footer />
    </div>
  </div>
  )
}