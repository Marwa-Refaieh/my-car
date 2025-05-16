import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import { SidebarProvider } from './context/SidebarContext'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
        <Home />
      </SidebarProvider>
      <Footer />

    </>
  )
}

export default App
