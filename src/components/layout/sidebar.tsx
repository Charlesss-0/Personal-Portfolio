import styled from 'styled-components'

const Container = styled.div`
	position: fixed;
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
		</Container>
	)
}
