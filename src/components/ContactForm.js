import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const ContactForm = () => {

    const success = "Thanks for your message! I'll be in touch soon.";
    const nameShort = "Name must be at least 2 characters";
    const nameRequired = "Name is required";
    const emailInvalid = "Email is invalid";
    const emailRequired = "Email is required";
    const messageShort = "Message must be at least 9 characters";
    const messageRequired = "Message is required";

    /* Server State Handling */
    const [serverState, setServerState] = useState();
    const handleServerResponse = (ok, msg) => {
        setServerState({ ok, msg });
    };


    const handleOnSubmit = (values, actions) => {
        axios({
            method: "POST",
            url: "https://formspree.io/f/xwkynwld",
            data: values
        })
            .then((response) => {
                actions.setSubmitting(false);
                actions.resetForm();
                handleServerResponse(
                    true,
                    success,
                );
            })
            .catch((error) => {
                actions.setSubmitting(false);
                handleServerResponse(false, error.response.data.error);
            });
    };

    {
        return (
            <Formik onSubmit={handleOnSubmit}
                initialValues={{
                    name: '',
                    email: '',
                    message: ''
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .min(2, nameShort)
                        .required(nameRequired),
                    email: Yup.string()
                        .email(emailInvalid)
                        .required(emailRequired),
                    message: Yup.string()
                        .min(9, messageShort)
                        .required(messageRequired),

                })}>

                {({ errors, isSubmitting, touched }) => (
                    <Form>
                        <div className="form-group mb-3">
                            <Field name="name" type="text" placeholder="Name" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group mb-3">
                            <Field name="email" type="text" placeholder="Email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group mb-3">
                            <Field component="textarea" rows="4" name="message" type="text" placeholder="Your Message..." className={'form-control' + (errors.message && touched.message ? ' is-invalid' : '')} />
                            <ErrorMessage name="message" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group mb-3">
                            <button type="submit" disabled={isSubmitting} className="btn-submit">Send</button>
                        </div>
                        {serverState && (
                            <p className={!serverState.ok ? "errorMsg" : ""}>
                                {serverState.msg}
                            </p>
                        )}
                    </Form>
                )}
            </Formik>
        )
    }
}


export default ContactForm;