import { Outlet } from "react-router-dom"
import { Header, Navbar } from "../components"

function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Home