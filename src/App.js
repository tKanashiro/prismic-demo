import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Navbar from "./components/NavBar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
