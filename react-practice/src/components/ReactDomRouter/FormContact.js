import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function FormContact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleValidation = () => {
        const validate = Yup.object({
            name: Yup.string().required(),
            email: Yup.string().required(),
            phone: Yup.string().required(),
            message: Yup.string().required(),
        });

        return validate;
    };

    const handleSubmit = () => {
        alert("Add contact successfully!!!");
    };

    return (
        <div>
            <h1>Contact form</h1>
            <Formik initialValues={form} validationSchema={handleValidation} onSubmit={handleSubmit}>
                <Form>
                    <div className="custom-input">
                        <label>Username </label>
                        <Field name="name" />
                        <ErrorMessage name="name" className="form-err" component="p" />
                    </div>
                    <div className="custom-input">
                        <label>Email </label>
                        <Field name="email" />
                        <ErrorMessage name="email" className="form-err" component="p" />
                    </div>
                    <div className="custom-input">
                        <label>Phone </label>
                        <Field type="text" name="phone" />
                        <ErrorMessage name="phone" className="form-err" component="p" />
                    </div>
                    <div className="custom-input">
                        <label>Message </label>
                        <Field cols={20} rows={2} name="message" />
                        <ErrorMessage name="message" className="form-err" component="p" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormContact;
