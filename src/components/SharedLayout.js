import { Outlet, useLocation } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

const SharedLayout = () => {
  console.log(useLocation())

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout