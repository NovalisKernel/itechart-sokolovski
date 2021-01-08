import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registration, openRegModal } from 'store/auth/actions';
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';
import styles from './styles.module.css';
import validationSchema from '../../Login/validationRegSchema';

function Registration() {
  const dispatch = useDispatch();
  return (
    <div className={styles.regModal}>
      {/* {isRequesting && (
        <div className={styles.preload}>
          <CircularProgress />
        </div>
      )} */}
      <div onClick={() => dispatch(openRegModal())} className={styles.darkWindow}></div>
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
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
            <label htmlFor="email" className={styles.formLabel}>
              <span className={styles.labelText}>Email </span>
              <input
                className={styles.textField}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id="email"
              />
            </label>
            {errors.email && touched.email && errors.email}
            <label htmlFor="name" className={styles.formLabel}>
              <span className={styles.labelText}>Name </span>
              <input
                className={styles.textField}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                id="name"
              />
            </label>
            {errors.name && touched.name && errors.name}
            <label htmlFor="pass" className={styles.formLabel}>
              <span className={styles.labelText}>Password</span>
              <input
                className={styles.textField}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                id="pass"
              />
            </label>
            {errors.password && touched.password && errors.password}
            <button className={styles.formBtn} type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <CloseIcon
              onClick={() => dispatch(openRegModal())}
              className={styles.close}
            />
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Registration;
