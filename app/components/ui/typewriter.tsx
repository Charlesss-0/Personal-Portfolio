import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react'

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
	background: #008dda;
	border-radius: 50rem;
	animation: ${blink} 1s linear infinite;
`

export default function Typewriter({ text }: { text: string }) {
	const [currentText, setCurrentText] = useState('')
	const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward
	const [currentIndex, setCurrentIndex] = useState(0)
	const delay = 10000

	useEffect(() => {
		const interval = setInterval(() => {
			if (direction === 1) {
				if (currentIndex === text.length) {
					setTimeout(() => {
						setDirection(-1) // Change direction to go backward after delay
					}, delay)
				} else {
					setCurrentText(text.slice(0, currentIndex + 1))
					setCurrentIndex(currentIndex + 1)
				}
			} else {
				if (currentIndex === 0) {
					setTimeout(() => {
						setDirection(1) // Change direction to go forward after delay
					}, delay)
				} else {
					setCurrentText(text.slice(0, currentIndex - 1))
					setCurrentIndex(currentIndex - 1)
				}
			}
		}, 50)

		return () => clearInterval(interval)
	}, [text, currentIndex, direction])

	return (
		<div className="flex gap-[0.5rem] items-center h-[5rem]">
			<h2 className="text-[3rem] font-semibold">{currentText}</h2>
			<Cursor />
		</div>
	)
}
