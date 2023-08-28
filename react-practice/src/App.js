import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FormContact from "./components/ReactDomRouter/FormContact";
import FormMedical from "./components/ReactDomRouter/FormMedical";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/form-contact" element={<FormContact />} />
                    <Route path="/form-medical" element={<FormMedical />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
