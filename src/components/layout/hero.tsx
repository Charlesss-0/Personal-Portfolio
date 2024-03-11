import ParticlesBg from '../animation/particlesBg'
import Typewriter from '../ui/typewriter'

export default function Hero() {
	return (
		<div className="h-screen w-full">
			<ParticlesBg />
			<div className="absolute top-[50%] right-[5%] translate-y-[-50%] text-white select-none londrina">
				<p className="text-[8rem] font-semibold md:text-[3rem]">
					Carlos Aragon
				</p>
				<Typewriter></Typewriter>
			</div>
		</div>
	)
}
