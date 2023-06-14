import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./screen/Home"
import About from "./../inizio/screen/About";
import Profile from "./../inizio/screen/Profile";
import ErrorPage from "./ErrorPage";

const Component = () => {
    return (
    <Router>
        <nav className="d-flex flex-row justify-content-center mx-auto gap-2 mb-4">
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='/profile'>Profile</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='profile' element={<Profile />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    </Router>
    )
}

export default Component;