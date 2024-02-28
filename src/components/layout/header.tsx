export default function Header() {
	return (
		<div className="fixed top-0 left-[50%] translate-x-[-50%] w-[50%] flex justify-center text-white bg-[#2f2f2f33] backdrop-blur-sm p-[2rem] m-[1rem] rounded-[1rem]">
			<ul className="flex gap-[2vw] font-semibold text-[1.1rem] [&>li>a]:cursor-pointer">
				<li>
					<a>Home</a>
				</li>
				<li>
					<a>Projects</a>
				</li>
				<li>
					<a>About Me</a>
				</li>
			</ul>
		</div>
	)
}
