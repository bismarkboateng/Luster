import { Navbar } from "../../components";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import { image01, image02, image03, image04 } from "../../assets";
import { BsArrowRight, BsCaretDown, BsCaretUp, BsHeart, BsStarFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Index() {
	useEffect(() => {
		const handleScroll = () => {
			// Your scroll event handling code here
			// This function will be called when the user scrolls anywhere on the page
			console.log("SCROLLING");
			const banner = document.querySelector('.myscroll'); // Replace with your banner class or ID

      // Check if the banner element exists
      if (banner) {
		console.log("FOUND");
        // Calculate the amount to scroll based on the scroll position
        const scrollAmount = window.scrollY * 2; // Adjust the factor to control the scroll speed

        // Set the new scrollLeft value
        banner.scrollLeft = scrollAmount;
      }
		};
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);



	const AccordionItem = ({ title, content }) => {
		const [isOpen, setIsOpen] = useState(false);
	
		const toggleAccordion = () => {
			setIsOpen(!isOpen);
		};
	
		return (
			<div className="">
				<div
					className={`flex justify-between p-2 cursor-pointer ${isOpen ? 'bg-gray-200' : ''}`}
					onClick={toggleAccordion}
				>
				<div>{title}</div>
				<div>{isOpen ? <BsCaretUp />: <BsCaretDown />}</div>
			</div>
			{isOpen && <div className="p-2">{content}</div>}
			</div>
		);
	};

	const Accordion = () => {
		const accordionItems = [
			{ title: 'Accordion Item 1', content: 'Content for Item 1' },
			{ title: 'Accordion Item 2', content: 'Content for Item 2' },
		];
	
		return (
			<div>
				{accordionItems.map((item, index) => (
					<AccordionItem key={index} title={item.title} content={item.content} />
				))}
			</div>
		);
	};

	const ProductDetail = ({img}) => {
		const [show,setShow] = useState(false)
		const showButton = () => {
			setShow(true)
		}
		const hideButton = () => {
			setShow(false)
		}

		return (
			<div className="relative" onMouseOver={showButton} onMouseOut={hideButton}>
				<span className="absolute py-1 z-0 top-3 left-3 px-2 tracking-widest uppercase text-xs text-blue-900 font-semibold rounded-3xl bg-white">Starter Kits</span>
				<img src={img} className="w-full rounded-lg" alt="" />
				{
					show && 
					<div className="p-5 w-full absolute bottom-[2px] top-auto">
						<button className="px-3 py-2 bg-blue-600 rounded-md text-white w-full">
							View Details
						</button>
					</div>
				}
			</div>
		)
	}

	

	const myText = "—30-DAY MONEY BACK GUARANTEE—TRY RISK FREE";
	

	
	return (
		<>
			<Navbar />
			<section className="bg-blue-50 flex lg:flex-row flex-col lg:p-20 p-5 gap-x-10 gap-y-10 mt-5">
				<div className="flex lg:flex-row flex-col gap-x-2 lg:w-3/5 w-full gap-y-2">
					<div className="flex lg:flex-col flex-row gap-x-2 gap-y-2 order-2">
						<img className="rounded-lg lg:w-28 w-16" src={img1} alt="" />
						<img className="rounded-lg lg:w-28 w-16" src={image03} alt="" />
						<img className="rounded-lg lg:w-28 w-16" src={img2} alt="" />
					</div>
					<div className="flex order-1">
						<img className="rounded-lg" src={image03} alt="" />
					</div>
				</div>
				<div className="flex flex-col self-center gap-y-5">
					<button className="flex px-3 py-2 rounded-full bg-transparent border border-blue-600 uppercase text-blue-600 tracking-widest justify-center lg:w-1/4 w-1/2 font-semibold text-xs">Cleanser</button>
					<h4 className="lg:text-6xl text-4xl text-blue-950">
						Face Wash
					</h4>
					<span className="text-[#4d6e89] text-xl font-semibold">
						$ 16.00 USD
					</span>
					<p className="text-xl font-normal text-[#003057]">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					</p>
					<div className="flex flex-col gap-y-5">
						<p className="flex items-center flex-row text-[#003057] font-normal text-lg gap-x-2"><BsHeart /> Simple, effective formula</p>
						<p className="flex items-center flex-row text-[#003057] font-normal text-lg gap-x-2"><BsHeart />100% organic ingridients</p>
						<p className="flex items-center flex-row text-[#003057] font-normal text-lg gap-x-2"><BsHeart />Never tested on animals</p>
					</div>
					<div className="flex-row flex gap-x-2">
						<form action="" className="flex-row flex gap-x-2">
							<input type="number" name="" id="" className="lg:p-4 p-1 border border-gray-400 rounded-lg lg:w-20 w-2/5" defaultValue={1}/>
							<button className="bg-[#2660ff] lg:py-4 p-1 py-4 lg:px-20 px-5 rounded-lg text-white font-semibold lg:w-full w-3/5">Add to Cart</button>
						</form>
					</div>
				</div>
			</section>
			<section className="bg-[#4d6e89] p-2 myscroll flex flex-row flex-nowrap overflow-hidden">
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
				<p className="text-gray-300 whitespace-nowrap">{myText}</p>
			</section>
			<section className="flex flex-col justify-center lg:p-20 p-5 py-32 gap-y-10">
				<h4 className="lg:text-6xl text-4xl text-blue-950 text-center">
					What&apos;s Included
				</h4>
				<div className="flex flex-row lg:flex-nowrap flex-wrap lg:gap-x-5 gap-x-0">
					<div className="lg:w-1/4 w-1/2 rounded-lg flex p-1 flex-col gap-y-5">
						<img src={image02} className="lg:w-full rounded-lg" alt="" />
						<span className="lg:text-3xl text-xl font-semibold text-blue-950">Starter Kit</span>
						<p className="lg:text-lg text-sm font-normal text-blue-950">
							Lorem ipsum dolor sit amet consectetur tortor amet aliquet vestibulum.
						</p>
					</div>
					<div className="lg:w-1/4 w-1/2 rounded-lg flex p-1 flex-col gap-y-5">
						<img src={image01} className="lg:w-full rounded-lg" alt="" />
						<span className="lg:text-3xl text-xl font-semibold text-blue-950">Cleanser</span>
						<p className="lg:text-lg text-sm font-normal text-blue-950">
							Lorem ipsum dolor sit amet consectetur tortor amet aliquet vestibulum.
						</p>
					</div>
					<div className="lg:w-1/4 w-1/2 rounded-lg flex p-1 flex-col gap-y-5">
						<img src={img3} className="lg:w-full rounded-lg" alt="" />
						<span className="lg:text-3xl text-xl font-semibold text-blue-950">Anti-Aging Serum</span>
						<p className="lg:text-lg text-sm font-normal text-blue-950">
							Lorem ipsum dolor sit amet consectetur tortor amet aliquet vestibulum.
						</p>
					</div>
					<div className="lg:w-1/4 w-1/2 rounded-lg flex p-1 flex-col gap-y-5">
						<img src={img4} className="lg:w-full rounded-lg" alt="" />
						<span className="lg:text-3xl text-xl font-semibold text-blue-950">Moisturizer</span>
						<p className="lg:text-lg text-sm font-normal text-blue-950">
							Lorem ipsum dolor sit amet consectetur tortor amet aliquet vestibulum.
						</p>
					</div>
				</div>
			</section>
			<section className="flex lg:flex-row flex-col lg:px-20 p-5 py-32 gap-x-10 gap-y-10">
				<div className="lg:w-3/5 w-full flex">
					<img src={img5} className="rounded-lg" alt="" />
				</div>
				<div className="flex flex-col lg:w-2/5 w-full gap-y-10 lg:self-center">
					<h4 className="lg:text-6xl text-4xl font-semibold text-blue-950">
						Made with the <br />Highest-Quality,<br />Organic Ingriedients
					</h4>
					<p className="font-semibold text-sm text-blue-900">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis quos nemo laborum labore, libero beatae repellendus, molestias minima quasi nam non. Culpa, voluptatum similique atque aliquam delectus ipsam eius!
					</p>
					<button className="flex lg:w-56 w-full justify-center items-center py-4 px-5 bg-blue-50 rounded-lg text-blue-600 font-semibold text-lg">Read Our Story</button>
				</div>
			</section>
			<section className="flex flex-col gap-y-10 lg:px-20 p-5 py-32 justify-center items-center my-bg bg-cover">
				<div className="flex flex-row gap-x-2">
					<BsStarFill className="text-blue-950" />
					<BsStarFill className="text-blue-950" />
					<BsStarFill className="text-blue-950" />
					<BsStarFill className="text-blue-950" />
					<BsStarFill className="text-blue-950" />
				</div>
				<p className="text-center text-blue-950 text-3xl font-semibold">
					&quot;These products have simplified my entire skin care routine <br /> and my skin has never been better!&quot;
				</p>
				<span className="text-xs text-blue-950 text-center uppercase tracking-widest font-semibold">Jennifer, Los Angeles</span>
			</section>
			<section className="flex lg:flex-row flex-col lg:px-20 p-5 py-32">
				<h4 className="text-4xl font-semibold text-blue-950 w-1/4">
					FAQs
				</h4>
				<div className="flex flex-col lg:w-3/4 w-full">
					<div className="flex flex-col justify-between border-0 border-b py-5 text-blue-950 font-semibold text-lg">
						<AccordionItem title={"What ingriedients are in each luster product? "} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et fugit cumque quod sint deleniti voluptate, facilis asperiores similique harum totam eius quae? Quasi illum repellat earum, ipsa labore voluptatibus!"} />
					</div>
					<div className="flex flex-col justify-between border-0 border-b py-5 text-blue-950 font-semibold text-lg">
						<AccordionItem title={"Do Luster products really work?  "} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et fugit cumque quod sint deleniti voluptate, facilis asperiores similique harum totam eius quae? Quasi illum repellat earum, ipsa labore voluptatibus!"} />
					</div>
					<div className="flex flex-col justify-between border-0 border-b py-5 text-blue-950 font-semibold text-lg">
						<AccordionItem title={"Will the face cleanser work for my skin type? "} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et fugit cumque quod sint deleniti voluptate, facilis asperiores similique harum totam eius quae? Quasi illum repellat earum, ipsa labore voluptatibus!"} />
					</div>
					<div className="flex flex-col justify-between border-0 border-b py-5 text-blue-950 font-semibold text-lg">
						<AccordionItem title={"Are the Luster products sustainable? "} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et fugit cumque quod sint deleniti voluptate, facilis asperiores similique harum totam eius quae? Quasi illum repellat earum, ipsa labore voluptatibus!"} />
					</div>
					<div className="flex flex-col justify-between border-0 border-b py-5 text-blue-950 font-semibold text-lg">
						<AccordionItem title={"Will Luster be releasing new products? "} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi et fugit cumque quod sint deleniti voluptate, facilis asperiores similique harum totam eius quae? Quasi illum repellat earum, ipsa labore voluptatibus!"} />
					</div>
				</div>
			</section>
			<section className="flex flex-col justify-center lg:p-20 p-5 py-32 gap-y-10">
				<h4 className="text-4xl lg:text-6xl text-blue-950 text-center">
					Customers Also Bought
				</h4>
				<div className="flex flex-row lg:flex-nowrap flex-wrap lg:gap-x-5">
					<div className="w-1/2 lg:w-1/4 p-2 flex-shrink rounded-lg flex flex-col gap-y-5 relative">
						<ProductDetail img={image04} />
						<span className="text-xl lg:text-3xl font-semibold text-blue-950">The Basics</span>
						<p className="text-sm lg:text-lg font-normal text-blue-950">
							Lorem ipsum dolor sit amet consectetur tortor amet aliquet vestibulum.
						</p>
						<span className="text-[#4d6e89] text-sm lg:text-xl font-semibold">
							$ 32.00 USD
						</span>
						
					</div>
					<div className="w-1/2 lg:w-1/4 p-2 flex-shrink rounded-lg flex flex-col gap-y-5 relative">
						<ProductDetail img={img3} />
						<span className="text-xl lg:text-3xl font-semibold text-blue-950">Anti-Aging Serum</span>
						<p className="text-sm lg:text-lg font-normal text-blue-950">
							Lorem ipsum dolor sit amet consectetur tortor amet aliquet vestibulum.
						</p>
						<span className="text-[#4d6e89] text-sm lg:text-xl font-semibold">
							$ 32.00 USD
						</span>
					</div>
					<div className="w-1/2 lg:w-1/4 p-2 flex-shrink rounded-lg flex flex-col gap-y-5 relative">
						<ProductDetail img={image01} />
						<span className="text-xl lg:text-3xl font-semibold text-blue-950">Cleanser</span>
						<p className="text-sm lg:text-lg font-normal text-blue-950">
							Lorem ipsum dolor sit amet consectetur tortor amet aliquet vestibulum.
						</p>
						<span className="text-[#4d6e89] text-sm lg:text-xl font-semibold">
							$ 18.00 USD
						</span>
					</div>
					<div className="w-1/2 lg:w-1/4 p-2 flex-shrink rounded-lg flex flex-col gap-y-5 relative flex-wrap">
						<ProductDetail img={image02} />
						<span className="text-xl lg:text-3xl font-semibold text-blue-950">The Full Package</span>
						<p className="text-sm lg:text-lg font-normal text-blue-950">
							Lorem ipsum dolor sit amet consectetur tortor amet aliquet vestibulum.
						</p>
						<span className="text-[#4d6e89] text-sm lg:text-xl font-semibold">
							$ 49.00 USD
						</span>
					</div>
				</div>
			</section>
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
		</>
	)
}
