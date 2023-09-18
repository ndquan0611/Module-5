import { Field, Form, Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as libraryService from "../../services/libraryService";
import config from "../../config";
import { useEffect, useState } from "react";

function Update() {
    const param = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({});

    useEffect(() => {
        const fecthApi = async () => {
            const result = await libraryService.detail(param.id);
            setBook(result);
        };
        fecthApi();
    }, [param.id]);

    const handleSubmit = async (value, { setSubmitting }) => {
        await libraryService.post(param.id, value);
        navigate("/");
        setSubmitting(false);
    };

    return (
        <>
            <h2>Update page</h2>
            {Object.keys(book).length > 0 && (
                <Formik
                    initialValues={{
                        title: book.title,
                        quantity: book.quantity,
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                                Chủ đề
                            </label>
                            <Field type="text" className="form-control" id="title" name="title" />
                            {/* <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">
                                Số lượng
                            </label>
                            <Field type="number" className="form-control" id="quantity" name="quantity" />
                        </div>
                        <Link to={config.routes.list} className="btn btn-secondary me-2">
                            Close
                        </Link>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </Form>
                </Formik>
            )}
        </>
    );
}

export default Update;
