import { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'

const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 500px;

	& > label {
		text-transform: uppercase;
	}

	input,
	textarea {
		background: none;
		outline: none;
		border-bottom: 1px solid #fff;
		width: 100%;
		text-align: center;
		resize: none;
		overflow: hidden;
		padding: 0.5rem;
	}
`

export default function Contact() {
	const [value, setValue] = useState<string>('')
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = '0'
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
		}
	}, [value])

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value)
	}

	const inputs = [
		{
			element: 'input',
			text: 'Your email',
			type: 'email',
			id: 'email',
		},
		{
			element: 'textarea',
			text: 'Message',
			type: 'text',
			id: 'message',
		},
	]

	return (
		<div
			id="contact"
			className="p-[2rem] mt-[10rem] flex justify-center montserrat"
		>
			<div className="p-[2rem]">
				<h1 className="text-[2rem]">Say Hello</h1>

				<div className="border my-[1rem] mb-[5rem]"></div>

				<form className="flex flex-col gap-[3rem]">
					{inputs.map((input, i) => (
						<Fieldset key={i}>
							<label htmlFor={input.id}>{input.text}</label>
							{input.element === 'input' ? (
								<input
									type={input.type}
									id={input.id}
									name={input.id}
									autoComplete="off"
									className="nunito"
								/>
							) : (
								<textarea
									ref={textareaRef}
									value={value}
									autoComplete="off"
									maxLength={4096}
									onChange={handleChange}
								></textarea>
							)}
						</Fieldset>
					))}

					<button className="border px-[1rem] py-[0.5rem]">Send message</button>
				</form>
			</div>
		</div>
	)
}
