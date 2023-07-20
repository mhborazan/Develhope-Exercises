import "./App.css";
import Seperator from "./Seperator";
import Hello from "./excercises/excercise-1/Hello";
import Message from "./excercises/excercise-1/Message";
import Welcome9 from "./excercises/excercise-10/Welcome9";
import Welcome10 from "./excercises/excercise-11/Welcome10";
import Counter from "./excercises/excercise-12/Counter";
import Counter2 from "./excercises/excercise-13/Counter2";
import Counter3 from "./excercises/excercise-14/Counter3";
import Counter4 from "./excercises/excercise-15/Counter4";
import ClickCounter from "./excercises/excercise-16/ClickCounter";
import ClickTracker from "./excercises/excercise-17/ClickTracker";
import InteractiveComponent from "./excercises/excercise-18/InteractiveComponent";
import Excercise19 from "./excercises/excercise-19/Excercise19";
import Welcome from "./excercises/excercise-2/Welcome";
import Excercise20 from "./excercises/excercise-20/Excercise20";
import UncontrolledForm from "./excercises/excercise-21/UncontrolledForm";
import UncontrolledForm2 from "./excercises/excercise-22/UncontrolledForm2";
import TodoList from "./excercises/excercise-23/TodoList";
import TodoList2 from "./excercises/excercise-25/TodoList2";
import TodoList3 from "./excercises/excercise-26/TodoList3";
import TodoList4 from "./excercises/excercise-27/TodoList4";
import DisplayLanguage from "./excercises/excercise-28/DisplayLanguage";
import { LanguageProvider } from "./excercises/excercise-28/LanguageContextProvider";
import Welcome2 from "./excercises/excercise-3/Welcome2";
import Welcome3 from "./excercises/excercise-4/Welcome3";
import Welcome4 from "./excercises/excercise-5/Welcome4";
import Welcome5 from "./excercises/excercise-6/Welcome5";
import Welcome6 from "./excercises/excercise-7/Welcome6";
import Welcome7 from "./excercises/excercise-8/Welcome7";
import Welcome8 from "./excercises/excercise-9/Welcome8";

function App() {
  return (
    <>
      <Seperator id="28">
        <LanguageProvider>
          <DisplayLanguage />
        </LanguageProvider>
      </Seperator>
      <Seperator id="27">
        <TodoList4 />
      </Seperator>
      <Seperator id="26">
        <TodoList3 />
      </Seperator>
      <Seperator id="25">
        <TodoList2 />
      </Seperator>
      <Seperator id="23-24">
        <TodoList />
      </Seperator>
      <Seperator id="22">
        <UncontrolledForm2 />
      </Seperator>
      <Seperator id="21">
        <UncontrolledForm />
      </Seperator>
      <Seperator id="20">
        <Excercise20 />
      </Seperator>
      <Seperator id="19">
        <Excercise19 />
      </Seperator>
      <Seperator id="18">
        <InteractiveComponent />
      </Seperator>
      <Seperator id="17">
        <ClickTracker />
      </Seperator>
      <Seperator id="16">
        <ClickCounter />
      </Seperator>

      <Seperator id="15 inital=25, time=1000ms incremet=1">
        <Counter4 initial={25} time={1000} increment={1} />
      </Seperator>

      <Seperator id="14 inital=100, time=2000ms incremet=2">
        <Counter3 initial={100} time={2000} increment={2} />
      </Seperator>

      <Seperator id="13 inital=10, time=500ms incremet=3">
        <Counter2 initial={10} time={500} increment={3} />
      </Seperator>

      <Seperator id="12">
        <Counter />
      </Seperator>

      <Seperator id="11 (age 8)">
        <Welcome10 name="John" age={8} />
      </Seperator>

      <Seperator id="10 (age 45 name John)">
        <Welcome9 name="John" age={45} />
      </Seperator>

      <Seperator id="10 (age 45 name Hakan)">
        <Welcome9 name="Hakan" age={45} />
      </Seperator>

      <Seperator id="9 (age 75)">
        <Welcome8 name="Hakan" age={75} />
      </Seperator>

      <Seperator id="9 (age 35)">
        <Welcome8 name="Hakan" age={35} />
      </Seperator>

      <Seperator id="9 (age 15)">
        <Welcome8 name="Hakan" age={15} />
      </Seperator>

      <Seperator id="8 (with age prop)">
        <Welcome7 name="Hakan" age={20} />
      </Seperator>

      <Seperator id="8 (no age prop)">
        <Welcome7 name="Hakan" />
      </Seperator>

      <Seperator id="7 (below 18)">
        <Welcome6 name="Hakan" age={15} />
      </Seperator>

      <Seperator id="7 (above 18)">
        <Welcome6 name="Hakan" age={29} />
      </Seperator>

      <Seperator id="6">
        <Welcome5 name="Hakan" age={29} />
      </Seperator>

      <Seperator id="5">
        <Welcome4 name={<strong>Hakan</strong>} />
      </Seperator>

      <Seperator id="4">
        <Welcome3 name="Mustafa Hakan" age={29} />
      </Seperator>

      <Seperator id="3">
        <Welcome2 />
      </Seperator>

      <Seperator id="2">
        <Welcome name="Hakan" />
      </Seperator>

      <Seperator id="1">
        <Hello />
        <Message />
      </Seperator>
    </>
  );
}

export default App;
