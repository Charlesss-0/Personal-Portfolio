import styled from 'styled-components'

const Container = styled.div`
	position: absolute;
	left: 1rem;
	transform-origin: top left;
	transform: rotate(-90deg) translateX(-100%);

	width: 100vh;
	padding: 1.5rem;

	display: flex;

	color: #fff;
`

export default function Sidebar() {
	return (
		<Container>
			<ul className="flex justify-around w-full text-[1.2rem] [&>li>a]:cursor-pointer">
				<li>
					<a>Contact</a>
				</li>
				<li>
					<a>Details</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
			</ul>
		</Container>
	)
}
