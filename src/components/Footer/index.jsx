
export default function index() {
    const footerListStyles = "mb-[16px] text-white text-[20px] font-[500] hover:text-neutral-300 hover:cursor-pointer hover:ml-2 transition-all ease-in-out duration-100"
    return (
      <footer className="pl-[140px] py-[60px] h-[100vh]  bg-[#003057] items-start justify-start font-Inter w-[100%]">
        <section className="flex items-start justify-start  gap-40 font-Inter">
          <a href="" className="text-[46px] font-[600] text-white tracking-[2px] uppercase">Luster</a>
          <div className="flex gap-24">
            <div className="w-[150px]">
              <h2 className="text-blue-500 uppercase text-[16px] font-[600] tracking-[2px] mb-4">Shop</h2>
              <ul className="">
                <li className={footerListStyles}> <a href="">All Products</a> </li>
                <li className={footerListStyles}> <a href="">Starter Kits</a> </li>
                <li className={footerListStyles}> <a href="">Best Sellers</a> </li>
                <li className={footerListStyles}> <a href="">Cleanser</a> </li>
                <li className={footerListStyles}> <a href="">Serum</a> </li>
                <li className={footerListStyles}> <a href="">Moisturizer</a> </li>
                <li className={footerListStyles}> <a href="">Kit</a> </li>
              </ul>
            </div>          
            <div className="w-[150px]">
              <h2 className="text-blue-500 uppercase text-[16px] font-[600] tracking-[2px] mb-4">Company</h2>
              <ul className="">
                <li className={footerListStyles}> <a href="">Blog</a> </li>
                <li className={footerListStyles}> <a href="">About</a> </li>
                <li className={footerListStyles}> <a href="">Contact</a> </li>
                <li className={footerListStyles}> <a href="">FAQ</a> </li>
                <li className={footerListStyles}> <a href="">Privacy Policy</a> </li>
              </ul>
            </div>          
            <div className="w-[150px]">
              <h2 className="text-blue-500 uppercase text-[16px] font-[600] tracking-[2px] mb-4">Admin</h2>
              <ul className="">
                <li className={footerListStyles}> <a href="">Style Guide</a></li>
                <li className={footerListStyles}> <a href="">Components</a></li>
                <li className={footerListStyles}> <a href="">Licenses</a></li>
                <li className={footerListStyles}> <a href="">Instructions</a> </li>
                <li className={footerListStyles}> <a href="">Changelog</a> </li>
                <li className={footerListStyles}> <a href="">Password</a> </li>
                <li className={footerListStyles}> <a href="">404</a> </li>
              </ul>
            </div>          
          </div>
        </section>
        <section className="text-white flex mt-28 justify-between">
          <p>&copy; Luster 2023. All rights reserved.</p>
          <div className="flex mr-36 gap-7">
            <span>Built by <a href="" className="text-blue-500 underline">ZapTek</a></span>
            <span>Powered by<a href="" className="text-blue-500 underline">Webflow</a></span>
          </div>
        </section>
      </footer>
    )
}