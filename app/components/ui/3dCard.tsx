import { useEffect, useRef } from 'react'

import VanillaTilt from 'vanilla-tilt'
import styled from 'styled-components'

const Box = styled.div`
	position: relative;
	transform-style: preserve-3d;
	overflow: hidden;
	border-radius: 1rem;
`

const CardItem = styled.div`
	background: #fff3;
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
			reverse: true,
			perspective: 1000,
		})
	}, [])

	return (
		<Box ref={divRef}>
			<CardItem>
				<img
					src={props.img}
					alt={props.details}
					style={{
						objectFit: 'cover',
					}}
				/>
			</CardItem>
		</Box>
	)
}
