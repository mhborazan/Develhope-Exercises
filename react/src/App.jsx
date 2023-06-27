
import './App.css'
import Seperator from './Seperator'
import Hello from './excercises/excercise-1/Hello'
import Message from './excercises/excercise-1/Message'
import Welcome from './excercises/excercise-2/Welcome'
import Welcome2 from './excercises/excercise-3/Welcome2'
import Welcome3 from './excercises/excercise-4/Welcome3'
import Welcome4 from './excercises/excercise-5/Welcome4'
import Welcome5 from './excercises/excercise-6/Welcome5'

function App() {
  

  return (
    <>

      <Seperator id="6">
        <Welcome5 name="Hakan" age={29}/>
      </Seperator>

      <Seperator id="5">
        <Welcome4 name={<strong>Hakan</strong>}/>
      </Seperator>

      <Seperator id="4">
        <Welcome3 name="Mustafa Hakan" age={29}/>
      </Seperator>

      <Seperator id="3">
        <Welcome2/>
      </Seperator>

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
