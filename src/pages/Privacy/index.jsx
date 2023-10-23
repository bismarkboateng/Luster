import { Navbar,Footer } from "../../components";

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
      <div className="heading-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100 
        ml-20 2xl:ml-60 xl:ml-36">
      <h1 className="heading text-5xl text-blue-950 font-semibold mb-8 ">Privacy Policy</h1>
      </div>
      <div className="paragraph-wrapper transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d opacity-100
        ml-20 2xl:ml-60 xl:ml-36">
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

    <div className="mt-20">
      <Footer />
    </div>
    </div>
  )
}
