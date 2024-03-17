import { useEffect, useRef } from 'react'

import VanillaTilt from 'vanilla-tilt'
import styled from 'styled-components'

const Box = styled.div`
	position: relative;
	transform-style: preserve-3d;
	overflow: hidden;
	border-radius: 1rem;

	&:hover {
		box-shadow: 0 0 50px #fff3, 0 0 50px #fff3, 0 0 50px #fff3;
	}
`

export default function Card(props: {
	img: string | undefined
	details: string | undefined
}) {
	const divRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const div = divRef?.current

		VanillaTilt.init(div as HTMLElement, {
			max: 15,
			speed: 200,
			glare: true,
			'max-glare': 0.4,
			reverse: true,
			perspective: 1000,
		})
	}, [])

	return (
		<Box ref={divRef}>
			<div className="bg-[#fff3] mx-[-0.5rem]">
				<img
					src={props.img}
					alt={props.details}
					loading="lazy"
					className="object-cover cursor-pointer"
				/>
			</div>
		</Box>
	)
}
