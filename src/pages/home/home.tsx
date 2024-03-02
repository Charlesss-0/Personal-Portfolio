import { motion } from 'framer-motion'
import styled from 'styled-components'

const Container = styled.div`
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
	return (
		<Container>
			<div className="overflow-hidden">
				<motion.div
					className="flex gap-[2rem] w-[max-content] p-[1rem] [&>img]:w-[300px]"
					style={{ whiteSpace: 'nowrap' }}
					initial={{ x: '30%' }}
					animate={{ x: '-100%' }}
					transition={{
						x: {
							type: 'tween',
							duration: 20,
							ease: 'linear',
							repeat: Infinity,
						},
					}}
				>
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
					<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
				</motion.div>
			</div>
		</Container>
	)
}
