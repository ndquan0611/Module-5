import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as libraryService from "../../services/libraryService";
import config from "../../config";

function Create() {
    const navigate = useNavigate();

    const handleSubmit = async (value, { setSubmitting }) => {
        await libraryService.post(value);
        navigate("/");
        setSubmitting(false);
    };

    return (
        <>
            <h2>Create page</h2>
            <Formik
                initialValues={{
                    title: "",
                    quantity: 0,
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
        </>
    );
}

export default Create;
