import styled from 'styled-components'

const Sidebar = styled.div`
	position: fixed;
	left: 1rem;
	transform-origin: top left;
	transform: rotate(-90deg) translateX(-100%);

	width: 100vh;
	padding: 1.5rem;

	display: flex;

	color: #fff;
`

export default function Header() {
	return (
		<Sidebar>
			<ul className="flex justify-around w-full font-bold text-[1.1rem] [&>li>a]:cursor-pointer">
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
		</Sidebar>
	)
}
