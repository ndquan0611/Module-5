import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bai1 from "./components/ReactDomRouter/Bai1";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/form1" element={<Bai1 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
