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

const LinkItem = styled.li`
	position: relative;
	width: 6rem;
	display: flex;
	justify-content: center;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #fff;
		transform-origin: bottom right;
		transition: transform 0.25s linear;
	}

	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`

export default function Sidebar() {
	const items = [
		{
			name: 'Contact',
			link: '#contact',
		},
		{
			name: 'Details',
			link: '',
		},
		{
			name: 'Projects',
			link: '#projects',
		},
	]

	return (
		<Container>
			<ul className="flex justify-around w-full text-[1.2rem] [&>li>a]:cursor-pointer">
				{items.map(item => (
					<a key={item.name} href={item.link}>
						<LinkItem>{item.name}</LinkItem>
					</a>
				))}
			</ul>
		</Container>
	)
}
