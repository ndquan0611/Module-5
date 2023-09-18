import { useEffect, useState } from "react";

import * as todoService from "./services/todoService";
import { Field, Form, Formik } from "formik";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const result = await todoService.get();
        setTodos(result);
    };

    const handleSubmit = async (value, { setSubmitting }) => {
        await todoService.post(value);
        fetchApi();
        setSubmitting(false);
    };

    return (
        <div className="App">
            <h2>Todo list</h2>

            <Formik
                initialValues={{
                    name: "",
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field name="name" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
