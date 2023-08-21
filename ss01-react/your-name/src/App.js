import { useState } from "react";
import Student from "./components/student/Student";
import Form from "./components/form/Form";

function App() {
    const [showStudent, setShowStudent] = useState(false);
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setShowStudent(!showStudent)}>
                Student
            </button>
            <br />
            <button onClick={() => setShowForm(!showForm)}>Form</button>
            {showStudent && <Student />}
            {showForm && <Form />}
        </div>
    );
}

export default App;
