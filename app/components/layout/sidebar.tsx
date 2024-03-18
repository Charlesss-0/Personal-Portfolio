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
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		height: 5px;
		border-radius: 50rem;
		background: #008dda;
		transform: translate(-100%, -50%);
		transition: all 400ms;
	}

	&:hover::after {
		transform: translateX(0%);
	}
`

export default function Sidebar() {
	const items = [
		{
			name: 'Contact',
			link: '',
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
					<LinkItem key={item.name}>
						<a href={item.link}>{item.name}</a>
					</LinkItem>
				))}
			</ul>
		</Container>
	)
}
