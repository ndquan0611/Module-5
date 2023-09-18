import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

function FormMedical() {
    const [form, setForm] = useState({
        name: "",
        code: "",
        birthday: "",
        gender: "0",
        national: "",
        company: "",
        city: "",
        status: "",
        quarter: "",
        district: "",
        wards: "",
        house: "",
        phone: "",
        email: "",
    });

    const handleValidation = () => {
        const validate = yup.object({
            name: yup.string().required(),
            code: yup.string().required(),
            birthday: yup.number().required().min(1900),
            national: yup.string().required(),
            city: yup.string().required(),
            district: yup.string().required(),
            wards: yup.string().required(),
            house: yup.string().required(),
            phone: yup.string().required(),
            email: yup.string().required().matches("/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$", "Invalid email address"),
        });

        return validate;
    };

    const handleSubmit = () => {
        alert("Khai báo thành công!");
    };

    return (
        <div>
            <h3>Tờ khai y tế</h3>
            <Formik initialValues={form} validationSchema={handleValidation} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label>Họ tên</label>
                        <Field name="name" />
                        <ErrorMessage name="name" component="p" />
                    </div>
                    <div>
                        <label>Số hộ chiếu /CMND</label>
                        <Field name="code" />
                        <ErrorMessage name="code" component="p" />
                    </div>
                    <div>
                        <label>Năm sinh</label>
                        <Field name="birthday" />
                        <ErrorMessage name="birthday" component="p" />
                    </div>
                    <div>
                        <label>Giới tính</label>
                        <Field type="radio" name="gender" value="0" />
                        <span>Nam</span>
                        <Field type="radio" name="gender" value="1" />
                        <span>Nữ</span>
                    </div>
                    <div>
                        <label>Quốc tịch</label>
                        <Field name="national" />
                        <ErrorMessage name="national" component="p" />
                    </div>
                    <div>
                        <label>Công ty làm việc</label>
                        <Field name="company" />
                    </div>
                    <div>
                        <label>Bộ phận làm việc</label>
                        <Field name="quarter" />
                    </div>
                    <div>
                        <label>Có thể bảo hiển y tế </label>
                        <Field type="checkbox" name="status" />
                    </div>

                    <h2>Địa chỉ liên lạc tại Việt Nam</h2>

                    <div>
                        <label>Tỉnh thành</label>
                        <Field name="city" />
                        <ErrorMessage name="city" component="p" />
                    </div>
                    <div>
                        <label>Quận /Huyện</label>
                        <Field name="district" />
                        <ErrorMessage name="district" component="p" />
                    </div>
                    <div>
                        <label>Phường /Xã</label>
                        <Field name="wards" />
                        <ErrorMessage name="wards" component="p" />
                    </div>
                    <div>
                        <label>Số nhà, phố, tổ dân phố/thôn/đội</label>
                        <Field name="house" />
                        <ErrorMessage name="house" component="p" />
                    </div>
                    <div>
                        <label>Điện thoại</label>
                        <Field name="phone" />
                        <ErrorMessage name="phone" component="p" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Field name="email" />
                        <ErrorMessage name="email" component="p" />
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default FormMedical;
