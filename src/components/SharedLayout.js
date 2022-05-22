import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

function ForceScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const SharedLayout = () => {
  return (
    <>
      <ForceScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout