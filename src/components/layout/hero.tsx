import Particles from '../animation/particles'

export default function Hero() {
	return (
		<div className="h-screen w-full">
			<Particles />
			<h1 className="absolute top-[50%] right-[10%] translate-y-[-50%] text-white text-[8rem] font-semibold text-stroke">
				Carlos Aragon
			</h1>
		</div>
	)
}
