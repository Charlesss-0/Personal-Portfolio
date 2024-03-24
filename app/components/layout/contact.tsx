import { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'

const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column-reverse;
	width: 500px;
	position: relative;

	& > label {
		text-transform: uppercase;
		transition: all 500ms;
		position: absolute;
		transform: translateY(-8px);
		color: #aaa;
	}

	input,
	textarea {
		background: none;
		outline: none;
		border-bottom: 1px solid #fff;
		width: 100%;
		resize: none;
		overflow: hidden;
		padding: 0.5rem;
	}

	input:focus + label,
	textarea:focus + label,
	input:valid + label,
	textarea:valid + label {
		transform: translateY(-33px);
		position: absolute;
		top: 0;
		font-size: 0.8rem;
		color: #fff;
	}
`

export default function Contact() {
	const [textareaValue, setTextareaValue] = useState<string>('')
	const [inputValue, setInputValue] = useState<string>('')
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = '0'
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
		}
	}, [textareaValue])

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		setInputValue('')
		setTextareaValue('')
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

				<div className="border mt-[3rem] mb-[5rem]"></div>

				<form onSubmit={handleSubmit} className="flex flex-col gap-[4rem]">
					{inputs.map((input, i) => (
						<Fieldset key={i}>
							{input.element === 'input' ? (
								<input
									type={input.text}
									id={input.id}
									name={input.id}
									value={inputValue}
									autoComplete="off"
									maxLength={100}
									className="nunito"
									onChange={e => setInputValue(e.target.value)}
									required
								/>
							) : (
								<textarea
									ref={textareaRef}
									value={textareaValue}
									autoComplete="off"
									maxLength={3000}
									onChange={e => setTextareaValue(e.target.value)}
									required
								></textarea>
							)}
							<label htmlFor={input.id}>{input.text}</label>
						</Fieldset>
					))}

					<button
						type="submit"
						className="border px-[1rem] py-[0.5rem] hover:bg-"
					>
						Send message
					</button>
				</form>
			</div>
		</div>
	)
}
