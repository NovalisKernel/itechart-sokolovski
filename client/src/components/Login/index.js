import React from 'react';
import styles from './styles.module.css';
import logo from 'assets/img/logo.png';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import validationSchema from './validationLoginSchema';
import { login } from "store/login/actions";


function LoginPage() {
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <div className={styles.leftLoginBlock}>
        <h1>Coro</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(login(values));
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
              </form>
            )}
        </Formik>

        <img src={logo} alt="" />
      </div>
      <div className={styles.rightLoginBlock}>
        <h2>ILLU</h2>
      </div>
    </div>
  );
};

export default LoginPage;
