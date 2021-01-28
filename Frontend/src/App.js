import "./App.css";
import Home from "./components/Home.js";
import UserBlogs from "./components/userBlogs.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/userBlogs" component={UserBlogs} />
    </Router>
  );
}

export default App;
