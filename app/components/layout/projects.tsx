import { gc, pixelssketch, weatherApp } from '../../assets'

import Card from '../ui/3dCard'
import React from 'react'
import styled from 'styled-components'

const ViewProjects = styled.button`
	font-size: 1.5rem;
	padding: 0.5rem 4rem;
	transition: all 0.2s ease-in;
	position: relative;
	z-index: 1;
	overflow: hidden;
	outline: 1px solid #fff;

	&:hover {
		color: black;
		outline: none;
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
		transform: skewX(-45deg) scale(0.75, 1);
	}

	&:active {
		transform: scale(0.95);
	}
`

export default function Projects(): React.ReactNode {
	const projects = [
		{
			name: 'Pixels Sketch',
			description:
				'Designed and developed a pixel art creation app for a creative experience',
			img: pixelssketch,
			url: 'https://pixelssketch.netlify.app/',
		},
		{
			name: 'Weather App',
			description:
				'Created a weather application enabling users to check real-time weather updates in their current location',
			img: weatherApp,
			url: 'https://weather505.netlify.app',
		},
		{
			name: 'GC (e-commerce website)',
			description:
				'Developed an e-commerce platform featuring user authentication, allowing users to save their favorites products for future reference',
			img: gc,
			url: 'https://gc-site.netlify.app',
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
