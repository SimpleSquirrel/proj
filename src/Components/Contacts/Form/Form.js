import React from "react";
import {Formik} from "formik";
import * as EmailValidator from "email-validator"
import * as Yup from "yup"
import styles from "./Form.module.css"

const Form = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Davai uzhe pishi</h1>
            <p className={styles.desc}>Zapolni form to send us your otziv or recomendation using form below. Mi'll get back to you as soon as we zahochem.</p>
            <Formik
                initialValues={{name: "", email: "", subject: "", message: ""}}
                onSubmit={(values, {setSubmitting}) => {
                    alert("Submitted");
                }}
                validate={values => {
                    let errors = {};
                    const nameRegExp = /^[a-zA-Z ]*$/
                    if (!values.name) {
                        errors.name = "Empty as your girlfriend name";
                    } else if (!nameRegExp.test(values.name)) {
                        errors.name = "You are gay. No nums"
                    }

                    if (!values.email) {
                        errors.email = "Empty as your mails with invitations";
                    } else if (!EmailValidator.validate(values.email)) {
                        errors.email = "Are you invalid?"
                    }

                    if (!values.subject) {
                        errors.subject = "Empty as your wallet";
                    }

                    if (!values.message) {
                        errors.message = "Empty as your telegram chats";
                    }

                    return errors;
                }}

                validationSchema={Yup.object().shape({
                    name: Yup.string().required("Required").matches(/^[a-zA-Z ]*$/, "Name cannot contain numbers!"),
                    email: Yup.string().email().required("Required"),
                    subject: Yup.string().required("Required"),
                    message: Yup.string().required("Required")
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;
                    return (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`${styles.input} ${errors.name && touched.name && styles.error}`}
                            />
                            {errors.name && touched.name && (
                                <div className={styles.input_feedback}>{errors.name}</div>
                            )}
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`${styles.input} ${errors.email && touched.email && styles.error}`}
                            />
                            {errors.email && touched.email && (
                                <div className={styles.input_feedback}>{errors.email}</div>
                            )}
                            <label className={styles.label} htmlFor="subject">Subject</label>
                            <input
                                name="subject"
                                type="text"
                                placeholder="Enter the subject"
                                value={values.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`${styles.input} ${errors.subject && touched.subject && styles.error}`}
                            />
                            {errors.subject && touched.subject && (
                                <div className={styles.input_feedback}>{errors.subject}</div>
                            )}
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`${styles.textarea} ${errors.message && touched.message && styles.error}`}
                            />
                            {errors.message && touched.message && (
                                <div className={styles.input_feedback}>{errors.message}</div>
                            )}
                            <button className={styles.button} type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    );
                }
                }
            </Formik>
        </div>
    )
}

export default Form