import Particles from '../animation/particles'
import Typewriter from '../ui/typewriter'

export default function Hero() {
	return (
		<div className="h-screen w-full">
			<Particles />
			<div className="absolute top-[50%] right-[5%] translate-y-[-50%] text-white londrina">
				<p className="text-[8rem] font-bold">Carlos Aragon</p>
				<Typewriter></Typewriter>
			</div>
		</div>
	)
}
