import { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'

const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column-reverse;
	width: 500px;
	position: relative;

	& > label {
		text-transform: uppercase;
		transition: all 0.4s;
		position: absolute;
		left: 5px;
		transform: translateY(-8px);
		color: #aaa;
		font-weight: 900;
		z-index: -1;
	}

	input,
	textarea {
		background: none;
		outline: none;
		border-bottom: 1px solid #aaa;
		width: 100%;
		resize: none;
		overflow: hidden;
		padding: 0.5rem;
	}

	input:focus + label,
	textarea:focus + label,
	input:valid + label,
	textarea:valid + label {
		transform: translateY(-20px);
		top: 0;
		font-size: 0.8rem;
		color: #fff;
		font-weight: 900;
	}
`

const SendBtn = styled.button`
	position: relative;
	background: #fff;
	color: #000;
	width: 15rem;
	padding: 0.5rem 1rem;
	align-self: end;
	font-weight: bold;
	transition: all 0.3s ease-in-out;
	-webkit-mask: linear-gradient(
		-45deg,
		transparent 5%,
		#fff 5%,
		#fff 95%,
		transparent 95%
	);
	mask: linear-gradient(
		-45deg,
		transparent 5%,
		#fff 5%,
		#fff 95%,
		transparent 95%
	);

	&:hover {
		transform: scale(1.05);
	}

	&:active {
		transform: scale(0.95);
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
			className="h-screen p-[2rem] mt-[10rem] flex justify-center items-center montserrat"
		>
			<div className="p-[2rem]">
				<h1 className="text-[2rem] font-semibold">Say Hello</h1>

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

					<SendBtn type="submit" className="chakra-petch">
						Send message
					</SendBtn>
				</form>
			</div>
		</div>
	)
}
