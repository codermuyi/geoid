import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import ForceScrollToTop from "./ForceScrollToTop"
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const SharedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(open => !open);

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