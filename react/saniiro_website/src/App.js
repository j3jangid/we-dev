import Navbar from "./Navbar"
import Home from "./Home"
import WhySaniiro from "./WhySaniiro"
import Featuers from "./Featuers"
import StartNow from "./StartNow"
import Feedback from "./Feedback"
import Faq from "./Faq"
import Footer from "./Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <WhySaniiro/>
      <Featuers/>
      <StartNow />
      <Feedback />
      <Faq />
      <Footer />
      <h5 className="text-center">by deity_itself</h5>
    </div>
  )
}

export default App
