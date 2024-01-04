import Link from "next/link";

const Navbar = () => {
	return (
		<div className="absolute top-10  w-full flex justify-between px-52 font-lora">
			<div>
				<Link className="text-bold text-xl" href="/">Aorta Capital</Link>
			</div>
			<div className="flex gap-10 text-xs ">

				<Link href="/mission">Mission</Link>
				<Link href="/our-companies">Our Companies</Link>
				<Link href="/team">Team</Link>
			</div>
		</div>
	)
}

export default Navbar;
