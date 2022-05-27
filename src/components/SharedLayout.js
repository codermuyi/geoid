import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import ForceScrollToTop from "./ForceScrollToTop"
import Header from './common/Header'
import Footer from './common/Footer'
import Sidebar from './common/Sidebar'
import Overlay from './common/Overlay'

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
      <Overlay 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
      />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout