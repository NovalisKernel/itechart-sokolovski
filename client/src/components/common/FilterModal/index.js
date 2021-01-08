import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { openFilterModal } from 'store/contacts/actions';
import { ReactComponent as CloseIcon } from 'assets/img/close.svg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './styles.module.css';
import Button from '../Button';

function Modal() {
  const dispatch = useDispatch();
  // const levelOptions = useSelector(state => state.contacts.levelOptions);
  // const promoterOptions = useSelector(state => state.contacts.promoterOptions);
  // const decisionOptions = useSelector(state => state.contacts.decisionOptions);

  return (
    <>
      <div
        className={styles.modal}
        onClick={() => {
          dispatch(openFilterModal());
        }}
      ></div>
      <Formik
        initialValues={{
          level: '',
          decision: '',
          promoter: '',
        }}
        onSubmit={(values, { setSubmitting }) => {}}
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
          <form className={styles.modalInfo} onSubmit={handleSubmit}>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>Filter by</h2>
              <CloseIcon
                onClick={() => {
                  dispatch(openFilterModal());
                }}
                className={styles.close}
              />
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.countsAppliedFilter}>3 filters applied</span>
              <h4 className={styles.deleteText}>Reset All</h4>
            </div>

            <div className={styles.aloneInputField}>
              <span className={styles.aloneInputText}>Priority Level</span>
              <div className={styles.checkBoxes}>
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="level" color="primary" />
                  }
                  label="High"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="level" color="primary" />
                  }
                  label="Middle"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="level" color="primary" />
                  }
                  label="Low"
                />
              </div>
            </div>

            <div className={styles.aloneInputField}>
              <span className={styles.aloneInputText}>Promoter/Detractor</span>
              <div className={styles.checkBoxes}>
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="promoter" color="primary" />
                  }
                  label="Promoter"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="promoter" color="primary" />
                  }
                  label="Detractor"
                />
              </div>
            </div>

            <div className={styles.aloneInputField}>
              <span className={styles.aloneInputText}>Decision</span>
              <div className={styles.checkBoxes}>
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="decision" color="primary" />
                  }
                  label="Decision1"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="decision" color="primary" />
                  }
                  label="Decision2"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="decision" color="primary" />
                  }
                  label="Decision3"
                />
              </div>
            </div>

            <div className={styles.bottomBtns}>
              <Button
                text="Cancel"
                isCancel="true"
                handleClick={() => {
                  dispatch(openFilterModal());
                }}
              />
              <button className={styles.formBtn} type="submit" disabled={isSubmitting}>
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Modal;
