import { useState } from 'react'
import './App.css'
import { toast, Toaster } from "sonner"
import { X } from 'lucide-react'
import { Button } from './components/ui/button'
import { errorToaster, successToaster } from '@/widget/toaster'
import { BASE_API_URL, NODE_ENV } from '@/utils/constants'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CursorGlow from './widget/CursorGlowEffect'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import AdminPage from './pages/AdminPage'



function App() {
  const {getClientData} = useAuthStore()

  useEffect( () => {
    getClientData()
  }, [])


  return (
    <>
    <div style={{transition: "all 0.5s"}} className='min-h-screen  trasi font-sans'>
      <CursorGlow />
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>

    <Toaster />

    </div>
    
  </>
  )
}


export default App
