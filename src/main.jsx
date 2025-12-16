import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Cart from './components/pages/Cart'
import MainLayout from './components/common/MainLayout'
import MainContext from './context/MainContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={'/'} element={<Home />} />
            <Route path={'/cart'} element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* Global Notification Container */}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </MainContext>
  </StrictMode>,
)