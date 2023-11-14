import { useRef, useState } from 'react';
import Student from './components/student/Student';

function App() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [students, setStudents] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setStudents((prev) => [...prev, { ...prev, name, phone, email }]);
        setName('');
        setPhone('');
        setEmail('');
        nameRef.current.focus();
    };

    return (
        <div className="App">
            <div>
                <h2>Student List</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <td>
                            <input
                                ref={nameRef}
                                value={name}
                                placeholder="Enter name..."
                                onChange={(e) => setName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>
                            <input
                                value={phone}
                                placeholder="Enter phone..."
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input
                                value={email}
                                placeholder="Enter email..."
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </td>
                    </tr>

                    <button onClick={handleSubmit}>Add</button>
                </table>
            </div>
            <div>
                <Student students={students} />
            </div>
        </div>
    );
}

export default App;
