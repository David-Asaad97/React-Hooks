// import Component from "./lezioni/11-React-Router/v6/inizio/index";
import Start from "./lezioni/16-suspense/inizio/index";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <nav className="d-flex flex-row justify-content-center mx-auto gap-2 mb-4">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/profile'>Profile</Link>
        </nav>
        <section className="container text-center my-3">
          {/* <Component /> */}
        </section>
      </Router>
        <Start />
    </div>
  );
}

export default App;
