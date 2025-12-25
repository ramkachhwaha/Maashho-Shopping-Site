
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    // Pure page ka wrapper (Dark/Light mode colors yahan set hain)++++++++++++++++===
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 font-sans">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="grow w-full">
        <div className="min-h-[calc(100vh-100px)]">
          <Outlet />
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}