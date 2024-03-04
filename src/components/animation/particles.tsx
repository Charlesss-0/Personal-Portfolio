import * as THREE from 'three'

import { RefObject, useEffect, useRef } from 'react'

export default function Box() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		// Target the canvas element by using "useRef from React"
		const canvas = canvasRef.current

		if (!canvas) {
			console.error('Canvas element not found.')
			return
		}

		// create a scene and add renderer
		const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
		const scene = new THREE.Scene()
		scene.background = new THREE.Color('#000')

		// Set the camera perspective and position
		const fov = 75
		const aspect = window.innerWidth / window.innerHeight
		const near = 0.1
		const far = 5
		const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
		camera.position.z = 3

		// Creaate particle geometry and particle count
		const particleGeometry = new THREE.BufferGeometry()
		const particleCount = 2000

		const particlePositions = new Float32Array(particleCount * 3)

		// position the particles randomly at page load
		for (let i = 0; i < particleCount; i++) {
			const randomY = (Math.random() - 0.5) * 10
			const randomX = (Math.random() - 0.5) * 10
			const randomW = (Math.random() - 0.5) * 10

			particlePositions[i * 3] = randomY
			particlePositions[i * 3 + 1] = randomX
			particlePositions[i * 3 + 2] = randomW
		}

		// set position attribute to set the position value
		particleGeometry.setAttribute(
			'position',
			new THREE.BufferAttribute(particlePositions, 3)
		)

		// create the canvas material and make them a circle
		function createCanvasMaterial(color: string, size: number) {
			const matCanvas = document.createElement('canvas')
			matCanvas.width = matCanvas.height = size
			const matContext = matCanvas.getContext('2d')
			const texture = new THREE.Texture(matCanvas)

			const center = size / 2
			matContext?.beginPath()
			matContext?.arc(center, center, size / 2, 0, 2 * Math.PI, false)
			matContext?.closePath()
			matContext!.fillStyle = color
			matContext?.fill()

			texture.needsUpdate = true

			return texture
		}

		// apply the materials
		const particleMaterial = new THREE.PointsMaterial({
			color: 0xffffff,
			size: 0.01,
			sizeAttenuation: true,
			transparent: true,
			map: createCanvasMaterial('#ffffff', 300),
		})

		const particles = new THREE.Points(particleGeometry, particleMaterial)
		scene.add(particles)

		// render canvas inner size according to its outter size
		function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
			const canvas = renderer.domElement
			const pixelRatio = window.devicePixelRatio
			const width = (canvas.clientWidth * pixelRatio) | 0
			const height = (canvas.clientHeight * pixelRatio) | 0

			const needResize = canvas.width !== width || canvas.height !== height

			if (needResize) {
				renderer.setSize(width, height, false)
			}

			return needResize
		}

		function handleMouseMove(event: MouseEvent) {
			const mouseX = event.clientX / window.innerWidth
			const mouseY = -event.clientY / window.innerHeight

			particles.position.x = mouseX
			particles.position.y = mouseY
		}

		canvas.addEventListener('mousemove', handleMouseMove)

		// render the final animation
		function render() {
			requestAnimationFrame(render)

			if (resizeRendererToDisplaySize(renderer)) {
				const canvas = renderer.domElement
				camera.aspect = canvas.clientWidth / canvas.clientHeight
				camera.updateProjectionMatrix()
			}

			particles.position.z += 0.005

			const threshold = 2

			if (particles.position.z > threshold) {
				particles.position.z -= threshold
			}

			renderer.render(scene, camera)
		}
		requestAnimationFrame(render)
	}, [])

	return (
		<canvas
			ref={canvasRef as RefObject<HTMLCanvasElement>}
			className="h-full w-full block"
		/>
	)
}
