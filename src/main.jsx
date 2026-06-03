import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { NavBar } from './Features/NavBar.jsx'
import { Footer } from './Features/Footer.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <StrictMode>
  <BrowserRouter>

    <NavBar/> 
    <App />
    <Footer />

  </BrowserRouter>
  </StrictMode>
  </ClerkProvider>,
)
