import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import './App.css'
import { router } from './router'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />   
    </>
  )
}

export default App
