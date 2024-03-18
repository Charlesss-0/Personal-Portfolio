import ParticlesBg from '../animation/particlesBg'
import Typewriter from '../ui/typewriter'

export default function Hero() {
	return (
		<div className="h-screen w-full bg-black">
			<ParticlesBg />
			<div className="absolute top-[50%] right-[5%] translate-y-[-50%] text-white select-none londrina">
				<h1 className="text-[8rem] font-semibold md:text-[3rem]">
					Carlos Aragon
				</h1>
				<Typewriter text="Front-end Web Developer" />
			</div>
		</div>
	)
}
