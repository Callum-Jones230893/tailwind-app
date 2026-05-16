import { useState } from 'react'
import './App.css'
import BossGenerator from './components/BossGenerator'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  // const [sideBar, setSideBar] = useState<boolean>(false)

  return (
    <div className="bg-[url(/images/tailwindbgimage.jpg)] text-center backdrop-blur-2xl bg-fixed">
      <Header />
      <div className="flex bg-fixed">
        <BossGenerator />
      </div>
      <Footer />
    </div>
  )
}

export default App
