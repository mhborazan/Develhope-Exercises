import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./excercises/excercise-44/Counter";
import ShowGithubUser from "./excercises/excercise-45/ShowGithubUser";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
