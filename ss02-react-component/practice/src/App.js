import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './components/Alert';
import Caculator from './components/Caculator';
import Home from './components/Home';
import Login from './components/Login';
import TodoList from './components/TodoList';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/alert"
                        element={
                            <Alert
                                text={
                                    'Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.'
                                }
                            />
                        }
                    />
                    <Route path="/caculator" element={<Caculator />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/todo" element={<TodoList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
