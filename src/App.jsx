import Quiz from './Quiz'
import { jsQuizz } from './Constants'
import Home from './Home'
import Navbars from './Navbar'
import AboutUs from './AboutUs'

function App() {

  return (
    <>
    <Navbars/>
    {/* <Home/> */}
    <AboutUs/>
    {/* <Quiz questions={jsQuizz.questions3}/> */}
    </>
  )
}
export default App
