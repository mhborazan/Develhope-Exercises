
import './App.css'
import Seperator from './Seperator'
import Hello from './excercises/excercise-1/Hello'
import Message from './excercises/excercise-1/Message'
import Welcome from './excercises/excercise-2/Welcome'

function App() {
  

  return (
    <>

      <Seperator id="2">
        <Welcome name="Hakan" />
      </Seperator>


      <Seperator id="1">
        <Hello />
        <Message />
      </Seperator>

      
      

      
    </>
  )
}

export default App
