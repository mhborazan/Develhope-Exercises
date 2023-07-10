
import './App.css'
import Seperator from './Seperator'
import Hello from './excercises/excercise-1/Hello'
import Message from './excercises/excercise-1/Message'
import Welcome9 from './excercises/excercise-10/Welcome9'
import Welcome10 from './excercises/excercise-11/Welcome10'
import Counter from './excercises/excercise-12/Counter'
import Counter2 from './excercises/excercise-13/Counter2'
import Counter3 from './excercises/excercise-14/Counter3'
import Counter4 from './excercises/excercise-15/Counter4'
import ClickCounter from './excercises/excercise-16/ClickCounter'
import ClickTracker from './excercises/excercise-17/ClickTracker'
import Welcome from './excercises/excercise-2/Welcome'
import Welcome2 from './excercises/excercise-3/Welcome2'
import Welcome3 from './excercises/excercise-4/Welcome3'
import Welcome4 from './excercises/excercise-5/Welcome4'
import Welcome5 from './excercises/excercise-6/Welcome5'
import Welcome6 from './excercises/excercise-7/Welcome6'
import Welcome7 from './excercises/excercise-8/Welcome7'
import Welcome8 from './excercises/excercise-9/Welcome8'

function App() {
  

  return (
    <>
      <Seperator id="17">
        <ClickTracker/>
      </Seperator>
      <Seperator id="16">
        <ClickCounter />
      </Seperator>

      <Seperator id="15 inital=25, time=1000ms incremet=1">
        <Counter4 initial={25} time={1000} increment={1}/>
      </Seperator>

      <Seperator id="14 inital=100, time=2000ms incremet=2">
        <Counter3 initial={100} time={2000} increment={2}/>
      </Seperator>

      <Seperator id="13 inital=10, time=500ms incremet=3">
        <Counter2 initial={10} time={500} increment={3}/>
      </Seperator>

      <Seperator id="12">
        <Counter/>
      </Seperator>

      <Seperator id="11 (age 8)">
        <Welcome10 name="John" age={8}/>
      </Seperator>

      <Seperator id="10 (age 45 name John)">
        <Welcome9 name="John" age={45}/>
      </Seperator>

      <Seperator id="10 (age 45 name Hakan)">
        <Welcome9 name="Hakan" age={45}/>
      </Seperator>

      <Seperator id="9 (age 75)">
        <Welcome8 name="Hakan" age={75}/>
      </Seperator>

      <Seperator id="9 (age 35)">
        <Welcome8 name="Hakan" age={35}/>
      </Seperator>

      <Seperator id="9 (age 15)">
        <Welcome8 name="Hakan" age={15}/>
      </Seperator>

      <Seperator id="8 (with age prop)">
        <Welcome7 name="Hakan" age={20}/>
      </Seperator>

      <Seperator id="8 (no age prop)">
        <Welcome7 name="Hakan"/>
      </Seperator>

      <Seperator id="7 (below 18)">
        <Welcome6 name="Hakan" age={15}/>
      </Seperator>

      <Seperator id="7 (above 18)">
        <Welcome6 name="Hakan" age={29}/>
      </Seperator>

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
