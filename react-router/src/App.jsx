import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./excercises/excercise-44/Counter";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
