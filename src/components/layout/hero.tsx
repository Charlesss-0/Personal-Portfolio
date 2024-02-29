import Particles from '../animation/particles'
import Typewriter from './heading'

export default function Hero() {
	return (
		<div className="h-screen w-full">
			<Particles />
			<div className="absolute top-[50%] right-[5%] translate-y-[-50%] text-white londrina">
				<Typewriter></Typewriter>
				<p className="text-[3rem] font-bold">Front-end Web Developer</p>
			</div>
		</div>
	)
}
