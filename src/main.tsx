import './styles/index.css'

import App from './App.tsx'
import { ComponentProvider } from './components/context.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ComponentProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ComponentProvider>
)
