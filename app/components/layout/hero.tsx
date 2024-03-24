import ParticlesBg from '../animation/particlesBg'
import Typewriter from '../ui/typewriter'

export default function Hero() {
	return (
		<div className="h-screen w-full bg-black">
			<ParticlesBg />
			<div className="absolute bottom-[20%] right-[5%] text-white select-none">
				<h1 className="text-[3rem] text-[#aaa] text-end md:text-[1.5rem] montserrat">
					Carlos Aragon
				</h1>
				<Typewriter text="Front-end Web Developer" />
			</div>
		</div>
	)
}
