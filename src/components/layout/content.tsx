import { GC, WeatherModelApp } from '../models'

export default function Content(): JSX.Element {
	const projects = [
		{
			name: 'GC (e-commerce website)',
			description:
				'Developed an e-commerce platform with user authentication that allows users to save their favorites products',
			model: <GC />,
		},
		{
			name: 'Weather App',
			description: 'View the current weather in your local city',
			model: <WeatherModelApp />,
		},
		{
			name: 'Etch-a-Sketch',
			description:
				'Make any pixel drawing starting with a grid of 16x16 up to 100x100',
		},
	]

	return (
		<div id="projects" className="p-[2rem]">
			<ul className="flex flex-col gap-[25rem]">
				{projects.map((item, index) => (
					<li
						key={index}
						className={`flex ${index % 2 === 0 ? 'flex' : 'flex-row-reverse'}`}
					>
						<div className="w-[200rem]">{item.model}</div>

						<div className="w-full text-center p-[1rem] flex flex-col gap-[2rem] justify-center items-center">
							<h1 className="text-[1.5rem]">{item.name}</h1>
							<p className="w-[50%] text-[1.1rem]">{item.description}</p>
							<button className="border px-[1rem] py-[0.5rem]">
								View Project
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
