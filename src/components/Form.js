import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFormik } from 'formik';


function BasicForm() {
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
    });

    const formik = useFormik({
        initialValues: {
            fullname: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
        },
        validationSchema,
        onSubmit: (data) => {
            console.log(data);
        },
    });

    return (
        <div className='container'>
            <h4 className='text-center'>Basic form with <span className='bg-info rounded p-2 shadow'>Formik</span> validation</h4>
            <div className='row my-5 d-flex align-items-center justify-content-center'>
                <div className='col-6'>
                    <h4 className='my-5'>Employee Form</h4>
                    <div className="register-form">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group my-3">
                                <label htmlFor="fullname">Full Name</label>
                                <input
                                    name="fullname"
                                    type="text"
                                    className={
                                        'form-control form-control-lg' +
                                        (formik.errors.fullname && formik.touched.fullname
                                            ? ' is-invalid'
                                            : '')
                                    }
                                    onChange={formik.handleChange}
                                    value={formik.values.fullname}
                                />
                                <div className="invalid-feedback">
                                    {formik.errors.fullname && formik.touched.fullname
                                        ? formik.errors.fullname
                                        : null}
                                </div>
                            </div>

                            <div className="form-group my-3">
                                <label htmlFor="username"> Username </label>
                                <input
                                    name="username"
                                    type="text"
                                    className={
                                        'form-control form-control-lg' +
                                        (formik.errors.username && formik.touched.username
                                            ? ' is-invalid'
                                            : '')
                                    }
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                />
                                <div className="invalid-feedback">
                                    {formik.errors.username && formik.touched.username
                                        ? formik.errors.username
                                        : null}
                                </div>
                            </div>

                            <div className="form-group my-3">
                                <label htmlFor="email"> Email </label>
                                <input
                                    name="email"
                                    type="email"
                                    className={
                                        'form-control form-control-lg' +
                                        (formik.errors.email && formik.touched.email ? ' is-invalid' : '')
                                    }
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                <div className="invalid-feedback">
                                    {formik.errors.email && formik.touched.email
                                        ? formik.errors.email
                                        : null}
                                </div>
                            </div>

                            <div className="form-group my-3">
                                <label htmlFor="password"> Password </label>
                                <input
                                    name="password"
                                    type="password"
                                    className={
                                        'form-control form-control-lg' +
                                        (formik.errors.password && formik.touched.password
                                            ? ' is-invalid'
                                            : '')
                                    }
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                <div className="invalid-feedback">
                                    {formik.errors.password && formik.touched.password
                                        ? formik.errors.password
                                        : null}
                                </div>
                            </div>

                            <div className="form-group my-3">
                                <label htmlFor="confirmPassword"> Confirm Password </label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    className={
                                        'form-control form-control-lg' +
                                        (formik.errors.confirmPassword && formik.touched.confirmPassword
                                            ? ' is-invalid'
                                            : '')
                                    }
                                    onChange={formik.handleChange}
                                    value={formik.values.confirmPassword}
                                />
                                <div className="invalid-feedback">
                                    {formik.errors.confirmPassword && formik.touched.confirmPassword
                                        ? formik.errors.confirmPassword
                                        : null}
                                </div>
                            </div>

                            <div className="form-group form-check my-3">
                                <input
                                    name="acceptTerms"
                                    id="acceptTerms"
                                    type="checkbox"
                                    className={
                                        'form-check-input' +
                                        (formik.errors.acceptTerms && formik.touched.acceptTerms
                                            ? ' is-invalid'
                                            : '')
                                    }
                                    onChange={formik.handleChange}
                                    value={formik.values.acceptTerms}
                                />
                                <label htmlFor="acceptTerms" className="form-check-label cursor-pointer">
                                    I have read and agree to the Terms
                                </label>
                                <div className="invalid-feedback">
                                    {formik.errors.acceptTerms && formik.touched.acceptTerms
                                        ? formik.errors.acceptTerms
                                        : null}
                                </div>
                            </div>

                            <div className="form-group my-3">
                                <button type="submit" className="btn btn-lg btn-primary m-2 ">
                                    Register
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-warning float-right btn-lg m-3"
                                    onClick={formik.handleReset}
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BasicForm;