import { Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { useCallback } from 'react'

export default function Background() {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine)
	}, [])

	return (
		<div className="h-screen">
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={{
					fullScreen: {
						enable: false,
					},
					particles: {
						number: {
							value: 100,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						color: {
							value: '#efefef',
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 0,
								color: '#000000',
							},
						},
						opacity: {
							random: false,
							anim: {
								enable: false,
								speed: 1,
								opacity_min: 0.1,
								sync: false,
							},
						},
						size: {
							value: 1,
							random: true,
						},
						line_linked: {
							enable: true,
							distance: 150,
							color: '#efefef',
							opacity: 0.5,
							width: 1,
						},
						move: {
							enable: true,
							speed: 3,
							direction: 'none',
							random: false,
							straight: false,
							out_mode: 'out',
						},
					},
					interactivity: {
						detect_on: 'window',
						events: {
							onhover: {
								enable: true,
								mode: 'grab',
							},
							onclick: {
								enable: true,
								mode: 'push',
							},
						},
						modes: {
							grab: {
								distance: 200,
								line_linked: {
									opacity: 1,
								},
							},
							push: {
								particles_nb: 1,
							},
							remove: {
								particles_nb: 2,
							},
						},
					},
					retina_detect: false,
				}}
				className="h-full"
			/>
		</div>
	)
}
