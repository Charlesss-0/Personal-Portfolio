import {
	css,
	figma,
	firebase,
	git,
	github,
	html,
	javascript,
	react,
	tailwind,
	threeJS,
	typescript,
	webpack,
} from '../../assets'

import { motion } from 'framer-motion'

export default function Scroll() {
	const icons = [
		html,
		css,
		javascript,
		react,
		typescript,
		tailwind,
		git,
		github,
		threeJS,
		firebase,
		webpack,
		figma,
	]

	return (
		<div
			className="overflow-hidden p-[2rem]"
			style={{
				WebkitMask: `linear-gradient(
                    90deg,
                    transparent,
                    #fff 30%,
                    #fff 70%,
                    transparent
                )`,
			}}
		>
			<motion.div
				className="flex justify-around gap-[2rem] w-full"
				initial={{ x: '100%' }}
				animate={{ x: '-100%' }}
				transition={{
					x: {
						duration: 20,
						ease: 'linear',
						repeat: Infinity,
					},
				}}
			>
				{icons.map((icon, index) => (
					<img src={icon} key={index} className="w-[100px]" />
				))}
			</motion.div>
		</div>
	)
}
