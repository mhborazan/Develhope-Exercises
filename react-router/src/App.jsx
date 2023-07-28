import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./excercises/excercise-44/Counter";
import ShowGithubUser from "./excercises/excercise-45/ShowGithubUser";
import GithubUserList from "./excercises/excercise-48/GithubUserList";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ul>
                <li>
                  <Link to={"/counter"}>Counter Page</Link>
                </li>
                <li>
                  <Link to={"/users/Oaks93"}>Carlos' Github</Link>
                </li>
                <li>
                  <Link to={"/users/ahgsql"}>Ali Haydar's Github</Link>
                </li>
              </ul>
            }
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<GithubUserList />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
