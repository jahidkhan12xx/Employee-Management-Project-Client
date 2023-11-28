import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import PublicRouter from './router/PublicRouter'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <Toaster position="top-right"
  reverseOrder={false}
 />
    <HelmetProvider context={helmetContext}>
    <RouterProvider router={PublicRouter}></RouterProvider>
    </HelmetProvider>
    </AuthProvider>
    </QueryClientProvider>
    
   
   
   
  </React.StrictMode>,
)
