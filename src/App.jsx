import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Minigames from './pages/minigames';
import NavBar from "./navbar";

function App() {
    return (
        <Router>    
            <NavBar />
            <Routes>
                <Route path="/minigames" element={<Minigames />} />
            </Routes>
        </Router>

    );
}

export default App;