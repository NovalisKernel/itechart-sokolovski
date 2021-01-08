import React, { useEffect } from 'react';
import logo from 'assets/img/logo.png';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login, openRegModal } from 'store/auth/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Registration } from 'components/common';
import history from 'store/history';
import validationSchema from './validationLoginSchema';
import styles from './styles.module.css';

function LoginPage() {
  const dispatch = useDispatch();
  const isRequesting = useSelector(state => state.auth.isRequesting);
  const isAuth = useSelector(state => state.auth.isAuth);
  const isRegModal = useSelector(state => state.auth.regModal);
  useEffect(() => {
    if (isAuth) {
      history.push('/contacts');
    }
  }, [isAuth]);
  return (
    <div className={styles.main}>
      {isRequesting && (
        <div className={styles.preload}>
          <CircularProgress />
        </div>
      )}
      {isRegModal && <Registration />}
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
            <form method="post" className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="emailInput" className={styles.formLabel}>
                <span className={styles.labelText}>Email </span>
                <input
                  id="emailInput"
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
              <p
                onClick={() => {
                  dispatch(openRegModal());
                }}
                className={styles.offerToReg}
              >
                Have not account? Registred now!
              </p>

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
}

export default LoginPage;
