import React from 'react';
import styles from './styles.module.css';
import validationSchema from '../../Login/validationRegSchema';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { registration } from "store/login/actions";
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';


function Registration({ closeModal }) {
    const dispatch = useDispatch();
    const isRequesting = useSelector(state => state.auth.isRequesting);
    return (
        <div className={styles.regModal}>
            {isRequesting && <div className={styles.preload}><CircularProgress /></div>}
            <div onClick={closeModal} className={styles.darkWindow}></div>
            <Formik
                initialValues={{ email: '', password: '', name:''}}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(registration(values));
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label htmlFor="" className={styles.formLabel}>
                                <span className={styles.labelText}>Email </span>
                                <input
                                    className={styles.textField}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </label>
                            {errors.email && touched.email && errors.email}
                            <label htmlFor="" className={styles.formLabel}>
                                <span className={styles.labelText}>Name </span>
                                <input
                                    className={styles.textField}
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </label>
                            {errors.name && touched.name && errors.name}
                            <label htmlFor="" className={styles.formLabel}>
                                <span className={styles.labelText}>Password</span>
                                <input
                                    className={styles.textField}
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </label>
                            {errors.password && touched.password && errors.password}
                            <button className={styles.formBtn} type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                            <CloseIcon onClick={closeModal} className={styles.close}/>
                        </form>

                    )}
            </Formik>
        </div>

    )
}

export default Registration;