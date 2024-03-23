import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const blink = keyframes`
	25% {
		opacity: 0;
		height: 0;
	}

	75% {
		opacity: 1;
		height: 80%;
	}
`

const Cursor = styled.div`
	width: 5px;
	height: 80%;
	background: #efefef;
	border-radius: 50rem;
	animation: ${blink} 1s linear infinite;
`

export default function Typewriter({
	text,
}: {
	text: string
}): React.ReactNode {
	const [currentText, setCurrentText] = useState<string>('')
	const [direction, setDirection] = useState<number>(1) // 1 for forward, -1 for backward
	const [index, setIndex] = useState<number>(0)
	const delay: number = 10000

	useEffect(() => {
		const interval = setInterval(() => {
			if (direction === 1) {
				if (index === text.length) {
					setTimeout(() => {
						setDirection(-1) // Change direction to go backward after delay
					}, delay)
				} else {
					setCurrentText(text.slice(0, index + 1))
					setIndex(index + 1)
				}
			} else {
				if (index === 0) {
					setTimeout(() => {
						setDirection(1) // Change direction to go forward after delay
					}, delay)
				} else {
					setCurrentText(text.slice(0, index - 1))
					setIndex(index - 1)
				}
			}
		}, 50)

		return () => clearInterval(interval)
	}, [text, index, direction])

	return (
		<div className="flex gap-[0.5rem] items-center h-[5rem] md:h-[2.5rem]">
			<span className="text-[3rem] font-semibold md:text-[1.5rem]">
				{currentText}
			</span>
			<Cursor />
		</div>
	)
}
