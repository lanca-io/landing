import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PosthogProvider } from './providers/PosthogProvider'
import App from './App'
import './assets/fonts/DM_Sans/typography-woff.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<PosthogProvider>
			<App />
		</PosthogProvider>
	</StrictMode>,
)
