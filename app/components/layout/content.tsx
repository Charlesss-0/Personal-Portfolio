import Card from '../ui/3dCard'
import GC from '../../assets/images/gc-site.webp'
import React from 'react'
import WeatherApp from '../../assets/images/weather-app.webp'
import etchASketch from '../../assets/images/etchAsketch.webp'
import styled from 'styled-components'

const ViewProjects = styled.button`
	font-size: 1.5rem;
	padding: 0.5rem 1rem;
	transition: all 0.2s ease-in;
	position: relative;
	z-index: 1;
	overflow: hidden;
	border: 1px solid #fff;

	&:hover {
		color: black;
	}

	&:after {
		content: '';
		background: #fff;
		position: absolute;
		z-index: -1;
		left: -20%;
		right: -20%;
		top: 0;
		bottom: 0;
		transform: skewX(-45deg) scale(0, 1);
		transition: all 0.5s;
	}

	&:hover:after {
		transform: skewX(-45deg) scale(1, 1);
	}

	&:active {
		transform: scale(0.95);
	}
`

export default function Content(): React.ReactNode {
	const projects = [
		{
			name: 'GC (e-commerce website)',
			description:
				'Developed an e-commerce platform with user authentication that allows users to save their favorites products',
			img: GC,
			url: 'https://gc-site.netlify.app',
		},
		{
			name: 'Weather App',
			description: 'View the current weather in your local city',
			img: WeatherApp,
			url: 'https://weather505.netlify.app',
		},
		{
			name: 'Etch-a-Sketch',
			description:
				'Make any pixel drawing starting with a grid of 16x16 up to 100x100',
			img: etchASketch,
			url: 'https://pixelssketch.netlify.app/',
		},
	]

	return (
		<div id="projects" className="p-[2rem] ">
			<ul className="flex flex-col gap-[25rem]">
				{projects.map((item, index) => (
					<li
						key={index}
						className={`flex p-[2rem] ${
							index % 2 === 0 ? 'flex' : 'flex-row-reverse'
						}`}
					>
						<div className="w-full">
							<Card img={item.img} alt={item.name} />
						</div>

						<div className="w-full text-center p-[1rem] flex flex-col gap-[2.5rem] justify-center items-center">
							<h1 className="text-[2rem]">{item.name}</h1>
							<p className="w-[50%] text-[1.2rem]">{item.description}</p>
							<a href={item.url} target="_blank">
								<ViewProjects>
									<span>View Project</span>
								</ViewProjects>
							</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
