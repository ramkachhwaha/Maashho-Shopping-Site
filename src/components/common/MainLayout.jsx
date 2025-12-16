
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    // Pure page ka wrapper (Dark/Light mode colors yahan set hain)
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 font-sans">

      {/* Header sabse upar */}
      <Header />

      {/* Main Content Area */}
      {/* flex-grow: Ye bachi hui jagah lega taaki footer niche jaye */}
      {/* w-full & max-w: Content ko center me rakhega */}
      <main className="grow w-full">
        {/* Yahan padding di hai taaki content chipke nahi */}
        <div className="min-h-[calc(100vh-100px)]">
          <Outlet />
        </div>
      </main>

      {/* Footer sabse neeche */}
      <Footer />
    </div>
  )
}