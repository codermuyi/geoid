import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import ForceScrollToTop from "./ForceScrollToTop"
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const SharedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()
  const toggleSidebar = () => setIsSidebarOpen(open => !open);

  useEffect(() => {
    setIsSidebarOpen(false)
  }, [location]);

  return (
    <>
      <ForceScrollToTop />
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        isOpen={isSidebarOpen}
        toggle={toggleSidebar}
      />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout