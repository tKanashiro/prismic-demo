import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Navbar from "./components/NavBar";
import PrivacyPolicy from "./pages/policy";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
