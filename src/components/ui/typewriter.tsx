import { animate, motion, useMotionValue, useTransform } from 'framer-motion'

import { useEffect } from 'react'

export default function Typewriter() {
	const baseText = 'Front-end Web Developer'
	const count = useMotionValue(0)
	const rounded = useTransform(count, latest => Math.round(latest))
	const displayText = useTransform(rounded, latest => baseText.slice(0, latest))

	useEffect(() => {
		const controls = animate(count, baseText.length, {
			type: 'tween',
			duration: 1,
			ease: 'easeInOut',
			repeat: Infinity,
			repeatDelay: 5,
			repeatType: 'reverse',
		})

		return controls.stop
	}, [count])

	return (
		<span>
			<motion.span className="text-[3rem] font-bold md:text-[1.5rem]">
				{displayText}
			</motion.span>
			<CursorBlinker />
		</span>
	)
}

function CursorBlinker() {
	const cursorVariant = {
		blinking: {
			opacity: [0, 0, 1, 1],
			transition: {
				duration: 1,
				repeat: Infinity,
				repeatDelay: 0,
				ease: 'linear',
				times: [0, 0.5, 0.5, 1],
			},
		},
	}

	return (
		<motion.div
			variants={cursorVariant}
			animate="blinking"
			className="inline-block h-[3rem] w-[5px] rounded-sm translate-y-1 bg-[#0B60B0]"
		/>
	)
}
