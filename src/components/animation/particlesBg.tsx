import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { useCallback } from 'react'

export default function Background() {
	const particlesInit = useCallback(async engine => {
		await loadSlim(engine)
	}, [])

	const options = {
		fullScreen: {
			enable: false,
		},
		particles: {
			number: {
				value: 250,
				density: {
					enable: false,
					value_area: 800,
				},
			},
			color: {
				value: '#124076',
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000',
				},
				polygon: {
					nb_sides: 5,
				},
			},
			opacity: {
				value: 1,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 3,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: '#ffffff',
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 2,
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
				resize: false,
			},
			modes: {
				grab: {
					distance: 200,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 5,
					duration: 2,
					opacity: 8,
					speed: 3,
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
	}
	return (
		<div className="h-screen">
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={options}
				className="h-full"
			/>
		</div>
	)
}
