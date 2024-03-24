import React, { createContext, useContext, useRef } from 'react'

interface ContextProps {
	divRef: React.RefObject<HTMLDivElement> | null
}

interface ComponentProviderProps {
	children: React.ReactNode
}

const Context = createContext<ContextProps>({ divRef: null })

export function ComponentProvider({ children }: ComponentProviderProps) {
	const divRef = useRef<HTMLDivElement>(null)

	return <Context.Provider value={{ divRef }}>{children}</Context.Provider>
}

export function UseComponentContext(): ContextProps {
	const context = useContext(Context)

	return context
}
