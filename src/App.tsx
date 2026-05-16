import './App.css'
import BossGenerator from './components/BossGenerator'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  // const [sideBar, setSideBar] = useState<boolean>(false)

  return (
    <div className="bg-[url(/images/tailwindbgimage.jpg)] flex flex-col min-h-screen text-center backdrop-blur-2xl bg-fixed font-display">
      <Header />
      <div className="flex-1 my-30">
        <BossGenerator />
      </div>
      <Footer />
    </div>
  )
}

export default App
