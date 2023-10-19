export default function index() {
  const backgroundImageUrl = 'https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c43f76f4bbf900dc7ec834_Page%20Banner%20Background.svg';
// <img src="https://uploads-ssl.webflow.com/64c2d239213b66830a983d4d/64c43f76f4bbf900dc7ec834_Page%20Banner%20Background.svg"/>
  return (
    <div className="page-banner-wrapper mt-20">
      <div
      className="bg-blue-50 bg-center bg-no-repeat w-full py-20"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
    <div className="heading-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-20">
    <h1 className="heading text-5xl text-blue-800 font-bold mb-16">FAQs</h1>
  </div>
  <div className="paragraph-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 ml-20">
    <p className="paragraph text-lg">Lorem ipsum dolor sit amet consectetur. Id tortor amet</p>
    <p className="paragraph text-lg">aliquet vestibulum.</p>
  </div>

    </div>
</div>

  )
}
