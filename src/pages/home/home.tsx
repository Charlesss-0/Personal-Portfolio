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
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	margin-left: 6rem;
	-webkit-mask-image: linear-gradient(
		90deg,
		transparent,
		#fff 30%,
		#fff 70%,
		transparent
	);
`

export default function Main() {
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
		<Container>
			<div className="overflow-hidden p-[2rem]">
				<motion.div
					className="flex justify-around w-[100%]"
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
						<img src={icon} key={index} className="h-[100px]" />
					))}
				</motion.div>
			</div>
		</Container>
	)
}
