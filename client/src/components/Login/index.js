import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './styles.module.css';
import logo from 'assets/img/logo.png';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import validationSchema from './validationLoginSchema';
import { login } from "store/auth/actions";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Registration } from 'components/common'
import history from 'store/history';



function LoginPage() {

  const [isRegModal, setIsRegModal] = useState(false);
  const dispatch = useDispatch();
  const isRequesting = useSelector(state => state.auth.isRequesting);
  const isAuth = useSelector(state => state.auth.isAuth);
  useEffect(() => {
    if (isAuth) {
      history.push('/contacts');
    }
  }, [isAuth]);
  return (
    <div className={styles.main}>
      {isRequesting && <div className={styles.preload}><CircularProgress /></div>}
      {isRegModal && <Registration closeModal={() => setIsRegModal(false)} />}
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
            <form method='post' className={styles.form} onSubmit={handleSubmit}>
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
              <p onClick={() => { setIsRegModal(true) }} className={styles.offerToReg}>Have not account? Registred now!</p>

              {errors.password && touched.password && errors.password}
              <button className={styles.formBtn} type="submit" disabled={isRequesting}>
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
