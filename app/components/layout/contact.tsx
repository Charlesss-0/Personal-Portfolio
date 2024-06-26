import { useEffect, useRef, useState } from 'react'

import Loader from '../animation/loader'
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
	const [isSending, setIsSending] = useState<boolean>(false)
	const [success, setSuccess] = useState<boolean>(false)
	const formRef = useRef<HTMLFormElement>(null)
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = '0'
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
		}
	}, [textareaValue])

	const inputs = [
		{
			element: 'input',
			text: 'Your email',
			type: 'email',
			id: 'Email',
		},
		{
			element: 'textarea',
			text: 'Message',
			type: 'text',
			id: 'Message',
		},
	]

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (formRef.current) {
			const data = new FormData(formRef.current)
			const action =
				'https://script.google.com/macros/s/AKfycbxHFC6fkFxg-q8aFgSP9k6APv60HA6fIIuUuf8YswW-nXNDZ30MaE--vqhf4eFv_b5V_w/exec'

			try {
				setIsSending(!isSending)

				const response = await fetch(action, {
					method: 'POST',
					body: data,
				})

				if (response.ok) {
					console.log('Data sent successfully!')
					setInputValue('')
					setTextareaValue('')
				}

				setSuccess(true)
			} catch (e) {
				console.error('Data not sent:', e)
			}
		}
	}

	return (
		<div
			id="contact"
			className="h-screen p-[2rem] mt-[10rem] flex justify-center items-center montserrat"
		>
			{success ? (
				<h1 className="chakra-petch text-[1.5rem]">
					Your message has been sent!
				</h1>
			) : (
				<>
					<div className="p-[2rem]">
						<h1 className="text-[2rem] font-semibold">Say Hello</h1>

						<div className="border mt-[1rem] mb-[5rem]"></div>

						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="flex flex-col gap-[4rem]"
						>
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
											id={input.id}
											name={input.id}
											autoComplete="off"
											maxLength={3000}
											className="nunito"
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

							{isSending && <Loader />}
						</form>
					</div>
				</>
			)}
		</div>
	)
}
