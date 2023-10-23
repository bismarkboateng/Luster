import { BsArrowRight} from "react-icons/bs";

export default function () {
  return (
    <footer>
        <section className="flex lg:flex-row flex-col lg:px-20 p-5 py-10 my-bg justify-between gap-y-5">
            <h4 className="text-2xl text-blue-950">
                Subscribe for Eclusive <br /> Discounts and Skin Care Tips
            </h4>
            <form action="" className="relative">
                <input type="text" className="text p-2 lg:w-96 w-full border border-gray-300 bg-transparent rounded-lg" placeholder="Enter your email" />
                <button className="absolute right-5 top-3">
                    <BsArrowRight className="h-6 w-6 text-blue-900"/>
                </button>
            </form>
        </section>
        <section className="flex flex-row lg:px-20 p-5 py-10 bg-blue-950">
            <div className="flex lg:gap-x-64 w-full lg:flex-nowrap flex-wrap gap-y-10">
                <h4 className="text-4xl tracking-widest text-white font-bold w-full">
                    LUSTER
                </h4>
                <div className="flex flex-col gap-y-5 w-1/2 p-2 lg:w-1/4">
                    <span className="text-blue-600 text-xs font-semibold">SHOP</span>
                    <p className="text-white text-xs font-semibold">All Products</p>
                    <p className="text-white text-xs font-semibold">Starter Kits</p>
                    <p className="text-white text-xs font-semibold">Best Sellers</p>
                    <p className="text-white text-xs font-semibold">Cleanser</p>
                    <p className="text-white text-xs font-semibold">Serum</p>
                    <p className="text-white text-xs font-semibold">Moisturizer</p>
                    <p className="text-white text-xs font-semibold">Kit</p>
                </div>
                <div className="flex flex-col gap-y-5 w-1/2 p-2 lg:w-1/4">
                    <span className="text-blue-600 text-xs font-semibold">COMPANY</span>
                    <p className="text-white text-xs font-semibold">All Products</p>
                    <p className="text-white text-xs font-semibold">Starter Kits</p>
                    <p className="text-white text-xs font-semibold">Best Sellers</p>
                    <p className="text-white text-xs font-semibold">Cleanser</p>
                    <p className="text-white text-xs font-semibold">Serum</p>
                    <p className="text-white text-xs font-semibold">Moisturizer</p>
                    <p className="text-white text-xs font-semibold">Kit</p>
                </div>
                <div className="flex flex-col gap-y-5 w-1/2 p-2 lg:w-1/4">
                    <span className="text-blue-600 text-xs font-semibold">ADMIN</span>
                    <p className="text-white text-xs font-semibold">All Products</p>
                    <p className="text-white text-xs font-semibold">Starter Kits</p>
                    <p className="text-white text-xs font-semibold">Best Sellers</p>
                    <p className="text-white text-xs font-semibold">Cleanser</p>
                    <p className="text-white text-xs font-semibold">Serum</p>
                    <p className="text-white text-xs font-semibold">Moisturizer</p>
                    <p className="text-white text-xs font-semibold">Kit</p>
                </div>
            </div>
        </section>
    </footer>
  )
}
