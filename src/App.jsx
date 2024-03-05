import Quiz from './Quiz'
import { jsQuizz } from './Constants'

function App() {

  return (
    <>
    <Quiz questions={jsQuizz.questions}/>
    </>
  )
}

export default App
